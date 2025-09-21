import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTABar from '../components/CTABar';
import Courses from '../components/Courses';
import ReadyToDriveCTA from '../components/ReadyToDriveCTA';
import Instructors from '../components/Instructors';
import InstructorCTA from '../components/InstructorCTA';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ExitIntentModal from '../components/ExitIntentModal';
import WhatsAppBot from '../components/WhatsAppBot';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTABar />
      <Courses />
      <ReadyToDriveCTA />
      <Instructors />
      <InstructorCTA />
      <Testimonials />
      <CTA />
      <Footer />
      <ExitIntentModal />
      <WhatsAppBot />
    </>
  );
};

export default HomePage;
