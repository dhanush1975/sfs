
import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { FocusSection } from '../components/FocusSection';
import { ProcessSection } from '../components/ProcessSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

const Index: React.FC = () => {
  const handleBookMeeting = () => {
    // In a real application, this would open a booking modal or redirect to a booking page
    alert('Booking functionality would be implemented here. This could open a modal, redirect to a calendar booking system, or trigger a contact form.');
  };

  const handleRSVP = () => {
    // In a real application, this would handle event RSVP
    alert('RSVP functionality would be implemented here. This could open an RSVP form or redirect to an event management system.');
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Header onBookMeeting={handleBookMeeting} />
      
      <main className="w-full">
        <HeroSection onRSVP={handleRSVP} />
        <MissionSection />
        <FocusSection />
        <ProcessSection />
        <CTASection onBookMeeting={handleBookMeeting} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
