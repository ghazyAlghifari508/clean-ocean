import { useState } from "react";
import { Html, Sparkles } from "@react-three/drei";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "motion/react";

// ========== LOTTIE ASSET IMPORTS ==========
import birdsAnim from "../../assets/Birds.json";
import dolphinAnim from "../../assets/Dolphin Jumping.json";
import fishSchoolAnim from "../../assets/fish_school.json";
import banyakIkanAnim from "../../assets/banyak_ikan.json";
import fish1Anim from "../../assets/fish1.json";
import lionFishAnim from "../../assets/Lion Fish.json";
import jellyfishAnim from "../../assets/Jellyfish.json";
import octopusAnim from "../../assets/octopus.json";
import turtleAnim from "../../assets/Turtle.json";
import seaweedAnim from "../../assets/Seaweed copy.json";
import batuNavy from "../../assets/batu-navy.png";

// ==========================================
// KARTUN SAMPAH LAUT SVG
// ==========================================
function CartoonPlasticBag() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.2))">
      <path d="M 50 70 C 40 40, 80 30, 100 40 C 120 30, 160 40, 150 70 L 160 160 C 140 180, 60 180, 40 160 Z" fill="rgba(180, 220, 255, 0.4)" stroke="rgba(100, 180, 255, 0.8)" strokeWidth="5" />
      <path d="M 60 70 C 50 30, 80 40, 80 70" fill="none" stroke="rgba(100, 180, 255, 0.8)" strokeWidth="5" />
      <path d="M 140 70 C 150 30, 120 40, 120 70" fill="none" stroke="rgba(100, 180, 255, 0.8)" strokeWidth="5" />
      <path d="M 70 100 Q 100 120, 130 90" fill="none" stroke="rgba(100, 180, 255, 0.6)" strokeWidth="3" />
      <path d="M 60 130 Q 90 150, 140 120" fill="none" stroke="rgba(100, 180, 255, 0.6)" strokeWidth="3" />
    </svg>
  );
}

function CartoonSodaCan() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))">
      {/* Can Body */}
      <rect x="65" y="40" width="70" height="120" rx="10" fill="#ff4d4d" />
      {/* Top and Bottom Silver parts */}
      <ellipse cx="100" cy="40" rx="35" ry="10" fill="#d1d5db" />
      <ellipse cx="100" cy="160" rx="35" ry="10" fill="#9ca3af" />
      {/* Striped design */}
      <path d="M 65 80 Q 100 90, 135 80" fill="none" stroke="white" strokeWidth="8" opacity="0.8" />
      <path d="M 65 120 Q 100 130, 135 120" fill="none" stroke="white" strokeWidth="8" opacity="0.8" />
      {/* Tab on top */}
      <ellipse cx="100" cy="40" rx="8" ry="4" fill="#9ca3af" />
      <circle cx="105" cy="40" r="2" fill="#4b5563" />
    </svg>
  );
}

function CartoonPlasticBottle() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.2))">
      {/* Bottle Body */}
      <path d="M 80 40 L 120 40 L 130 60 L 130 160 Q 130 175, 115 175 L 85 175 Q 70 175, 70 160 L 70 60 Z" fill="rgba(200, 240, 255, 0.5)" stroke="white" strokeWidth="4" />
      {/* Cap */}
      <rect x="85" y="30" width="30" height="10" rx="2" fill="#3b82f6" />
      {/* Label */}
      <rect x="70" y="90" width="60" height="30" fill="rgba(255, 255, 255, 0.3)" />
      {/* Water line */}
      <path d="M 70 140 Q 100 135, 130 142" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

// ==========================================
// LANGIT — Burung-burung
// ==========================================
export function SkyBirds() {
  return (
    <>
      {/* Kelompok burung kiri — Posisi dinaikkan ke kedalaman 48 */}
      <Html position={[-18, 48, -10]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div style={{ width: 340, opacity: 0.75 }}>
          <Lottie animationData={birdsAnim} loop />
        </div>
      </Html>

      {/* Kelompok burung tengah-kanan — Posisi dinaikkan ke kedalaman 50 */}
      <Html position={[12, 50, -8]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div style={{ width: 300, opacity: 0.85, transform: "scaleX(-1)" }}>
          <Lottie animationData={birdsAnim} loop />
        </div>
      </Html>

      {/* Kelompok burung kanan jauh — Posisi dinaikkan ke kedalaman 45 */}
      <Html position={[35, 45, -15]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div style={{ width: 260, opacity: 0.6, filter: "blur(0.5px)" }}>
          <Lottie animationData={birdsAnim} loop />
        </div>
      </Html>
    </>
  );
}

// ==========================================
// PERMUKAAN — Lumba-lumba melompat (REMOVED)
// ==========================================

// ==========================================
// BAWAH LAUT — Kelompok ikan
// ==========================================
export function OceanFishGroups() {
  return (
    <>
      {/* Ikan kecil berkelompok gaya blue-silver (Restored) */}
      <Html position={[-12, -45, -3]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div style={{ width: 220, opacity: 0.85, animation: "swimRightLeft 30s linear infinite" }}>
          <Lottie animationData={banyakIkanAnim} loop />
        </div>
      </Html>

      {/* Lion Fish — transisi ke Mesopelagik (Diperbesar Lebih Lanjut) */}
      <Html position={[6, -120, -3]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div style={{ width: 320, opacity: 0.85, animation: "swimRightLeft 28s linear infinite" }}>
          <Lottie animationData={lionFishAnim} loop />
        </div>
      </Html>
    </>
  );
}

// ==========================================
// LAUT DALAM — Ubur-ubur, Gurita, Kura-kura
// ==========================================
export function DeepSeaCreatures() {
  return (
    <>
      {/* Kura-kura — Epipelagik */}
      <Html position={[-10, -35, -4]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div style={{ width: 180, opacity: 0.85, animation: "swimLeftRight 35s linear infinite" }}>
          <Lottie animationData={turtleAnim} loop />
        </div>
      </Html>

      {/* Ubur-ubur 1 — Mesopelagik (Diperbesar Lebih Lanjut) */}
      <Html position={[-6, -160, -3]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div
          style={{
            width: 220,
            opacity: 0.8,
            filter: "drop-shadow(0 0 20px rgba(168,85,247,0.7))",
            animation: "jellyfishFloat 4s ease-in-out infinite",
          }}
        >
          <Lottie animationData={jellyfishAnim} loop />
        </div>
      </Html>

      {/* Ubur-ubur 2 — Mesopelagik bawah (Diperbesar Lebih Lanjut) */}
      <Html position={[8, -190, -5]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div
          style={{
            width: 180,
            opacity: 0.7,
            filter: "drop-shadow(0 0 15px rgba(168,85,247,0.5))",
            animation: "jellyfishFloat 5s ease-in-out 1.5s infinite",
          }}
        >
          <Lottie animationData={jellyfishAnim} loop />
        </div>
      </Html>

      {/* Gurita — Batipelagik */}
      <Html position={[0, -280, -3]} center className="pointer-events-none" zIndexRange={[0, 0]}>
        <div
          style={{
            width: 220,
            opacity: 0.6,
            filter: "drop-shadow(0 0 10px rgba(0,255,255,0.3))",
            animation: "jellyfishFloat 6s ease-in-out infinite",
          }}
        >
          <Lottie animationData={octopusAnim} loop />
        </div>
      </Html>
    </>
  );
}

// ==========================================
// DASAR LAUT — Seaweed, Rock, Vector Hills
// ==========================================
export function OceanFloorDecor() {
  return (
    <>
      {/* ======================================= */}
      {/* DASAR LAUT LANDSCAPE - PREMIUM STYLIZED   */}
      {/* ======================================= */}
      <group position={[0, -506, -5]}>
         {/* Cahaya glow biru lembut di dasar laut membedakan foreground dengan background abyss */}
         <pointLight position={[0, 8, 5]} intensity={30} distance={50} color="#2c75d4" decay={1.5} />
         <pointLight position={[-15, 5, 2]} intensity={20} distance={40} color="#1c559c" decay={2} />
         <ambientLight intensity={0.3} color="#051024" />

         {/* Efek Kabut Tipis / Haze Air Bawah Laut */}
         <Sparkles count={250} scale={[40, 15, 10]} position={[0, 5, 2]} size={8} speed={0.1} opacity={0.15} color="#5eabff" />

         {/* Lapis 1: Bukit Belakang (Paling gelap) */}
         <mesh position={[-5, -11, -4]} scale={[4.5, 1, 1]}>
           <sphereGeometry args={[10, 64, 32]} />
           <meshStandardMaterial color="#06132b" roughness={1} metalness={0} fog={true} />
         </mesh>

         {/* Lapis 2: Bukit Sedang Kanan */}
         <mesh position={[14, -10, -2]} scale={[5, 1, 1]}>
           <sphereGeometry args={[10, 64, 32]} />
           <meshStandardMaterial color="#091b3a" roughness={1} metalness={0} fog={true} />
         </mesh>

         {/* Lapis 3: Bukit Depan Kiri (Terkena glow light paling kuat) */}
         <mesh position={[-12, -9, 0]} scale={[4, 0.9, 1.5]}>
           <sphereGeometry args={[10, 64, 32]} />
           <meshStandardMaterial color="#0c2448" roughness={1} metalness={0} fog={true} />
         </mesh>

         {/* Lapis 4: Hamparan Dasar Sambungan (Menyatukan semua bentuk biar rata horizontal) */}
         <mesh position={[0, -11, 2]} scale={[12, 0.5, 3]}>
           <sphereGeometry args={[10, 64, 32]} />
           <meshStandardMaterial color="#0f2b54" roughness={1} metalness={0} fog={true} />
         </mesh>
      </group>

      {/* ======================================= */}
      {/* ASSET CORAL & ROCK BERSANDAR DI DASAR     */}
      {/* ======================================= */}
      
      {/* Seaweed cluster kiri — Diatur rapat di poros tengah agar tidak tabrakan dengan batu */}
      <Html position={[-4, -505.5, 0]} center className="pointer-events-none" zIndexRange={[12, 12]}>
        <div style={{ width: 60, opacity: 0.8 }}>
          <Lottie animationData={seaweedAnim} loop />
        </div>
      </Html>

      {/* Seaweed cluster tengah — Diatur rapat di poros tengah */}
      <Html position={[0, -506.5, -2]} center className="pointer-events-none" zIndexRange={[5, 5]}>
        <div style={{ width: 50, opacity: 0.7 }}>
          <Lottie animationData={seaweedAnim} loop />
        </div>
      </Html>

      {/* Seaweed cluster kanan — Diatur rapat di poros tengah */}
      <Html position={[4, -504.5, -1]} center className="pointer-events-none" zIndexRange={[12, 12]}>
        <div style={{ width: 65, opacity: 0.8, transform: "scaleX(-1)" }}>
          <Lottie animationData={seaweedAnim} loop />
        </div>
      </Html>

      {/* Rock kiri — Kembalikan ke posisi x: -16 (Jangan diubah lagi) */}
      <Html position={[-12, -505, 1]} center className="pointer-events-none" zIndexRange={[15, 15]}>
        <div style={{ width: 650, opacity: 1 }}>
          <img src={batuNavy} alt="Batu Navy" style={{ width: "100%", filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.7))" }} />
        </div>
      </Html>

      {/* Rock kanan — Digeser lebih ke tengah dan diperbesar sedikit */}
      <Html position={[12, -504.5, 0]} center className="pointer-events-none" zIndexRange={[15, 15]}>
        <div style={{ width: 600, opacity: 1, transform: "scaleX(-1)" }}>
          <img src={batuNavy} alt="Batu Navy" style={{ width: "100%", filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.7))" }} />
        </div>
      </Html>
    </>
  );
}

// ==========================================
// SAMPAH LAUT & PENYELAMATAN MAKHLUK
// ==========================================

export function OceanTrash({ items, onCollect }) {
  return (
    <>
      {items.map((item) => (
        <TrashCollectionPoint 
          key={item.id} 
          item={item} 
          onCollect={() => onCollect(item.id)} 
        />
      ))}
    </>
  );
}

function TrashCollectionPoint({ item, onCollect }) {
  const { type, pos, size, rot, isCollected, trapped } = item;

  const getCreatureAnim = (creature) => {
    switch(creature) {
      case 'fish': return fish1Anim;
      case 'jellyfish': return jellyfishAnim;
      case 'lionfish': return lionFishAnim;
      case 'turtle': return turtleAnim;
      case 'octopus': return octopusAnim;
      default: return fish1Anim;
    }
  };

  const getCreatureWidth = (creature) => {
    switch(creature) {
      case 'fish': return 140;
      case 'jellyfish': return 160;
      case 'lionfish': return 220;
      case 'turtle': return 150;
      case 'octopus': return 200;
      default: return 140;
    }
  };

  return (
    <Html position={pos} center zIndexRange={isCollected ? [0, 0] : [10, 10]}>
      <div
        style={{
          position: "relative",
          width: size * 2.5,
          minHeight: size * 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* MAKHLUK YANG TERJEBAK (Jika ada) */}
        {trapped && (
          <motion.div
            animate={isCollected 
              ? { x: [-80, 80, -80], y: [0, -20, 20, 0] } 
              : { scale: [1, 1.05, 1] }
            }
            transition={isCollected 
              ? { duration: 12, repeat: Infinity, ease: "easeInOut" } 
              : { duration: 2, repeat: Infinity }
            }
            style={{
              width: getCreatureWidth(trapped),
              position: "relative",
              zIndex: 3,
              filter: isCollected ? "none" : "grayscale(0.5) contrast(0.8)",
              opacity: isCollected ? 0.9 : 0.7,
            }}
          >
            <Lottie animationData={getCreatureAnim(trapped)} loop />
          </motion.div>
        )}

        {/* OVERLAY SAMPAH (Interaktif jika belum dikumpulkan) */}
        <AnimatePresence>
          {!isCollected && (
            <motion.div
              layoutId={`trash-${item.id}`}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5, rotate: 20, y: -50 }}
              transition={{ duration: 0.6 }}
              onClick={onCollect}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                pointerEvents: "auto",
              }}
            >
              {/* Efek Jaring jika ada makhluk terjebak */}
              {trapped && (
                <div
                  style={{
                    position: "absolute",
                    inset: -10,
                    border: "3px dashed rgba(255,100,100,0.5)",
                    borderRadius: "50%",
                    background: "rgba(139,69,19,0.15)",
                    animation: "pulse 2s infinite",
                  }}
                />
              )}
              
              <div style={{ 
                width: size, 
                opacity: 0.95, 
                transform: `rotate(${rot}deg)`,
                filter: trapped ? "sepia(0.3) saturate(1.5)" : "none"
              }}>
                {type === 'bag' ? <CartoonPlasticBag /> : 
                 type === 'bottle' ? <CartoonPlasticBottle /> : <CartoonSodaCan />}
              </div>

              {/* Label Interaksi */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  position: "absolute",
                  bottom: -15,
                  background: trapped ? "rgba(255,60,60,0.95)" : "rgba(59,130,246,0.95)",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  zIndex: 6,
                }}
              >
                {trapped ? "🆘 Tolong!" : "🗑️ Bersihkan"}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
}

