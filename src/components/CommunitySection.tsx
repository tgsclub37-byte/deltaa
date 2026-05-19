import { motion } from 'framer-motion';
import { FaDiscord, FaTwitch, FaYoutube, FaTwitter, FaReddit, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

const testimonials = [
  {
    name: 'ShadowByte_X',
    role: 'Delta Elite Player',
    country: '🇰🇷',
    rating: 5,
    text: "Delta 999 completely changed how I approach competitive gaming. The anti-cheat system is flawless — finally a fair playing field. I went from rank #5000 to top 50 in one season!",
    avatar: '⚡',
    gradient: 'from-cyan-500/10 to-blue-900/10',
    border: 'border-cyan-500/20',
  },
  {
    name: 'QuantumAce',
    role: 'Tournament Champion',
    country: '🇺🇸',
    rating: 5,
    text: "Won $50K in the NexusArena Grand Prix last month. The tournament system is incredibly smooth and professional. The prize payouts are instant. This platform is the real deal.",
    avatar: '🔥',
    gradient: 'from-purple-500/10 to-pink-900/10',
    border: 'border-purple-500/20',
  },
  {
    name: 'NeonViper',
    role: 'Pro Team Captain',
    country: '🇯🇵',
    rating: 5,
    text: "Managing our 15-person clan on Delta 999 is effortless. The analytics dashboard helped us identify weaknesses, and we climbed from regional to global top 10 in 2 months.",
    avatar: '💀',
    gradient: 'from-orange-500/10 to-red-900/10',
    border: 'border-orange-500/20',
  },
];

const socialPlatforms = [
  { icon: FaDiscord, name: 'Discord', count: '890K', color: '#5865F2', bg: 'bg-[#5865F2]/10', border: 'border-[#5865F2]/30', label: 'Members' },
  { icon: FaTwitch, name: 'Twitch', count: '2.1M', color: '#9146FF', bg: 'bg-[#9146FF]/10', border: 'border-[#9146FF]/30', label: 'Followers' },
  { icon: FaYoutube, name: 'YouTube', count: '4.5M', color: '#FF0000', bg: 'bg-[#FF0000]/10', border: 'border-[#FF0000]/30', label: 'Subscribers' },
  { icon: FaTwitter, name: 'Twitter/X', count: '1.8M', color: '#1DA1F2', bg: 'bg-[#1DA1F2]/10', border: 'border-[#1DA1F2]/30', label: 'Followers' },
  { icon: FaReddit, name: 'Reddit', count: '320K', color: '#FF4500', bg: 'bg-[#FF4500]/10', border: 'border-[#FF4500]/30', label: 'Members' },
];

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-24 bg-[#050510]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-green-400 font-rajdhani text-sm tracking-widest uppercase mb-4">
            <HiUserGroup />
            <span>Community</span>
            <HiUserGroup />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            JOIN THE{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              MOVEMENT
            </span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            Millions of elite gamers. One unstoppable community. Be part of the legend.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {socialPlatforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className={`${platform.bg} border ${platform.border} p-5 text-center cursor-pointer group transition-all duration-300`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              <platform.icon
                className="text-3xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ color: platform.color }}
              />
              <div className="font-orbitron font-black text-xl text-white mb-1">{platform.count}</div>
              <div className="font-rajdhani text-gray-500 text-xs tracking-wider">{platform.label}</div>
              <div className="font-rajdhani text-gray-400 text-xs mt-1">{platform.name}</div>
            </motion.a>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative bg-gradient-to-br ${t.gradient} border ${t.border} p-6 group transition-all duration-400`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-white/10 text-4xl mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 text-xs" />
                ))}
              </div>

              {/* Text */}
              <p className="font-rajdhani text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-lg"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-rajdhani font-bold text-white text-sm">
                    {t.name} {t.country}
                  </div>
                  <div className="font-rajdhani text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-[#0a0525] to-[#050520] border border-purple-500/20 p-8 sm:p-12 text-center overflow-hidden"
          style={{ clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))' }}
        >
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

          <div className="relative z-10">
            <div className="font-orbitron font-black text-2xl sm:text-3xl text-white mb-3">
              Get Exclusive Updates & Beta Access
            </div>
            <p className="font-rajdhani text-gray-400 text-lg mb-6 max-w-lg mx-auto">
              Be the first to know about new tournaments, game launches, and exclusive rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="enter@youremail.com"
                className="flex-1 bg-white/5 border border-white/20 text-white font-rajdhani placeholder-gray-500 px-5 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-orbitron font-bold text-sm tracking-widest uppercase px-6 py-3 whitespace-nowrap clip-btn"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
