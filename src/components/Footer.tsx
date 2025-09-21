import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <i className="bi bi-car-front text-white"></i>
              </div>
              <span className="text-xl font-bold">DriveConnect UK</span>
            </div>
            <p className="text-primary-200 mb-4">
              Connecting learner drivers with qualified instructors across the United Kingdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <i className="bi bi-twitter text-xl"></i>
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <i className="bi bi-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">Find Instructors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Lessons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Theory Test Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Driving Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Instructors</h3>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">Join Our Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instructor Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm mb-4 md:mb-0">
            © 2024 DriveConnect UK. All rights reserved.
          </p>
          <p className="text-primary-200 text-sm">
            Powered by <span className="bg-gradient-primary bg-clip-text text-transparent font-medium">Websparks AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
