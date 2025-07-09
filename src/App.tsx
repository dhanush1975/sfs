import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
// import { ContactPage } from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';

import Index from './pages/Index';
// import ContactForm from './pages/ContactForm';
import NotFound from './pages/NotFound';

import FinancialServicesPage from './pages/FinancialPages/FinancialServicesPage';
import ProfessionalCareersPage from './pages/FinancialPages/ProfessionalCareersPage';
import EstatePlanningPage from './pages/FinancialPages/EstatePlanning';
import RetirementPlanningPage from './pages/FinancialPages/RetirementPlanning';
import NetWorthPage from './pages/FinancialPages/NetWorth';
import LifeInsurance from './pages/FinancialPages/LifeInsurance'
import BookMeetingPage from './pages/BookMeeting'; // ✅ Import
import AboutUs from './pages/Aboutus';


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ScrollToTop /> {/* Scroll reset on route change */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Index />} />

          Contact Page
          {/* <Route path="/contact" element={<ContactPage />} /> */}

          {/* Financial Services Overview Page */}
          <Route path="/services" element={<FinancialServicesPage />} />

          {/* Individual Financial Service Pages */}
          <Route path="/services/professional-careers" element={<ProfessionalCareersPage />} />
          <Route path="/services/estate-planning" element={<EstatePlanningPage />} />
          <Route path="/services/retirement-planning" element={<RetirementPlanningPage />} />
          <Route path="/services/networth-planning" element={<NetWorthPage />} />
          <Route path="/services/life-insurance" element={<LifeInsurance />} />
          <Route path="/book-meeting" element={<BookMeetingPage />} />
          <Route path="/Aboutus" element={<AboutUs />} />


          {/* Catch-all 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
