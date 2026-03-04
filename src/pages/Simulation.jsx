import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Sparkles, MeshDistortMaterial, Sky } from "@react-three/drei";
import { motion, useScroll, useTransform } from "motion/react";
import * as THREE from "three";
import { ArrowDown } from "lucide-react";

// ==========================================
// 1. COMPONENTS 3D (R3F) - REALISTIC ENHANCEMENTS
// ==========================================

// Daftar warna berdasarkan kedalaman (Y) - Lebih sinematis
const depthColors = [
  { y: 50, color: new THREE.Color("#87CEEB") },  // Langit Biru Cerah (Terang)
  { y: 0, color: new THREE.Color("#004e7c") },   // Permukaan Laut (Lebih gelap realistis)
  { y: -50, color: new THREE.Color("#001a33") }, // Twilight Zone
  { y: -150, color: new THREE.Color("#020508") } // Deep Ocean / Abyss pekat
];

function getInterpolatedColor(currentY) {
  if (currentY >= depthColors[0].y) return depthColors[0].color;
  if (currentY <= depthColors[depthColors.length - 1].y) return depthColors[depthColors.length - 1].color;

  for (let i = 0; i < depthColors.length - 1; i++) {
    if (currentY <= depthColors[i].y && currentY > depthColors[i + 1].y) {
      const range = depthColors[i].y - depthColors[i + 1].y;
      const progress = (depthColors[i].y - currentY) / range;
      return depthColors[i].color.clone().lerp(depthColors[i + 1].color, progress);
    }
  }
  return depthColors[depthColors.length - 1].color;
}

// ------------------------------------------
// EKOSISTEM UDARA / PERMUKAAN (STYLE VECTOR 3D)
// ------------------------------------------

// 1. Burung Terbang (Siluet V)
function FlyingBirds() {
  const birdsRef = useRef();
  
  const birdsData = useMemo(() => {
    return new Array(5).fill().map(() => ({
      x: -50 + Math.random() * 100,
      y: 40 + Math.random() * 15,
      z: -20 - Math.random() * 20,
      speed: 0.1 + Math.random() * 0.1,
      scale: 0.5 + Math.random() * 0.5
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (birdsRef.current) {
        birdsRef.current.children.forEach((bird, i) => {
            const data = birdsData[i];
            // Burung terbang dari kiri ke kanan
            bird.position.x += data.speed;
            if (bird.position.x > 50) bird.position.x = -50;
            
            // Animasi kepak sayap (rotasi anak bentuk V)
            const flap = Math.sin(time * 10 * data.speed);
            bird.children[0].rotation.z = Math.PI / 4 + flap * 0.2; // Sayap kiri
            bird.children[1].rotation.z = -Math.PI / 4 - flap * 0.2; // Sayap kanan
        });
    }
  });

  return (
    <group ref={birdsRef}>
      {birdsData.map((data, index) => (
        <group key={index} position={[data.x, data.y, data.z]} scale={[data.scale, data.scale, data.scale]}>
            {/* Sayap Kiri */}
            <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[1.5, 0.1, 0.5]} />
                <meshBasicMaterial color="#111111" fog={false} />
            </mesh>
            {/* Sayap Kanan */}
            <mesh position={[0.5, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[1.5, 0.1, 0.5]} />
                <meshBasicMaterial color="#111111" fog={false} />
            </mesh>
        </group>
      ))}
    </group>
  );
}

// 2. Lingkungan Permukaan (Matahari, Gunung, Pepohonan)
function SurfaceEnvironment() {
  return (
    <group position={[0, 0, -50]}>
        {/* Matahari */}
        <mesh position={[-30, 45, -20]}>
            <circleGeometry args={[8, 32]} />
            <meshBasicMaterial color="#FFD700" fog={false} />
        </mesh>

        {/* Gunung Belakang (Warna lebih pudar) */}
        <mesh position={[-20, -5, -30]}>
            <coneGeometry args={[40, 30, 3]} />
            <meshBasicMaterial color="#6b8e23" fog={false} />
        </mesh>
        <mesh position={[25, -5, -35]}>
            <coneGeometry args={[50, 40, 3]} />
            <meshBasicMaterial color="#556b2f" fog={false} />
        </mesh>

        {/* Tebing & Pohon Depan */}
        <group position={[0, 2, -10]}>
            {/* Tebing Kiri */}
            <mesh position={[-40, 0, 0]}>
                <boxGeometry args={[50, 10, 10]} />
                <meshBasicMaterial color="#c2b280" fog={false} />
            </mesh>
            {/* Pohon Kiri */}
            <mesh position={[-35, 12, 0]}>
                <coneGeometry args={[4, 15, 8]} />
                <meshBasicMaterial color="#1e4d2b" fog={false} />
            </mesh>
            <mesh position={[-25, 10, -2]}>
                <coneGeometry args={[5, 20, 8]} />
                <meshBasicMaterial color="#163820" fog={false} />
            </mesh>
            <mesh position={[-45, 15, -5]}>
                <coneGeometry args={[6, 25, 8]} />
                <meshBasicMaterial color="#0f2615" fog={false} />
            </mesh>

            {/* Tebing Kanan */}
            <mesh position={[40, 0, 0]}>
                <boxGeometry args={[50, 10, 10]} />
                <meshBasicMaterial color="#c2b280" fog={false} />
            </mesh>
            {/* Pohon Kanan */}
            <mesh position={[35, 15, -2]}>
                <coneGeometry args={[5, 22, 8]} />
                <meshBasicMaterial color="#1e4d2b" fog={false} />
            </mesh>
            <mesh position={[25, 10, 0]}>
                <coneGeometry args={[4, 16, 8]} />
                <meshBasicMaterial color="#163820" fog={false} />
            </mesh>
            <mesh position={[45, 18, -3]}>
                <coneGeometry args={[7, 30, 8]} />
                <meshBasicMaterial color="#0f2615" fog={false} />
            </mesh>
        </group>
    </group>
  );
}


// ------------------------------------------
// EKOSISTEM BAWAH LAUT
// ------------------------------------------

// 1. Partikel Marine Snow (Lebih realistis drpd titik biru)
function MarineSnow({ count = 3000 }) {
  const mesh = useRef();
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 80;     // X (lebar)
        positions[i * 3 + 1] = -Math.random() * 200;       // Y (kedalaman 0 s/d -200)
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80; // Z (kedalaman kamera)
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      // Gerakan jatuh perlahan layaknya marine snow
      mesh.current.position.y -= 0.02;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      if (mesh.current.position.y < -50) {
          // Reset ke atas kalau udah terlalu ke bawah secara relatif
          mesh.current.position.y = 0;
      }
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" count={particlesPosition.length / 3} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      {/* Warna agak putih kusam, kecil-kecil layaknya kotoran/plankton organik di laut asli */}
      <pointsMaterial attach="material" size={0.08} color="#cccccc" transparent={true} opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false}/>
    </points>
  );
}


// 2. Dinding Palung Laut (Tebing Raksasa Realistis)
function TrenchWalls() {
  // Kita buat silinder panjang (tube) terbalik yang dindingnya kita deformasi supaya kaya batu karang asli
  const wallRef = useRef();

  useFrame((state) => {
      // Rotasi sangat pelan seolah arus membawa kita muter
      if (wallRef.current) {
          wallRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      }
  });

  return (
    <group ref={wallRef}>
      {/* Silinder dengan segmen banyak supaya detail pas di deformasi */}
      <mesh position={[0, -75, 0]}>
        {/* radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded */}
        <cylinderGeometry args={[40, 20, 160, 32, 64, true]} />
        {/* Material gelap, kasar, dengan wireframe mati. Pake DistortMaterial untuk kesan tebing ga beraturan */}
        <MeshDistortMaterial 
            color="#050a10" 
            envMapIntensity={0.2} 
            clearcoat={0.1} 
            clearcoatRoughness={0.9} 
            metalness={0.1} 
            roughness={1} 
            distort={0.4} // Seberapa ekstrim tekukannya
            speed={0.5}   // Seberapa cepat tekukannya gerak (dibikin statis/lambat pelan bgt aja)
            side={THREE.BackSide} // Render bagian DALAM silinder karena kamera kita di dalam
        />
      </mesh>
    </group>
  );
}

// 3. Dasar Samudra Berpasir Realistis (Displacement)
function RealisticOceanFloor() {
  return (
    <mesh position={[0, -145, 0]} rotation={[-Math.PI / 2, 0, 0]}>
         {/* Segmen div perbanyak (128x128) supaya detail gelombang pasir dapet */}
         <planeGeometry args={[150, 150, 128, 128]} />
         <MeshDistortMaterial 
            color="#02070c" 
            roughness={0.9} 
            metalness={0.1}
            distort={0.3} 
            speed={0.1} 
         />
    </mesh>
  );
}

// 4. Permukaan Air Bawah (Ripples) dari dalam
function WaterSurface() {
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      {/* Memandang ke atas dari dalem air */}
      <planeGeometry args={[200, 200, 64, 64]} />
      <MeshDistortMaterial 
        color="#006994" 
        transparent 
        opacity={0.8} 
        roughness={0.1} 
        metalness={0.8} 
        distort={0.3} 
        speed={1} 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

// 6. Pengendali Kamera Utama
function SceneController({ scrollProgress }) {
  useFrame(({ camera, scene }) => {
    // 1. GERAKIN KAMERA ALUR Y: Langit (50) -> Dasar (-140)
    // Diatas -145 supaya ga nabrak mesh dasar bgt
    const startY = 40;
    const endY = -140;
    // Bikin kamera slightly nunduk (rotasi X negatif) waktu nyelem biar dapet "Sense of depth / falling"
    const targetY = startY - ((startY - endY) * scrollProgress.get());
    
    // Lerp kamera biar mulus
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);

    // Bikin kamera makin nunduk (melihat ke bawah) makin dalem nyelem
    // Mulai lihat lurus (0), pas di dasar lihat nunduk (-Math.PI/4)
    const targetRotX = -Math.PI / 6 * scrollProgress.get();
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotX, 0.05);


    // 2. Transisi Warna Langit ke Laut secara Dinamis (Background + Fog)
    const currentColor = getInterpolatedColor(camera.position.y);
    
    scene.background = currentColor;
    // Set ketebalan kabut eksponensial. Di laut dalem kabut harus TEBAL PEKAT bikin claustrophobic
    // Jika di atas air (Y > 0), kabutnya tipis dan warnanya ikut langit biar daratan keliatan bagus
    if (camera.position.y > 0) {
        scene.fog = new THREE.Fog(currentColor, 10, 150); // Linear fog buat udara biar kejauhan hilang
    } else {
        const fogDensity = 0.015 + (camera.position.y / -150) * 0.04;
        scene.fog = new THREE.FogExp2(currentColor, fogDensity);
    }
  });

  return null;
}


// ==========================================
// 2. KOMPONEN REACT UTAMA
// ==========================================

export default function Simulation() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const entryOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-luna-midnight">
      
      {/* 3D CANVAS YANG STICKY DI LAYAR */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-[#87CEEB]">
         <Canvas camera={{ position: [0, 40, 15], fov: 60 }}>
            {/* Pencahayaan */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            {/* Lampu dr bawah tanah (seolah magma / pendar) buat bantu liat dasar */}
            <pointLight position={[0, -145, 0]} intensity={2} color="#112233" distance={50} />

            {/* Controller penggerak kamera (Scroll Engine) */}
            <SceneController scrollProgress={scrollYProgress} />

            {/* ======== LINGKUNGAN PERMUKAAN & LANGIT ======== */}
            <SurfaceEnvironment />
            <FlyingBirds />

            {/* ======== PERMUKAAN AIR ======== */}
            <WaterSurface />

            {/* ======== LINGKUNGAN BAWAH LAUT ======== */}
            <MarineSnow count={3000} />
            <TrenchWalls />
            <RealisticOceanFloor />
            
            {/* Bioluminescence Sparkles di kedalaman */}
            <Sparkles count={500} scale={40} size={2} speed={0.2} opacity={0.5} color="#00ffcc" position={[0, -50, 0]} />
            <Sparkles count={500} scale={50} size={1} speed={0.1} opacity={0.2} color="#ffffff" position={[0, -100, 0]} />


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

            <Html position={[0, -20, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center text-white">
                    <h2 className="text-3xl font-display font-bold text-luna-light mb-2">Zona Epipelagik</h2>
                    <p className="text-lg text-luna-light/80 mb-4">200 meter di bawah permukaan</p>
                    <p className="text-white/90">
                        Cahaya matahari masih bisa menembus air. Tempat dimana flora dan fauna laut paling padat.
                    </p>
                </div>
            </Html>

            <Html position={[0, -70, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-blue-900/30 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20 text-center text-white">
                    <h2 className="text-3xl font-display font-bold text-blue-300 mb-2">Zona Mesopelagik</h2>
                    <p className="text-lg text-blue-300/80 mb-4">1.000 meter (Twilight Zone)</p>
                    <p className="text-white/80">
                        Hanya 1% cahaya yang masuk ke sini. Banyak hewan yang bercahaya dalam gelap (Bioluminescence) mulai muncul.
                    </p>
                </div>
            </Html>

            <Html position={[0, -120, 0]} center className="pointer-events-none w-screen px-8">
                <div className="max-w-xl mx-auto bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 text-center text-white">
                    <h2 className="text-4xl font-display font-bold text-indigo-400 mb-2">Zona Batipelagik</h2>
                    <p className="text-lg text-indigo-400/80 mb-6">4.000 meter (Midnight Zone)</p>
                    <p className="text-white/70 text-lg">
                        Kegelapan abadi. Tekanan di sini bisa menghancurkan kapal selam biasa. 
                    </p>
                </div>
            </Html>
            
            <Html position={[0, -145, 0]} center className="pointer-events-none w-screen">
                <div className="text-center text-white pt-24">
                    <h1 className="text-5xl md:text-7xl font-display font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
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
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 drop-shadow-sm px-4 text-center">
            Ekspedisi Laut Dalam
        </h1>
        <p className="max-w-xl text-xl text-gray-800 drop-shadow-sm mx-auto text-center px-4 font-medium">
            Scroll ke bawah untuk mulai <br/> petualangan.
        </p>
        <ArrowDown className="mt-8 w-8 h-8 animate-bounce text-gray-900 drop-shadow-sm" />
      </motion.div>

    </div>
  );
}
