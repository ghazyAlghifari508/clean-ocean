import { useRef, useMemo, Suspense, Component, useState, useEffect } from "react";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { Html, Sparkles, Sky, Environment, MeshDistortMaterial, useProgress } from "@react-three/drei";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import * as THREE from "three";
import { ArrowDown } from "lucide-react";
import { Water } from "three/examples/jsm/objects/Water.js";
import {
  SkyBirds,
  OceanFishGroups,
  DeepSeaCreatures,
  OceanFloorDecor,
  OceanTrash
} from "../components/simulation/SimulationCreatures";

extend({ Water });



// ==========================================
// 1. COMPONENTS 3D (R3F) - REALISTIC ENHANCEMENTS
// ==========================================

    // Warna lautan berdasarkan kedalaman yang lebih natural dan bersahabat
    const depthColors = [
      { distance: 40, color: new THREE.Color("#87CEEB") }, // Langit
      { distance: 2, color: new THREE.Color("#87CEEB") }, // Tepat di atas air (Sky Blue)
      { distance: -2, color: new THREE.Color("#006994") }, // Transisi cepat ke warna laut
      { distance: -20, color: new THREE.Color("#005b82") }, // Transisi ke area dalam
      { distance: -100, color: new THREE.Color("#00436b") }, // Sunlight Zone
      { distance: -200, color: new THREE.Color("#003b5c") }, // Twilight Zone
      { distance: -300, color: new THREE.Color("#0a2e5c") }, // Midnight Zone
      { distance: -400, color: new THREE.Color("#06132b") }, // Lower Midnight (Dark Navy)
      { distance: -500, color: new THREE.Color("#020815") }  // Abyss (Deepest Blue-Black)
];

function getInterpolatedColor(currentY) {
  if (currentY >= depthColors[0].distance) return depthColors[0].color;
  if (currentY <= depthColors[depthColors.length - 1].distance) return depthColors[depthColors.length - 1].color;

  for (let i = 0; i < depthColors.length - 1; i++) {
    if (currentY <= depthColors[i].distance && currentY > depthColors[i + 1].distance) {
      const range = depthColors[i].distance - depthColors[i + 1].distance;
      const progress = (depthColors[i].distance - currentY) / range;
      return depthColors[i].color.clone().lerp(depthColors[i + 1].color, progress);
    }
  }
  return depthColors[depthColors.length - 1].color;
}

// ------------------------------------------
// EKOSISTEM UDARA / PERMUKAAN (STYLE VECTOR 3D)
// ------------------------------------------

// 1. Burung Terbang dari SimulationCreatures
// (Digantikan oleh Lottie dari SimulationCreatures)
// 2. Lingkungan Permukaan (Hanya Langit/Matahari jika perlu, tapi sekarang dikosongkan)
function SurfaceEnvironment() {
  return (
    <group position={[0, 0, -50]}>
        {/* Pantai, Pohon, dan Gunung telah dihapus sesuai permintaan */}
    </group>
  );
}

// 3. Pengendali Visibilitas Permukaan (Otomatis Sembunyi saat Menyelam)
function AtmosphereController() {
  const [isAbove, setIsAbove] = useState(true);
  
  useFrame(({ camera }) => {
    // Sembunyikan dan unmount elemen udara jika sudah masuk zona epipelagik
    const above = camera.position.y > -1;
    if (above !== isAbove) setIsAbove(above);
  });

  if (!isAbove) return null;

  return (
    <>
      <Sky 
        distance={450000} 
        sunPosition={[100, 15, -100]} 
        turbidity={10}
        rayleigh={1.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        inclination={0.6} 
        azimuth={0.25} 
      />
      <Environment preset="night" />
      <SurfaceEnvironment />
      <SkyBirds />
    </>
  );
}


// ------------------------------------------
// EKOSISTEM BAWAH LAUT
// ------------------------------------------

// 1. Partikel Marine Snow (Lebih realistis drpd titik biru)
function MarineSnow({ count = 20000 }) {
  const mesh = useRef();
  
  // GUNAKAN 20.000 PARTIKEL UNTUK DENSITAS 'AGAK BANYAK' (MODERATE)
  const particlesPosition = useMemo(() => {
    const pCount = 20000;
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
        // Fokuskan horizontal (150 unit) agar terlihat padat di jalur kamera
        positions[i * 3] = (Math.random() - 0.5) * 150;     
        // SEBARKAN MERATA dari dekat permukaan sampai dasar
        positions[i * 3 + 1] = -2 - (Math.random() * 515);   
        positions[i * 3 + 2] = (Math.random() - 0.5) * 150; 
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      // TIDAK MENGIKUTI KAMERA (Static in world space)
      mesh.current.position.y = 0; 
      
      // Sedikit rotasi agar gelembung terasa mengambang natural
      mesh.current.rotation.y += 0.0002;
      
      // LOGIKA VISIBILITAS: Hanya muncul saat di bawah air
      const alpha = 1 - THREE.MathUtils.smoothstep(state.camera.position.y, -10, 2);
      mesh.current.material.opacity = alpha * 0.45;
      mesh.current.visible = alpha > 0.001;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" count={particlesPosition.length / 3} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      {/* Ukuran 0.18 agar terlihat cukup jelas tapi tidak kasar */}
      <pointsMaterial attach="material" size={0.18} color="#ffffff" transparent={true} opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} fog={true} />
    </points>
  );
}


// 2. Dinding Palung Laut (Komponen dihapus sesuai permintaan agar laut lebih bersih)

// 3. Dasar Samudra Vector (Ditempatkan di SimulationCreatures.jsx)

// 4. Permukaan Air - Ocean Realistic Shader
function WaterSurface() {
  const mesh = useRef();
  
  // Memuat normal air untuk simulasi ombak realistis
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const sunDirection = useMemo(() => new THREE.Vector3(100, 15, -100).normalize(), []);

  // MEMOIZE geometry agar tidak dibuat ulang saat re-render
  const geom = useMemo(() => new THREE.PlaneGeometry(5000, 5000), []);

  // Warna cerah permukaan — FIXED, tidak dependent pada kamera
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection,
      sunColor: "#ffffff",
      waterColor: "#006994",
      distortionScale: 4.5,
      fog: true,
    }),
    [waterNormals, sunDirection]
  );

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.material.uniforms.time.value += delta * 0.5;
      mesh.current.material.side = THREE.DoubleSide;
    }
  });

  return (
    <water
      ref={mesh}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
}

// 6. Pengendali Kamera Utama
function SceneController({ scrollProgress, ambientRef, sunRef }) {
  useFrame(({ camera, scene }) => {
    // 1. GERAKIN KAMERA ALUR Y: Langit (40) -> Dasar (-500)
    const startY = 40;
    const endY = -500;
    const targetY = startY - ((startY - endY) * scrollProgress.get());
    
    // Lerp kamera biar mulus
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);

    // Jaga agar kamera tetap melihat lurus ke depan (0 degree) agar elemen 2D Lottie tidak rusak perspektifnya
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, 0, 0.05);

    // 2. Transisi Warna Langit ke Laut secara Dinamis (Background + Fog)
    const currentColor = getInterpolatedColor(camera.position.y);
    
    // Smooth background color update
    scene.background = currentColor;

    // Smoother Fog Density Transition (Unified FogExp2)
    let fogDensity;
    if (camera.position.y > 10) {
        fogDensity = 0.002;
    } else if (camera.position.y > -10) {
        const t = (10 - camera.position.y) / 20;
        fogDensity = THREE.MathUtils.lerp(0.002, 0.015, t);
    } else {
        // Deep water fog scaling (dikurangi agar dasar terlihat)
        fogDensity = 0.015 + (camera.position.y / -500) * 0.015;
    }

    if (scene.fog) {
        scene.fog.color.copy(currentColor);
        scene.fog.density = fogDensity;
    }

    // 3. Lighting Dinamis: Kurangi cahaya matahari saat masuk ke dalam
    const lightFactor = THREE.MathUtils.smoothstep(camera.position.y, -300, 10);
    if (sunRef.current) sunRef.current.intensity = lightFactor * 3;
    if (ambientRef.current) ambientRef.current.intensity = THREE.MathUtils.lerp(0.05, 0.4, lightFactor);
  });

  return null;
}


// 7. Premium Loader Component
function SimulationLoader({ progress }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-ocean-abyss flex flex-col items-center justify-center"
    >
      {/* Solid background with subtle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

      <div className="relative flex flex-col items-center">
        {/* Animated Water Circle */}
        <div className="relative w-32 h-32 mb-12">
          <svg className="w-full h-full -rotate-90">
            <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <motion.circle 
              cx="64" cy="64" r="60" fill="none" 
              stroke="#0ea5e9" strokeWidth="4" 
              strokeDasharray="377"
              animate={{ strokeDashoffset: 377 - (377 * (progress / 100)) }}
              strokeLinecap="round"
              transition={{ duration: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-display font-black text-white">
              {Math.round(progress)}
              <span className="text-sm font-bold text-ocean-sky ml-1">%</span>
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-display font-bold text-white mb-2 tracking-widest uppercase">
            Mempersiapkan Ekspedisi
          </h2>
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-ocean-sky font-medium tracking-wide"
          >
            {progress < 30 ? "Menyiapkan oksigen..." : 
             progress < 60 ? "Mengecek kedalaman..." : 
             progress < 90 ? "Menyelam ke zona aman..." : "Siap meluncur!"}
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-10 left-10 text-white/10 text-[10px] font-mono tracking-tighter">
        LAT: 08.2435 / LONG: 115.2341 <br />
        DEPTH_INIT: 40.0M / O2_LEVEL: 100%
      </div>
    </motion.div>
  );
}

// ==========================================
// 2. KOMPONEN REACT UTAMA
// ==========================================

export default function Simulation() {
  const containerRef = useRef(null);
  const ambientRef = useRef();
  const sunRef = useRef();
  
  // Loading State
  const { progress, active } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (progress === 100 && !active) {
      const timer = setTimeout(() => setShowLoader(false), 800);
      return () => clearTimeout(timer);
    }
  }, [progress, active]);
  
  // ==========================================
  // STATE PENGELOLA SAMPAH (Global for Simulation)
  // ==========================================
  const [trashItems, setTrashItems] = useState([
    { id: 1, type: 'bag', pos: [8, -40, -2], size: 120, rot: 15, isCollected: false, trapped: null },
    { id: 2, type: 'bottle', pos: [-10, -90, -4], size: 100, rot: -10, isCollected: false, trapped: 'fish' },
    { id: 3, type: 'can', pos: [12, -150, -3], size: 90, rot: 20, isCollected: false, trapped: null },
    { id: 4, type: 'bag', pos: [-6, -230, -2], size: 110, rot: -15, isCollected: false, trapped: 'jellyfish' },
    { id: 5, type: 'bottle', pos: [7, -320, -4], size: 115, rot: 45, isCollected: false, trapped: null },
    { id: 6, type: 'can', pos: [-12, -400, -2], size: 95, rot: -30, isCollected: false, trapped: 'lionfish' },
    { id: 7, type: 'bag', pos: [5, -460, -1], size: 130, rot: 10, isCollected: false, trapped: null },
    { id: 8, type: 'bottle', pos: [-8, -480, -3], size: 105, rot: -25, isCollected: false, trapped: 'turtle' },
    { id: 9, type: 'can', pos: [10, -420, -2], size: 90, rot: 15, isCollected: false, trapped: null },
    { id: 10, type: 'bag', pos: [-15, -180, -4], size: 110, rot: 5, isCollected: false, trapped: null },
    { id: 11, type: 'bottle', pos: [-2, -60, -3], size: 105, rot: 25, isCollected: false, trapped: null },
    { id: 12, type: 'can', pos: [14, -200, -4], size: 95, rot: -40, isCollected: false, trapped: 'fish' },
    { id: 13, type: 'bag', pos: [-12, -280, -2], size: 125, rot: 50, isCollected: false, trapped: null },
    { id: 14, type: 'bottle', pos: [8, -380, -5], size: 100, rot: -15, isCollected: false, trapped: 'octopus' },
    { id: 15, type: 'can', pos: [2, -495, -2], size: 115, rot: 60, isCollected: false, trapped: null },
  ]);

  const collectedCount = trashItems.filter(item => item.isCollected).length;
  const totalCount = trashItems.length;

  const handleCollect = (id) => {
    setTrashItems(prev => prev.map(item => 
      item.id === id ? { ...item, isCollected: true } : item
    ));
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const entryOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-luna-midnight">
      <AnimatePresence>
        {showLoader && <SimulationLoader progress={progress} />}
      </AnimatePresence>
      
      {/* 3D CANVAS YANG STICKY DI LAYAR */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-[#00050d]">
         <Canvas camera={{ position: [0, 40, 15], fov: 60 }}>
            <fogExp2 attach="fog" args={["#000000", 0.002]} />

            {/* Pencahayaan */}
            <ambientLight ref={ambientRef} intensity={0.4} />
            <directionalLight ref={sunRef} position={[100, 15, -100]} intensity={3} color="#ffffff" />
            {/* Lampu dr bawah tanah (seolah magma / pendar) buat bantu liat dasar */}
            <pointLight position={[0, -505, 0]} intensity={3} color="#0077be" distance={200} />

            {/* Controller penggerak kamera (Scroll Engine) */}
            <SceneController scrollProgress={scrollYProgress} ambientRef={ambientRef} sunRef={sunRef} />

            {/* ======== LINGKUNGAN PERMUKAAN & LANGIT ======== */}
                <Suspense fallback={<Html center><div className="text-white text-xl font-display animate-pulse">Memuat Lautan...</div></Html>}>
                <AtmosphereController />

                {/* ======== PERMUKAAN AIR ======== */}
                <WaterSurface />

                {/* ======== LINGKUNGAN BAWAH LAUT ======== */}
                <MarineSnow />
                
                {/* Bioluminescence Sparkles di berbagai kedalaman */}
                <Sparkles count={400} scale={100} size={2} speed={0.2} opacity={0.4} color="#00ffcc" position={[0, -100, 0]} />
                <Sparkles count={600} scale={150} size={1} speed={0.1} opacity={0.3} color="#ffffff" position={[0, -300, 0]} />
                <Sparkles count={1000} scale={200} size={2} speed={0.3} opacity={0.5} color="#00ffff" position={[0, -500, 0]} />

                {/* ======== LOTTIE CREATURES & INTERACTIVE ======== */}
                <OceanFishGroups isMobile={isMobile} />
                <DeepSeaCreatures isMobile={isMobile} />
                <OceanFloorDecor isMobile={isMobile} />
                <OceanTrash items={trashItems} onCollect={handleCollect} isMobile={isMobile} />
            </Suspense>


            {/* ======== HTML OVERLAYS DI DALAM 3D ======== */}
            
            <Html position={[0, 35, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto text-center text-gray-900 drop-shadow-md">
                    <h2 className="text-4xl font-display font-bold mb-2">Permukaan Bumi</h2>
                    <p className="text-lg text-gray-800 font-medium">Dari lanskap yang indah, kita akan menyelam ke kedalaman tak terduga.</p>
                </div>
            </Html>

            <Html position={[0, 5, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto text-center text-white pb-32">
                    <h2 className="text-3xl font-display font-bold mb-2 drop-shadow-lg text-blue-200">Permukaan Laut</h2>
                    <p className="text-white/80 drop-shadow-md">Tahan napas, kita mulai masuk ke dalam air!</p>
                </div>
            </Html>

            <Html position={[0, -50, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center text-white">
                    <h2 className="text-3xl font-display font-bold text-luna-light mb-2">Zona Epipelagik</h2>
                    <p className="text-lg text-luna-light/80 mb-4">200 meter di bawah permukaan</p>
                    <p className="text-white/90">
                        Cahaya matahari masih bisa menembus air. Tempat dimana flora dan fauna laut paling padat.
                    </p>
                </div>
            </Html>

            <Html position={[0, -150, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-blue-900/30 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 text-center text-white">
                    <h2 className="text-3xl font-display font-bold text-blue-300 mb-2">Zona Mesopelagik</h2>
                    <p className="text-lg text-blue-300/80 mb-4">1.000 meter (Twilight Zone)</p>
                    <p className="text-white/80">
                        Hanya 1% cahaya yang masuk ke sini. Banyak hewan yang bercahaya dalam gelap (Bioluminescence) mulai muncul.
                    </p>
                </div>
            </Html>

            <Html position={[0, -300, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 text-center text-white">
                    <h2 className="text-4xl font-display font-bold text-indigo-400 mb-2">Zona Batipelagik</h2>
                    <p className="text-lg text-indigo-400/80 mb-6">4.000 meter (Midnight Zone)</p>
                    <p className="text-white/70 text-lg">
                        Kegelapan abadi. Tekanan di sini bisa menghancurkan kapal selam biasa. 
                    </p>
                </div>
            </Html>

            <Html position={[0, -450, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-indigo-950/40 backdrop-blur-lg p-8 rounded-2xl border border-indigo-500/10 text-center text-white">
                    <h2 className="text-4xl font-display font-bold text-purple-300 mb-2">Zona Abisopelagik</h2>
                    <p className="text-lg text-purple-300/80 mb-6">6.000 meter (The Abyss)</p>
                    <p className="text-white/60 text-lg">
                        Suhu mendekati titik beku. Di sini lah kegelapan yang sesungguhnya berada.
                    </p>
                </div>
            </Html>
            
            <Html position={[0, -500, 0]} center className="pointer-events-none w-screen">
                <div className="text-center text-white pt-24">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                        Dasar Palung Laut
                    </h1>
                </div>
            </Html>

         </Canvas>
      </div>

      <motion.div 
         style={{ opacity: entryOpacity }}
         className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 pointer-events-none"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 px-4 text-center">
            Ekspedisi Laut Dalam
        </h1>
        <p className="max-w-xl text-xl text-gray-800 drop-shadow-sm mx-auto text-center px-4 font-medium">
            Scroll ke bawah untuk mulai <br/> petualangan.
        </p>
        <ArrowDown className="mt-8 w-8 h-8 animate-bounce text-gray-900 drop-shadow-sm" />
      </motion.div>

      {/* PROFESSIONAL DASHBOARD COMPONENT - Bottom Right - Redesigned for a sleek, high-end technical aesthetic */}
      <div className="fixed bottom-10 right-10 z-50 pointer-events-none">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="bg-[#020617]/80 backdrop-blur-2xl border border-white/5 p-5 pr-10 rounded-lg flex items-center gap-8 pointer-events-auto border-l-4 border-l-blue-500/50"
        >
          {/* Technical Progress Circle (Replaces Emoji) */}
          <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90">
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
              <motion.circle 
                cx="28" cy="28" r="24" fill="none" 
                stroke="#0ea5e9" strokeWidth="3" 
                strokeDasharray="150"
                initial={{ strokeDashoffset: 150 }}
                animate={{ strokeDashoffset: 150 - (150 * (collectedCount / totalCount)) }}
                strokeLinecap="square"
                transition={{ duration: 1.2, ease: "circOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <span className="text-white text-[10px] font-black leading-none">
                {Math.round((collectedCount / (totalCount || 1)) * 100)}
               </span>
               <span className="text-white/40 text-[7px] font-bold uppercase tracking-tighter">%</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h4 className="text-white/40 text-[9px] font-black uppercase tracking-[0.4em] mb-1.5 leading-none">Operation Clean Ocean</h4>
            <div className="flex items-baseline gap-4 mt-0.5">
               <span className="text-white text-2xl font-display font-light tracking-[0.05em] leading-none uppercase">Collected</span>
               <div className="h-4 w-px bg-white/10" />
               <div className="flex items-baseline leading-none">
                  <span className="text-blue-400 text-2xl font-black font-mono">
                    {String(collectedCount).padStart(2, '0')}
                  </span>
                  <span className="text-white/20 text-xs font-mono mx-1">/</span>
                  <span className="text-white/60 text-lg font-mono">
                    {String(totalCount).padStart(2, '0')}
                  </span>
               </div>
            </div>
          </div>

          {/* Mission Status indicator */}
          {collectedCount === totalCount && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2.5 -right-2.5 bg-blue-600 px-3 py-1 rounded shadow-lg border border-white/20 flex items-center gap-1.5"
            >
              <div className="w-1 h-1 bg-white rounded-full animate-ping" />
              <span className="text-white text-[8px] font-black uppercase tracking-widest whitespace-nowrap">MISSION COMPLETE</span>
            </motion.div>
          )}
        </motion.div>
      </div>


    </div>
  );
}
