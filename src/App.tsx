import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  return (
    <div className="min-h-screen bg-[#050510] animated-gradient">
      <Navbar />
      
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <FeaturesSection />
          <CommunitySection />
        </>
      ) : currentPage === 'terms' ? (
        <TermsOfService onClose={() => setCurrentPage('home')} />
      ) : (
        <PrivacyPolicy onClose={() => setCurrentPage('home')} />
      )}
      
      <Footer onTermsClick={() => setCurrentPage('terms')} onPrivacyClick={() => setCurrentPage('privacy')} />
    </div>
  );
}
