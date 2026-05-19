import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFire, FaUsers, FaTrophy, FaStar } from 'react-icons/fa';

const games = [
  {
    id: 1,
    title: 'CyberStrike: Zero Dawn',
    genre: 'FPS • Battle Royale',
    players: '842K',
    rating: 4.9,
    prize: '$500K',
    tag: 'HOT',
    tagColor: 'from-red-500 to-orange-500',
    gradient: 'from-cyan-600/30 to-blue-800/30',
    border: 'border-cyan-500/30',
    glow: 'cyan',
    image: 'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    description: 'Intense 100-player battles in a neon-soaked dystopian future. Last squad standing takes all.',
  },
  {
    id: 2,
    title: 'NexusArena: Ascendant',
    genre: 'MOBA • Strategy',
    players: '612K',
    rating: 4.8,
    prize: '$1.2M',
    tag: 'FEATURED',
    tagColor: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-600/30 to-pink-800/30',
    border: 'border-purple-500/30',
    glow: 'purple',
    image: 'https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    description: 'Command your champion across 5v5 tactical battlegrounds. Outsmart, outplay, outlast.',
  },
  {
    id: 3,
    title: 'Quantum Drift: Ultra',
    genre: 'Racing • Simulation',
    players: '328K',
    rating: 4.7,
    prize: '$250K',
    tag: 'NEW',
    tagColor: 'from-green-500 to-teal-500',
    gradient: 'from-teal-600/30 to-green-800/30',
    border: 'border-teal-500/30',
    glow: 'cyan',
    image: 'https://images.pexels.com/photos/7915213/pexels-photo-7915213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    description: 'Hyper-realistic racing at the edge of physics. Anti-gravity tracks across 50 galaxies.',
  },
  {
    id: 4,
    title: 'Shadow Protocol: X',
    genre: 'Stealth • Action',
    players: '201K',
    rating: 4.6,
    prize: '$150K',
    tag: 'TRENDING',
    tagColor: 'from-orange-500 to-yellow-500',
    gradient: 'from-orange-600/20 to-red-800/20',
    border: 'border-orange-500/30',
    glow: 'orange',
    image: 'https://images.pexels.com/photos/9071736/pexels-photo-9071736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    description: 'Infiltrate enemy lines using stealth and gadgets. Every decision shapes the mission.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function GamesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="games" className="relative py-24 bg-[#050510] cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-orange-400 font-rajdhani text-sm tracking-widest uppercase mb-4">
            <FaFire />
            <span>Featured Games</span>
            <FaFire />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            CHOOSE YOUR{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              BATTLEFIELD
            </span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            From frantic shooters to strategic MOBA battles — Delta 999 hosts elite competitions across every genre.
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              variants={cardVariants}
              className={`game-card relative overflow-hidden border ${game.border} bg-gradient-to-br ${game.gradient} backdrop-blur-sm cursor-pointer group`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {/* Background image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent" />

                {/* Tag */}
                <div className={`absolute top-3 left-3 bg-gradient-to-r ${game.tagColor} text-white font-orbitron text-[10px] font-bold tracking-widest px-3 py-1`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                >
                  {game.tag}
                </div>

                {/* Prize badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 font-orbitron text-xs font-bold px-3 py-1">
                  <FaTrophy className="text-[10px]" />
                  {game.prize}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-orbitron font-bold text-white text-lg leading-tight mb-1 group-hover:text-cyan-400 transition-colors">
                      {game.title}
                    </h3>
                    <span className="text-gray-500 font-rajdhani text-sm tracking-wider">{game.genre}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar className="text-xs" />
                    <span className="font-rajdhani font-semibold text-sm">{game.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 font-rajdhani text-sm mb-4 leading-relaxed">{game.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 font-rajdhani text-sm">
                    <FaUsers className="text-cyan-400" />
                    <span>{game.players} playing</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-400 font-rajdhani font-bold text-xs tracking-widest uppercase px-4 py-2 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  >
                    Play Now →
                  </motion.button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at center, rgba(0,245,255,0.05) 0%, transparent 70%)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168,85,247,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="border border-purple-500/50 bg-purple-500/10 text-white font-orbitron font-bold text-sm tracking-widest uppercase px-10 py-4 clip-btn hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300"
          >
            Explore All 999+ Games
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
