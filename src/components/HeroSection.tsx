import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaPlay, FaTrophy, FaUsers, FaGamepad } from 'react-icons/fa';
import { HiLightningBolt, HiChevronDown } from 'react-icons/hi';

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
  color: Math.random() > 0.5 ? '#00f5ff' : '#a855f7',
}));

const stats = [
  { icon: FaUsers, value: '2.4M+', label: 'Active Players', color: 'cyan' },
  { icon: FaTrophy, value: '$5M+', label: 'Prize Pool', color: 'purple' },
  { icon: FaGamepad, value: '999+', label: 'Live Games', color: 'orange' },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Draw animated hexagonal grid
    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animated grid lines
      const time = frame * 0.005;
      ctx.strokeStyle = `rgba(0, 245, 255, ${0.03 + Math.sin(time) * 0.01})`;
      ctx.lineWidth = 0.5;

      const spacing = 60;
      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 5, 0);
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 5, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 5);
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 5);
        ctx.stroke();
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/80 via-[#050510]/60 to-[#050510]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/80 via-transparent to-[#050510]/80" />

      {/* Animated canvas grid */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-rajdhani text-sm tracking-widest uppercase px-4 py-2 mb-8"
          style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
          Season 7 Now Live — Join the Battle
          <HiLightningBolt className="text-yellow-400" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-orbitron font-black text-6xl sm:text-7xl lg:text-9xl leading-none tracking-tighter">
            <span className="block text-white">ENTER</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent glow-cyan">
              DELTA 999
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="font-rajdhani text-gray-400 text-sm tracking-[0.4em] uppercase">Elite Gaming Awaits</span>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </motion.div>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-rajdhani text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The world's most advanced gaming platform. Compete in tournaments, climb the leaderboards, and dominate the arena with over{' '}
          <span className="text-cyan-400 font-semibold">2.4 million elite players</span> worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => window.open('https://wa.me/15558242814', '_blank')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-orbitron font-bold text-sm tracking-widest uppercase px-8 py-4 clip-btn overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <HiLightningBolt className="text-yellow-300 text-lg" />
            Massage Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 border border-purple-500/50 bg-purple-500/10 text-white font-rajdhani font-bold text-sm tracking-widest uppercase px-8 py-4 clip-btn hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300"
          >
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <FaPlay className="text-purple-400 text-xs ml-0.5" />
            </div>
            Watch Trailer
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-center clip-card group hover:border-cyan-500/30 transition-all duration-300`}
            >
              <stat.icon className={`text-2xl mx-auto mb-2 ${
                stat.color === 'cyan' ? 'text-cyan-400' :
                stat.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
              }`} />
              <div className={`stat-number text-2xl font-black`}>{stat.value}</div>
              <div className="text-gray-400 text-xs font-rajdhani tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-rajdhani text-xs tracking-widest uppercase">Scroll to Explore</span>
        <HiChevronDown className="text-cyan-400 text-xl" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30" />
      <div className="absolute top-24 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-purple-500/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-purple-500/30" />
    </section>
  );
}
