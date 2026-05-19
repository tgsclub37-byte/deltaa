import { motion } from 'framer-motion';
import { FaMedal, FaChevronUp, FaMinus } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const players = [
  { rank: 1, name: 'ShadowByte_X', country: '🇰🇷', game: 'CyberStrike', score: 98420, kills: 3241, win: '94%', change: 'up', avatar: '⚡' },
  { rank: 2, name: 'QuantumAce', country: '🇺🇸', game: 'NexusArena', score: 97150, kills: 2987, win: '91%', change: 'up', avatar: '🔥' },
  { rank: 3, name: 'NeonViper', country: '🇯🇵', game: 'CyberStrike', score: 96780, kills: 3102, win: '89%', change: 'same', avatar: '💀' },
  { rank: 4, name: 'CryptoKnight', country: '🇧🇷', game: 'Quantum Drift', score: 94200, kills: 2756, win: '87%', change: 'up', avatar: '🎯' },
  { rank: 5, name: 'StormCaller', country: '🇩🇪', game: 'NexusArena', score: 93800, kills: 2634, win: '85%', change: 'down', avatar: '🌩️' },
  { rank: 6, name: 'PhantomBlade', country: '🇬🇧', game: 'Shadow Protocol', score: 92100, kills: 2489, win: '84%', change: 'up', avatar: '🗡️' },
  { rank: 7, name: 'IronFoxX', country: '🇨🇳', game: 'CyberStrike', score: 91540, kills: 2341, win: '82%', change: 'same', avatar: '🦊' },
];

const getRankStyle = (rank: number) => {
  if (rank === 1) return { bg: 'bg-yellow-400/10 border-yellow-400/40', text: 'text-yellow-400', medal: '🥇' };
  if (rank === 2) return { bg: 'bg-gray-300/10 border-gray-400/30', text: 'text-gray-300', medal: '🥈' };
  if (rank === 3) return { bg: 'bg-orange-400/10 border-orange-500/30', text: 'text-orange-400', medal: '🥉' };
  return { bg: 'bg-white/3 border-white/8', text: 'text-gray-400', medal: '' };
};

export default function LeaderboardSection() {
  return (
    <section id="leaderboard" className="relative py-24 bg-[#050510] cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 font-rajdhani text-sm tracking-widest uppercase mb-4">
            <FaMedal />
            <span>Global Rankings</span>
            <FaMedal />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            TOP{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              LEGENDS
            </span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            The world's best compete daily. Track live rankings, stats, and streaks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leaderboard Table */}
          <div className="lg:col-span-2">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-4 pb-3 border-b border-white/10 mb-2">
              {['#', 'Player', 'Game', 'Kills', 'Win%', 'Score', ''].map((h, i) => (
                <div key={i} className={`font-rajdhani text-xs text-gray-500 tracking-widest uppercase ${
                  i === 0 ? 'col-span-1' :
                  i === 1 ? 'col-span-4' :
                  i === 2 ? 'col-span-2' :
                  i === 3 ? 'col-span-1' :
                  i === 4 ? 'col-span-1' :
                  i === 5 ? 'col-span-2' : 'col-span-1'
                }`}>
                  {h}
                </div>
              ))}
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {players.map((p, i) => {
                const style = getRankStyle(p.rank);
                return (
                  <motion.div
                    key={p.rank}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ x: 4, backgroundColor: 'rgba(0,245,255,0.03)' }}
                    className={`grid grid-cols-12 gap-2 items-center px-4 py-3 border ${style.bg} cursor-pointer transition-all duration-300`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                  >
                    {/* Rank */}
                    <div className="col-span-1">
                      {style.medal ? (
                        <span className="text-lg">{style.medal}</span>
                      ) : (
                        <span className={`font-orbitron font-bold text-sm ${style.text}`}>{p.rank}</span>
                      )}
                    </div>

                    {/* Player */}
                    <div className="col-span-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-sm flex-shrink-0"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                      >
                        {p.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="font-rajdhani font-bold text-white text-sm truncate">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.country}</div>
                      </div>
                    </div>

                    {/* Game */}
                    <div className="col-span-2">
                      <span className="font-rajdhani text-xs text-gray-400 truncate block">{p.game}</span>
                    </div>

                    {/* Kills */}
                    <div className="col-span-1">
                      <span className="font-orbitron text-xs text-cyan-400">{p.kills.toLocaleString()}</span>
                    </div>

                    {/* Win% */}
                    <div className="col-span-1">
                      <span className="font-rajdhani text-xs text-green-400">{p.win}</span>
                    </div>

                    {/* Score */}
                    <div className="col-span-2">
                      <span className="font-orbitron text-xs text-white">{p.score.toLocaleString()}</span>
                    </div>

                    {/* Change */}
                    <div className="col-span-1 flex justify-end">
                      {p.change === 'up' && <FaChevronUp className="text-green-400 text-xs" />}
                      {p.change === 'down' && <FaChevronUp className="text-red-400 text-xs rotate-180" />}
                      {p.change === 'same' && <FaMinus className="text-gray-500 text-xs" />}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View Full */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-rajdhani font-bold text-sm tracking-widest uppercase px-8 py-3 clip-btn hover:bg-cyan-500/10 transition-all"
              >
                View Full Leaderboard →
              </motion.button>
            </motion.div>
          </div>

          {/* Right Panel - Your Stats + Season Info */}
          <div className="space-y-4">
            {/* Season info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 p-6"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <HiLightningBolt className="text-cyan-400" />
                <span className="font-orbitron font-bold text-white text-sm tracking-widest">SEASON 7</span>
                <span className="ml-auto text-xs font-rajdhani text-cyan-400 border border-cyan-500/30 px-2 py-0.5">ACTIVE</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Season Ends', value: 'Aug 1, 2025' },
                  { label: 'Total Players', value: '2.4M+' },
                  { label: 'Matches Played', value: '12.8M' },
                  { label: 'Total Prize Dist.', value: '$4.8M' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-rajdhani text-gray-400 text-sm">{item.label}</span>
                    <span className="font-orbitron text-white text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* My Rank card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 p-6"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
            >
              <div className="text-center">
                <div className="font-rajdhani text-gray-400 text-xs tracking-widest uppercase mb-2">Your Current Rank</div>
                <div className="font-orbitron font-black text-5xl text-white mb-1">#<span className="text-purple-400">247</span></div>
                <div className="font-rajdhani text-gray-400 text-sm mb-4">Global Ranking</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '62%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                  />
                </div>
                <div className="font-rajdhani text-xs text-gray-500">62% to Top 100</div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  { label: 'Wins', value: '847' },
                  { label: 'K/D', value: '3.2' },
                  { label: 'Hours', value: '1.2K' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 p-2">
                    <div className="font-orbitron font-bold text-cyan-400 text-sm">{s.value}</div>
                    <div className="font-rajdhani text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rank Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="border border-white/10 bg-white/3 p-5"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
            >
              <div className="font-orbitron text-xs text-gray-400 tracking-widest uppercase mb-3">Rank Tiers</div>
              {[
                { tier: 'Delta Elite', color: 'from-yellow-400 to-orange-500', pct: '1%' },
                { tier: 'Legendary', color: 'from-purple-400 to-pink-500', pct: '5%' },
                { tier: 'Diamond', color: 'from-cyan-400 to-blue-500', pct: '15%' },
                { tier: 'Platinum', color: 'from-teal-400 to-green-500', pct: '30%' },
              ].map((tier) => (
                <div key={tier.tier} className="flex items-center gap-3 mb-2">
                  <div className={`w-2 h-2 rounded-sm bg-gradient-to-r ${tier.color}`} />
                  <span className="font-rajdhani text-gray-300 text-sm flex-1">{tier.tier}</span>
                  <span className="font-orbitron text-xs text-gray-500">{tier.pct}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
