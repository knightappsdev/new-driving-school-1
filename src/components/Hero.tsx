import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 sm:pt-24 md:pt-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Find Your Perfect 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Driving Instructor</span> in the UK
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with qualified, experienced driving instructors in your area. Pass your test faster with personalized lessons tailored to your learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:bg-gradient-primary-hover">
                <i className="bi bi-search mr-2"></i>
                Find Instructors
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <i className="bi bi-play-circle mr-2"></i>
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">2,500+</div>
                <div className="text-sm text-gray-600">Qualified Instructors</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-gray-600">Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">50,000+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
            </div>
          </div>
          
          {/* Animated Road Scene */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-b from-blue-200 to-green-200 rounded-2xl shadow-2xl overflow-hidden" style={{ height: '400px' }}>
              {/* Sky and background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-100"></div>
              
              {/* Road */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-600 road-perspective">
                {/* Road markings */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white road-lines"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-300 road-center-line"></div>
              </div>
              
              {/* Moving learner cars on road */}
              <div className="absolute bottom-8 left-0 w-full">
                <div className="animate-road-car-1 absolute">
                  <div className="flex flex-col items-center">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded mb-1">L</div>
                    <i className="bi bi-car-front text-primary-500 text-2xl"></i>
                  </div>
                </div>
                <div className="animate-road-car-2 absolute">
                  <div className="flex flex-col items-center">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded mb-1">L</div>
                    <i className="bi bi-car-front-fill text-secondary-500 text-xl"></i>
                  </div>
                </div>
                <div className="animate-road-car-3 absolute">
                  <div className="flex flex-col items-center">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded mb-1">L</div>
                    <i className="bi bi-car-front text-success-500 text-2xl"></i>
                  </div>
                </div>
              </div>
              
              {/* Trees and scenery */}
              <div className="absolute bottom-32 left-4 animate-sway">
                <i className="bi bi-tree text-green-600 text-3xl"></i>
              </div>
              <div className="absolute bottom-32 right-4 animate-sway-delay">
                <i className="bi bi-tree text-green-600 text-2xl"></i>
              </div>
              <div className="absolute bottom-40 left-1/4">
                <i className="bi bi-house text-gray-600 text-xl"></i>
              </div>
              <div className="absolute bottom-36 right-1/3">
                <i className="bi bi-building text-gray-600 text-lg"></i>
              </div>
              
              {/* Clouds */}
              <div className="absolute top-4 left-8 animate-float-slow">
                <i className="bi bi-cloud text-white text-2xl opacity-80"></i>
              </div>
              <div className="absolute top-8 right-12 animate-float-slow-delay">
                <i className="bi bi-cloud text-white text-xl opacity-60"></i>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-500 rounded-full opacity-10 blur-3xl animate-pulse-slow-delay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
