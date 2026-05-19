import { motion } from 'framer-motion';
import { FaShieldAlt, FaBolt, FaGlobe, FaHeadset, FaChartLine, FaUsers } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const features = [
  {
    icon: FaShieldAlt,
    title: 'Anti-Cheat Engine',
    description: 'Military-grade detection system powered by AI. Zero tolerance for cheaters. Pure skill-based competition.',
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-cyan-900/0',
    border: 'border-cyan-500/30',
    iconBg: 'bg-cyan-500/10',
  },
  {
    icon: FaBolt,
    title: 'Ultra-Low Latency',
    description: 'Sub-10ms server response time. 120+ global servers ensure you always play at peak performance.',
    color: 'yellow',
    gradient: 'from-yellow-500/20 to-yellow-900/0',
    border: 'border-yellow-500/30',
    iconBg: 'bg-yellow-500/10',
  },
  {
    icon: FaGlobe,
    title: 'Cross-Platform Play',
    description: 'Compete across PC, console, and mobile seamlessly. One account, all platforms, infinite battles.',
    color: 'purple',
    gradient: 'from-purple-500/20 to-purple-900/0',
    border: 'border-purple-500/30',
    iconBg: 'bg-purple-500/10',
  },
  {
    icon: FaHeadset,
    title: '24/7 Elite Support',
    description: 'Dedicated support team available around the clock. Average response time under 3 minutes.',
    color: 'pink',
    gradient: 'from-pink-500/20 to-pink-900/0',
    border: 'border-pink-500/30',
    iconBg: 'bg-pink-500/10',
  },
  {
    icon: FaChartLine,
    title: 'Advanced Analytics',
    description: 'Deep performance insights, heatmaps, replay analysis, and AI-powered coaching to level up faster.',
    color: 'green',
    gradient: 'from-green-500/20 to-green-900/0',
    border: 'border-green-500/30',
    iconBg: 'bg-green-500/10',
  },
  {
    icon: FaUsers,
    title: 'Clan & Team System',
    description: 'Build your squad, recruit players, manage rosters, and compete in team-based championships.',
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-900/0',
    border: 'border-orange-500/30',
    iconBg: 'bg-orange-500/10',
  },
];

const colorMap: Record<string, string> = {
  cyan: 'text-cyan-400',
  yellow: 'text-yellow-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-[#06060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-purple-400 font-rajdhani text-sm tracking-widest uppercase mb-4">
            <HiSparkles />
            <span>Platform Features</span>
            <HiSparkles />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            BUILT FOR{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CHAMPIONS
            </span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            Every feature engineered to give you the competitive edge. No compromises.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${feature.gradient} border ${feature.border} p-6 cursor-pointer group overflow-hidden`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 0% 0%, rgba(0,245,255,0.05) 0%, transparent 60%)' }}
              />

              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-12 h-12 ${feature.iconBg} border ${feature.border} mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <feature.icon className={`text-xl ${colorMap[feature.color]}`} />
              </div>

              {/* Title */}
              <h3 className={`font-orbitron font-bold text-lg text-white mb-3 group-hover:${colorMap[feature.color]} transition-colors duration-300`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom line */}
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${colorMap[feature.color]} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '99.99%', label: 'Server Uptime' },
            { value: '<8ms', label: 'Avg Latency' },
            { value: '120+', label: 'Global Servers' },
            { value: '4.9★', label: 'Player Rating' },
          ].map((stat) => (
            <div key={stat.label}
              className="text-center bg-white/3 border border-white/8 py-5 px-3"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              <div className="stat-number font-black text-3xl mb-1">{stat.value}</div>
              <div className="font-rajdhani text-gray-500 text-sm tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
