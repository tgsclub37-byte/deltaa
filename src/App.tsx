import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

export default function App() {
  const whatsappUrl = "https://wa.me/15558242814";
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Animation variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen marketing-gradient text-gray-200 relative overflow-hidden flex flex-col items-center justify-between font-montserrat px-4 py-8 md:py-16">
      
      {/* Decorative background glow circles */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[50%] rounded-full bg-amber-950/15 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl flex flex-col items-center text-center z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-black font-roboto-slab leading-tight">
            <span className="text-white block mb-1">WELCOME TO</span>
            <span className="gold-text-gradient font-extrabold tracking-wide drop-shadow-md">
              INDIA'S BIGGEST SPORTS COMMUNITY
            </span>
          </h1>
        </motion.div>

        {/* Circular Avatar / Logo */}
        <motion.div 
          variants={logoVariants} 
          className="mb-8 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md group-hover:bg-emerald-500/30 transition-all duration-300 pointer-events-none" />
          <img 
            src="/delta_999_logo.png" 
            alt="Delta 999 Logo" 
            className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-full border border-emerald-500/30 bg-black/40 p-2 shadow-2xl relative float-slow"
          />
        </motion.div>

        {/* First Call to Action Button */}
        <motion.div variants={itemVariants} className="w-full mb-8">
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-roboto-slab font-bold text-lg md:text-xl py-4 px-8 rounded-2xl shadow-lg border-b-4 border-green-700 hover:border-green-600 transition-all duration-150 whatsapp-glow cursor-pointer"
          >
            <FaWhatsapp className="text-2xl md:text-3xl animate-pulse" />
            <span>WHATSAPP NOW</span>
            <FaWhatsapp className="text-2xl md:text-3xl animate-pulse" />
          </motion.a>
        </motion.div>

        {/* Main Pitch Card */}
        <motion.div 
          variants={itemVariants} 
          className="w-full glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 mb-8 text-left border border-emerald-950/50"
        >
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-lg md:text-xl font-bold text-white flex items-center justify-center gap-2 leading-relaxed">
              <span className="text-2xl">🏆</span>
              <span>Join the ultimate arena of sports and gaming entertainment!</span>
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-md mx-auto">
              Experience real-time sports updates, expert game insights, and a highly secure environment built for true sports fans.
            </p>
            
            <div className="pt-2">
              <span className="text-lg md:text-xl font-black tracking-wide gold-text-gradient uppercase animate-pulse">
                Start your winning streak now!
              </span>
            </div>
          </div>
        </motion.div>

        {/* Second Call to Action Button */}
        <motion.div variants={itemVariants} className="w-full mb-8">
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-roboto-slab font-bold text-lg md:text-xl py-4 px-8 rounded-2xl shadow-lg border-b-4 border-green-700 hover:border-green-600 transition-all duration-150 whatsapp-glow cursor-pointer"
          >
            <FaWhatsapp className="text-2xl md:text-3xl animate-pulse" />
            <span>WHATSAPP NOW</span>
            <FaWhatsapp className="text-2xl md:text-3xl animate-pulse" />
          </motion.a>
        </motion.div>
      </motion.main>

      {/* Disclaimer Box */}
      <motion.div 
        variants={itemVariants} 
        className="w-full max-w-xl glass-panel rounded-2xl p-5 mb-6 border border-amber-950/20 bg-amber-950/5 text-left text-xs text-gray-400 space-y-2 z-10"
      >
        <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-[10px]">
          <span>⚠️</span> Disclaimer & Terms of Use
        </div>
        <p className="leading-relaxed">
          This platform is intended for users aged 18 years and above only. We do not promote or encourage any form of illegal activity. All games and sports-related content displayed on this website are for entertainment purposes only.
        </p>
        <p className="leading-relaxed">
          Users are requested to check and comply with their local laws and regulations before participating. By accessing this website, you agree that you are doing so at your own discretion and responsibility. If you do not agree with these terms, please exit the website immediately.
        </p>
      </motion.div>

      {/* Footer Section */}
      <footer className="w-full max-w-xl text-center text-xs text-gray-500 mt-4 pt-4 border-t border-emerald-950/30 z-10">
        <div className="flex justify-center gap-4 mb-4 text-xs font-semibold">
          <button 
            onClick={() => setShowPrivacy(true)} 
            className="text-emerald-500 hover:text-emerald-400 cursor-pointer transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-gray-700">|</span>
          <button 
            onClick={() => setShowTerms(true)} 
            className="text-emerald-500 hover:text-emerald-400 cursor-pointer transition-colors"
          >
            Terms of Service
          </button>
        </div>
        <p className="mb-2">© {new Date().getFullYear()} Delta 999. All rights reserved.</p>
        <p className="text-[10px] text-gray-600">
          This site is not a part of Google or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Google or Meta in any way.
        </p>
      </footer>

      {/* Modals for Privacy & Terms */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 max-h-[80vh] overflow-y-auto relative border border-emerald-500/20"
            >
              <button 
                onClick={() => setShowPrivacy(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
              >
                <IoClose className="text-2xl" />
              </button>
              
              <h2 className="text-2xl font-bold font-roboto-slab gold-text-gradient mb-6">Privacy Policy</h2>
              
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed text-left">
                <p>
                  At Delta 999, we value and respect your privacy. This Privacy Policy details how we handle information when you visit our landing page.
                </p>
                
                <h3 className="font-bold text-white text-base">1. Information Collection</h3>
                <p>
                  We do not collect personal identifying information (PII) directly on this website. However, when you click the WhatsApp link to contact us, your phone number and any information you send will be visible to us on WhatsApp.
                </p>
                
                <h3 className="font-bold text-white text-base">2. How We Use Information</h3>
                <p>
                  We use your contact details solely to respond to your queries, provide support, and offer our marketing and promotional consulting services. We do not sell, rent, or share your contact info with third parties.
                </p>
                
                <h3 className="font-bold text-white text-base">3. Tracking and Cookies</h3>
                <p>
                  We may use local analytics tools or conversion pixels (such as Google or Meta tracking pixels) to measure the effectiveness of our advertisements and optimize our visitor conversion rates.
                </p>
                
                <h3 className="font-bold text-white text-base">4. Third-Party Platforms</h3>
                <p>
                  This site includes links to WhatsApp, which is operated by Meta Platforms, Inc. Your use of WhatsApp is subject to WhatsApp's own terms and privacy policy.
                </p>
                
                <h3 className="font-bold text-white text-base">5. Updates</h3>
                <p>
                  We may update this Privacy Policy from time to time to match regulatory changes or additions to our services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showTerms && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 max-h-[80vh] overflow-y-auto relative border border-emerald-500/20"
            >
              <button 
                onClick={() => setShowTerms(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
              >
                <IoClose className="text-2xl" />
              </button>
              
              <h2 className="text-2xl font-bold font-roboto-slab gold-text-gradient mb-6">Terms of Service</h2>
              
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed text-left">
                <p>
                  Welcome to Delta 999. By browsing and using this website, you agree to comply with and be bound by the following Terms of Service.
                </p>
                
                <h3 className="font-bold text-white text-base">1. Age Requirement</h3>
                <p>
                  This platform is strictly intended for users who are 18 years of age or older. By accessing this platform, you represent and warrant that you meet this age requirement.
                </p>
                
                <h3 className="font-bold text-white text-base">2. Entertainment & Informational Purpose</h3>
                <p>
                  All sports-related content, advice, strategies, and materials displayed or discussed are for general information and entertainment purposes only. We do not encourage, facilitate, or promote any form of real-money gambling, betting, or illegal financial activities.
                </p>
                
                <h3 className="font-bold text-white text-base">3. Compliance with Local Laws</h3>
                <p>
                  It is the user's sole responsibility to understand and comply with their own local, state, and national laws regarding sports consulting, games of chance, or advertising services.
                </p>
                
                <h3 className="font-bold text-white text-base">4. Disclaimer of Liability</h3>
                <p>
                  We make no guarantees of financial success or specific results using our marketing ideas or recommendations. All actions you take are at your own discretion, and we shall not be held liable for any losses or damages incurred.
                </p>
                
                <h3 className="font-bold text-white text-base">5. Intellectual Property</h3>
                <p>
                  The logo, design components, and custom layouts are the intellectual property of Delta 999. Unauthorized copying or redistribution is prohibited.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
