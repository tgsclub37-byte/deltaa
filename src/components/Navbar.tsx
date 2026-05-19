import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDiscord, FaTwitch } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050510]/95 backdrop-blur-xl border-b border-cyan-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 clip-btn flex items-center justify-center">
                  <span className="font-orbitron font-black text-white text-sm">Δ</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 clip-btn blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
              <div>
                <span className="font-orbitron font-black text-xl text-white tracking-widest">
                  DELTA
                  <span className="text-cyan-400 glow-cyan">999</span>
                </span>
                <div className="text-[9px] text-cyan-400/60 tracking-[0.3em] font-rajdhani uppercase">
                  Elite Gaming Platform
                </div>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-4 py-2 font-rajdhani font-semibold text-sm tracking-widest uppercase transition-colors duration-300 ${
                    activeLink === link.label
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {activeLink === link.label && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    />
                  )}
                  {link.label}
                  {activeLink === link.label && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#5865F2' }}
                className="text-gray-400 hover:text-[#5865F2] transition-colors text-xl"
              >
                <FaDiscord />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#9146FF' }}
                className="text-gray-400 hover:text-[#9146FF] transition-colors text-xl"
              >
                <FaTwitch />
              </motion.a>
              <div className="w-px h-6 bg-gray-700 mx-1" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-rajdhani font-bold text-sm tracking-widest uppercase px-5 py-2.5 clip-btn hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300"
              >
                <HiLightningBolt />
                Join Now
              </motion.button>
            </div>

            {/* Mobile menu btn */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 bg-[#050510]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                className="font-orbitron text-2xl font-bold text-white hover:text-cyan-400 transition-colors tracking-widest"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-rajdhani font-bold tracking-widest uppercase px-8 py-3 clip-btn"
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
