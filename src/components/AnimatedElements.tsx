import { motion } from "framer-motion";

// Animated motorcycle that rides across the screen
export const RidingBike = () => (
  <div className="relative w-full overflow-hidden h-16 my-8">
    <motion.div
      initial={{ x: "-10%" }}
      animate={{ x: "110%" }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0"
    >
      <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="text-primary">
        {/* Back wheel */}
        <motion.circle cx="18" cy="38" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Front wheel */}
        <motion.circle cx="62" cy="38" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Frame */}
        <path d="M18 38 L35 20 L50 20 L62 38" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M35 20 L30 38" stroke="currentColor" strokeWidth="2" />
        <path d="M50 20 L55 38" stroke="currentColor" strokeWidth="2" />
        {/* Handlebar */}
        <path d="M50 20 L58 14 L64 16" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Seat */}
        <path d="M32 18 L42 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Exhaust puff */}
        <motion.circle cx="5" cy="35" r="3" fill="hsl(var(--muted-foreground))" opacity="0.3"
          animate={{ x: [-5, -15], opacity: [0.3, 0], scale: [1, 2] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.circle cx="0" cy="32" r="2" fill="hsl(var(--muted-foreground))" opacity="0.2"
          animate={{ x: [-8, -20], opacity: [0.2, 0], scale: [1, 2.5] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
        />
      </svg>
    </motion.div>
    {/* Road line */}
    <div className="absolute bottom-0 w-full h-[2px] bg-border" />
    <div className="absolute bottom-0 w-full flex gap-8 justify-center">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-8 h-[2px] bg-primary/30"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  </div>
);

// Animated mountain range with parallax
export const MountainScene = () => (
  <div className="relative w-full h-48 overflow-hidden my-12">
    {/* Sky gradient */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(210 80% 70% / 0.15), hsl(24 85% 48% / 0.08))" }} />

    {/* Sun */}
    <motion.div
      className="absolute top-4 right-16 w-16 h-16 rounded-full"
      style={{ background: "radial-gradient(circle, hsl(40 95% 65%), hsl(24 85% 48% / 0.6))" }}
      animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-4 right-16 w-16 h-16 rounded-full"
      style={{ background: "radial-gradient(circle, transparent 50%, hsl(40 95% 65% / 0.3) 100%)" }}
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Far mountains */}
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
      <motion.path
        d="M0 200 L0 140 L100 80 L200 120 L300 60 L400 100 L500 40 L600 90 L700 50 L800 110 L900 70 L1000 100 L1100 55 L1200 130 L1200 200Z"
        fill="hsl(var(--muted))"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      {/* Snow caps */}
      <motion.path
        d="M295 65 L300 60 L305 65Z M495 45 L500 40 L505 45Z M695 55 L700 50 L705 55Z M895 75 L900 70 L905 75Z M1095 60 L1100 55 L1105 60Z"
        fill="hsl(var(--background))"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </svg>

    {/* Near mountains */}
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 150" preserveAspectRatio="none">
      <motion.path
        d="M0 150 L0 120 L150 60 L300 100 L450 30 L600 80 L750 50 L900 90 L1050 40 L1200 100 L1200 150Z"
        fill="hsl(var(--card))"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </svg>

    {/* Floating clouds */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-background/60"
        style={{
          width: 60 + i * 20,
          height: 20 + i * 5,
          top: 20 + i * 25,
          left: `${10 + i * 30}%`,
        }}
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}

    {/* Birds */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={`bird-${i}`}
        className="absolute text-foreground/30"
        style={{ top: 15 + i * 12, left: `${20 + i * 18}%` }}
        animate={{ y: [0, -5, 0], x: [0, 8, 0] }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      >
        <svg width="16" height="8" viewBox="0 0 16 8">
          <path d="M0 8 Q4 0 8 4 Q12 0 16 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>
    ))}
  </div>
);

// Ocean wave animation
export const SeaBreeze = () => (
  <div className="relative w-full h-32 overflow-hidden my-8">
    {/* Multiple wave layers */}
    {[0, 1, 2].map((layer) => (
      <motion.div
        key={layer}
        className="absolute bottom-0 w-[200%] h-full"
        animate={{ x: layer % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 6 + layer * 2, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" viewBox="0 0 2400 100" preserveAspectRatio="none">
          <path
            d={`M0 ${60 + layer * 12} Q150 ${40 + layer * 8} 300 ${60 + layer * 12} T600 ${60 + layer * 12} T900 ${60 + layer * 12} T1200 ${60 + layer * 12} T1500 ${60 + layer * 12} T1800 ${60 + layer * 12} T2100 ${60 + layer * 12} T2400 ${60 + layer * 12} V100 H0Z`}
            fill={`hsl(200 60% ${65 + layer * 10}% / ${0.4 - layer * 0.1})`}
          />
        </svg>
      </motion.div>
    ))}
    {/* Sparkles on water */}
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={`sparkle-${i}`}
        className="absolute w-1 h-1 rounded-full bg-primary/40"
        style={{ left: `${10 + i * 11}%`, bottom: `${30 + (i % 3) * 15}%` }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </div>
);

// Floating particles background
export const FloatingParticles = ({ count = 15 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 3 + (i % 4) * 2,
          height: 3 + (i % 4) * 2,
          left: `${(i * 7.3) % 100}%`,
          top: `${(i * 13.7) % 100}%`,
          background: i % 3 === 0
            ? "hsl(var(--primary) / 0.3)"
            : "hsl(var(--muted-foreground) / 0.15)",
        }}
        animate={{
          y: [0, -30 - (i % 5) * 10, 0],
          x: [0, (i % 2 === 0 ? 15 : -15), 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5 + (i % 4) * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}
  </div>
);
