import { motion } from 'framer-motion';
import { FaDiscord, FaTwitch, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

interface FooterProps {
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

const footerLinks = {
  Platform: ['Games', 'Tournaments', 'Leaderboard', 'Analytics', 'Clans', 'Spectate'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Blog', 'Investors', 'Partners'],
  Support: ['Help Center', 'Contact Us', 'Bug Report', 'Refund Policy', 'System Status', 'API Docs'],
  Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Fair Play Rules', 'GDPR', 'DMCA'],
};

const socials = [
  { icon: FaDiscord, color: '#5865F2', href: '#' },
  { icon: FaTwitch, color: '#9146FF', href: '#' },
  { icon: FaYoutube, color: '#FF0000', href: '#' },
  { icon: FaTwitter, color: '#1DA1F2', href: '#' },
  { icon: FaInstagram, color: '#E1306C', href: '#' },
  { icon: FaTiktok, color: '#ffffff', href: '#' },
];

export default function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  const handleLegalClick = (link: string) => {
    if (link === 'Terms of Service' && onTermsClick) {
      onTermsClick();
    } else if (link === 'Privacy Policy' && onPrivacyClick) {
      onPrivacyClick();
    }
  };

  return (
    <footer className="relative bg-[#030308] border-t border-white/10">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 clip-btn flex items-center justify-center">
                  <span className="font-orbitron font-black text-white text-sm">Δ</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 clip-btn blur-md opacity-40" />
              </div>
              <div>
                <span className="font-orbitron font-black text-xl text-white tracking-widest">
                  DELTA<span className="text-cyan-400">999</span>
                </span>
                <div className="text-[9px] text-gray-500 tracking-[0.3em] font-rajdhani uppercase">Elite Gaming Platform</div>
              </div>
            </div>

            <p className="font-rajdhani text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              The world's most advanced competitive gaming platform. Where legends are born and champions are forged.
            </p>

            {/* Socials */}
            <div className="flex gap-3 flex-wrap">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                >
                  <social.icon style={{ color: social.color }} className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-orbitron font-bold text-white text-xs tracking-widest uppercase mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {(link === 'Terms of Service' || link === 'Privacy Policy') ? (
                      <motion.button
                        onClick={() => handleLegalClick(link)}
                        whileHover={{ x: 3, color: '#00f5ff' }}
                        className="font-rajdhani text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200 block text-left w-full"
                      >
                        {link}
                      </motion.button>
                    ) : (
                      <motion.a
                        href="#"
                        whileHover={{ x: 3, color: '#00f5ff' }}
                        className="font-rajdhani text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200 block"
                      >
                        {link}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-cyan-900/20 border border-cyan-500/15 p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
        >
          <div>
            <div className="font-orbitron font-black text-xl text-white mb-1">
              Ready to become a <span className="text-cyan-400">Legend?</span>
            </div>
            <p className="font-rajdhani text-gray-400 text-sm">Join 2.4M+ elite gamers. Free to start. No credit card needed.</p>
          </div>
          <motion.button
            onClick={() => window.open('https://wa.me/15558242814', '_blank')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,245,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-orbitron font-bold text-sm tracking-widest uppercase px-8 py-3 clip-btn whitespace-nowrap"
          >
            <HiLightningBolt />
            Start Free Today
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="font-rajdhani text-gray-600 text-sm">
            © 2025 <span className="text-cyan-500">Delta 999</span> Gaming Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-rajdhani text-gray-600 text-xs">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            All systems operational
            <span className="text-gray-700">•</span>
            <span>Servers: 120 Active</span>
          </div>
          <div className="flex gap-4">
            <motion.button
              onClick={() => onTermsClick && onTermsClick()}
              whileHover={{ color: '#00f5ff' }}
              className="font-rajdhani text-gray-600 text-sm hover:text-gray-400 transition-colors"
            >
              Terms
            </motion.button>
            <motion.button
              onClick={() => onPrivacyClick && onPrivacyClick()}
              whileHover={{ color: '#00f5ff' }}
              className="font-rajdhani text-gray-600 text-sm hover:text-gray-400 transition-colors"
            >
              Privacy
            </motion.button>
            <a href="#" className="font-rajdhani text-gray-600 text-sm hover:text-gray-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
