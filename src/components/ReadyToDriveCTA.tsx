import React from 'react';
import Button from './Button';

const ReadyToDriveCTA: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-500 to-secondary-500 min-h-[200px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of successful drivers who learned with DriveSchool Pro. Book your first lesson today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100 w-full sm:w-auto">
              <i className="bi bi-calendar-check mr-2"></i>
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500 w-full sm:w-auto">
              <i className="bi bi-chat-dots mr-2"></i>
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToDriveCTA;
