import React, { useState } from 'react';
import { Header } from '../components/Header';
import HeroSection from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import FocusSection from '../components/FocusSection';
import { ProcessSection } from '../components/ProcessSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { RSVPModel } from '../components/RSVPModel';

const Index: React.FC = () => {
  const [showRSVP, setShowRSVP] = useState(false);

  const handleBookMeeting = () => {
    alert('Booking functionality would be implemented here.');
  };

  const handleRSVP = () => {
    setShowRSVP(true);
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <main className="w-full">
        <HeroSection />
        <MissionSection />
        <FocusSection />
        <ProcessSection />
        <CTASection onBookMeeting={handleBookMeeting} />
      </main>
      <Footer className="bg-blue-100" />
      <RSVPModel isOpen={showRSVP} onClose={() => setShowRSVP(false)} />
    </div>
  );
};

export default Index;
