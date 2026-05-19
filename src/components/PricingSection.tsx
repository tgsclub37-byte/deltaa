import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaCrown } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const plans = [
  {
    name: 'RECRUIT',
    price: 'Free',
    period: 'Forever',
    description: 'Begin your journey into the Delta 999 universe.',
    color: 'gray',
    border: 'border-white/10',
    bg: 'bg-white/3',
    buttonBg: 'bg-white/10 hover:bg-white/20 border border-white/20 text-white',
    badge: null,
    features: [
      { text: 'Access to 50+ free games', included: true },
      { text: 'Standard matchmaking', included: true },
      { text: 'Basic leaderboard access', included: true },
      { text: 'Public tournaments (limited)', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Private tournaments', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'ELITE',
    price: '$9.99',
    period: '/month',
    description: 'Unlock the full competitive experience.',
    color: 'cyan',
    border: 'border-cyan-500/40',
    bg: 'bg-gradient-to-b from-cyan-900/20 to-transparent',
    buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]',
    badge: 'MOST POPULAR',
    features: [
      { text: 'Access to 999+ games', included: true },
      { text: 'Priority matchmaking', included: true },
      { text: 'Full global leaderboard', included: true },
      { text: 'Unlimited tournaments', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'Private tournaments (10/mo)', included: true },
      { text: 'Priority 24/7 support', included: false },
    ],
  },
  {
    name: 'LEGEND',
    price: '$24.99',
    period: '/month',
    description: 'The ultimate arsenal for serious competitors.',
    color: 'gold',
    border: 'border-yellow-500/40',
    bg: 'bg-gradient-to-b from-yellow-900/10 to-transparent',
    buttonBg: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]',
    badge: 'BEST VALUE',
    features: [
      { text: 'Everything in Elite', included: true },
      { text: 'Dedicated pro server lanes', included: true },
      { text: 'AI coaching & replay analysis', included: true },
      { text: 'Unlimited private tournaments', included: true },
      { text: 'Custom team branding', included: true },
      { text: 'Priority 24/7 VIP support', included: true },
      { text: 'Exclusive Delta Elite badge', included: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-24 bg-[#06060f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

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
            <FaCrown />
            <span>Membership Plans</span>
            <FaCrown />
          </div>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            CHOOSE YOUR{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              TIER
            </span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            From free recruit to legendary champion — find the perfect plan for your ambition.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.bg} border ${plan.border} p-6 sm:p-8 transition-all duration-500 group`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                  <div className={`bg-gradient-to-r ${plan.color === 'cyan' ? 'from-cyan-500 to-blue-600' : 'from-yellow-400 to-orange-500'} text-white font-orbitron text-[10px] font-black tracking-widest px-4 py-1`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                  >
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan name */}
              <div className={`font-orbitron font-black text-xs tracking-[0.4em] mb-2 ${
                plan.color === 'cyan' ? 'text-cyan-400' :
                plan.color === 'gold' ? 'text-yellow-400' : 'text-gray-400'
              }`}>
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span className="font-orbitron font-black text-4xl text-white">{plan.price}</span>
                <span className="font-rajdhani text-gray-400 text-sm mb-1">{plan.period}</span>
              </div>

              <p className="font-rajdhani text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${
                        plan.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                        plan.color === 'gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`} style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                        <FaCheck className="text-[10px]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 bg-white/5">
                        <FaTimes className="text-[10px] text-gray-600" />
                      </div>
                    )}
                    <span className={`font-rajdhani text-sm ${feature.included ? 'text-gray-200' : 'text-gray-600 line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full flex items-center justify-center gap-2 font-orbitron font-bold text-sm tracking-widest uppercase py-3 transition-all duration-300 ${plan.buttonBg}`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                {plan.name === 'LEGEND' && <FaCrown className="text-sm" />}
                {plan.name === 'ELITE' && <HiLightningBolt className="text-sm" />}
                {plan.name === 'RECRUIT' ? 'Play Free' : `Get ${plan.name}`}
              </motion.button>

              {/* Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{ background: plan.color === 'cyan' ? 'radial-gradient(circle at 50% 0%, rgba(0,245,255,0.05) 0%, transparent 60%)' : plan.color === 'gold' ? 'radial-gradient(circle at 50% 0%, rgba(234,179,8,0.05) 0%, transparent 60%)' : 'none' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-rajdhani text-gray-600 text-sm mt-8"
        >
          All plans include free tournament entry tickets. Cancel anytime. No hidden fees.
        </motion.p>
      </div>
    </section>
  );
}
