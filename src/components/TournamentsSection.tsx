import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaUsers, FaClock, FaFire, FaChevronRight } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const tournaments = [
  {
    id: 1,
    name: 'Delta World Championship',
    game: 'CyberStrike: Zero Dawn',
    prize: '$1,000,000',
    players: '512',
    date: 'Jun 15, 2025',
    status: 'LIVE',
    statusColor: 'text-red-400 border-red-400 bg-red-400/10',
    dotColor: 'bg-red-400',
    tier: 'LEGENDARY',
    tierColor: 'from-yellow-400 to-orange-500',
    registered: 480,
    max: 512,
  },
  {
    id: 2,
    name: 'Nexus Grand Prix Season 7',
    game: 'NexusArena: Ascendant',
    prize: '$500,000',
    players: '256',
    date: 'Jun 22, 2025',
    status: 'OPEN',
    statusColor: 'text-green-400 border-green-400 bg-green-400/10',
    dotColor: 'bg-green-400',
    tier: 'EPIC',
    tierColor: 'from-purple-400 to-pink-500',
    registered: 198,
    max: 256,
  },
  {
    id: 3,
    name: 'Quantum Speed Run Cup',
    game: 'Quantum Drift: Ultra',
    prize: '$250,000',
    players: '128',
    date: 'Jul 1, 2025',
    status: 'SOON',
    statusColor: 'text-yellow-400 border-yellow-400 bg-yellow-400/10',
    dotColor: 'bg-yellow-400',
    tier: 'RARE',
    tierColor: 'from-cyan-400 to-blue-500',
    registered: 87,
    max: 128,
  },
];

export default function TournamentsSection() {
  return (
    <section id="tournaments" className="relative py-24 bg-[#06060f]">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-yellow-400 font-rajdhani text-sm tracking-widest uppercase mb-4">
            <FaTrophy />
            <span>Tournaments & Events</span>
            <FaTrophy />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            COMPETE FOR{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              GLORY
            </span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            Enter elite tournaments with massive prize pools. Every match counts. Every moment matters.
          </p>
        </motion.div>

        {/* Tournament Cards */}
        <div className="space-y-6 mb-16">
          {tournaments.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative bg-white/3 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/3 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left: Tier + Name */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`bg-gradient-to-r ${t.tierColor} text-white font-orbitron text-[10px] font-black tracking-widest px-3 py-1`}
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    >
                      {t.tier}
                    </div>
                    <div className={`flex items-center gap-2 border font-rajdhani text-xs tracking-widest uppercase px-3 py-1 ${t.statusColor}`}
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor} ${t.status === 'LIVE' ? 'animate-pulse' : ''}`} />
                      {t.status}
                    </div>
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {t.name}
                  </h3>
                  <p className="font-rajdhani text-gray-400 text-sm">{t.game}</p>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-rajdhani text-xs text-gray-500">Registration</span>
                      <span className="font-orbitron text-xs text-cyan-400">{t.registered}/{t.max}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(t.registered / t.max) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8">
                  <div className="text-center">
                    <div className="text-yellow-400 text-2xl mb-1"><FaTrophy /></div>
                    <div className="font-orbitron font-black text-white text-lg">{t.prize}</div>
                    <div className="font-rajdhani text-gray-500 text-xs tracking-wider">Prize Pool</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 text-2xl mb-1"><FaUsers /></div>
                    <div className="font-orbitron font-black text-white text-lg">{t.players}</div>
                    <div className="font-rajdhani text-gray-500 text-xs tracking-wider">Players</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 text-2xl mb-1"><FaCalendarAlt /></div>
                    <div className="font-orbitron font-black text-white text-sm">{t.date}</div>
                    <div className="font-rajdhani text-gray-500 text-xs tracking-wider">Start Date</div>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-orbitron font-bold text-xs tracking-widest uppercase px-6 py-3 whitespace-nowrap transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  <HiLightningBolt />
                  Register
                  <FaChevronRight className="text-[10px]" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 p-8 sm:p-12 text-center"
          style={{ clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))' }}
        >
          <div className="absolute inset-0 diagonal-stripe" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <FaFire className="text-orange-400 text-4xl mx-auto mb-4 float-animation" />
          <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white mb-3">
            Ready to Create Your Own Tournament?
          </h3>
          <p className="font-rajdhani text-gray-400 text-lg mb-6 max-w-lg mx-auto">
            Host private tournaments for your squad or go public and attract global competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,245,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-orbitron font-bold text-sm tracking-widest uppercase px-8 py-3 clip-btn"
            >
              Host Tournament
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 bg-white/5 text-white font-rajdhani font-bold text-sm tracking-widest uppercase px-8 py-3 clip-btn hover:bg-white/10 transition-all"
            >
              <FaClock className="inline mr-2" />
              View Schedule
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
