import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const Instructors: React.FC = () => {
  const [filters, setFilters] = useState({
    location: '',
    transmission: '',
    gender: '',
    nationality: '',
    religion: '',
    ethnicity: ''
  });

  const instructors = [
    {
      id: 1,
      firstName: 'Sarah',
      lastName: 'Johnson',
      rating: 4.9,
      city: 'Manchester',
      experience: 8,
      costPerHour: 35,
      transmission: 'Both',
      specialty: 'Nervous Drivers',
      summary: 'Patient and understanding instructor specializing in helping nervous drivers build confidence.',
      availability: 'Mon-Fri: 9AM-6PM',
      gender: 'Female',
      nationality: 'British',
      religion: 'Christian',
      ethnicity: 'White British'
    },
    {
      id: 2,
      firstName: 'Ahmed',
      lastName: 'Hassan',
      rating: 4.8,
      city: 'Birmingham',
      experience: 12,
      costPerHour: 40,
      transmission: 'Manual',
      specialty: 'Test Preparation',
      summary: 'Experienced instructor with high first-time pass rates. Expert in test preparation and advanced techniques.',
      availability: 'Mon-Sat: 8AM-7PM',
      gender: 'Male',
      nationality: 'British',
      religion: 'Muslim',
      ethnicity: 'Asian British'
    },
    {
      id: 3,
      firstName: 'Emma',
      lastName: 'Williams',
      rating: 4.7,
      city: 'London',
      experience: 6,
      costPerHour: 45,
      transmission: 'Automatic',
      specialty: 'Intensive Courses',
      summary: 'Friendly instructor offering intensive driving courses for quick learners. Modern teaching methods.',
      availability: 'Tue-Sun: 10AM-8PM',
      gender: 'Female',
      nationality: 'British',
      religion: 'Christian',
      ethnicity: 'White British'
    },
    {
      id: 4,
      firstName: 'Raj',
      lastName: 'Patel',
      rating: 4.9,
      city: 'Leicester',
      experience: 15,
      costPerHour: 38,
      transmission: 'Both',
      specialty: 'Beginner Friendly',
      summary: 'Highly experienced instructor with a calm approach. Perfect for absolute beginners and mature learners.',
      availability: 'Mon-Fri: 9AM-5PM',
      gender: 'Male',
      nationality: 'British',
      religion: 'Hindu',
      ethnicity: 'Indian British'
    },
    {
      id: 5,
      firstName: 'Maria',
      lastName: 'Rodriguez',
      rating: 4.8,
      city: 'Liverpool',
      experience: 10,
      costPerHour: 42,
      transmission: 'Manual',
      specialty: 'Multilingual',
      summary: 'Bilingual instructor (English/Spanish) with excellent communication skills. Great with international students.',
      availability: 'Mon-Sat: 8AM-6PM',
      gender: 'Female',
      nationality: 'Spanish',
      religion: 'Catholic',
      ethnicity: 'Hispanic'
    },
    {
      id: 6,
      firstName: 'James',
      lastName: 'Thompson',
      rating: 4.6,
      city: 'Leeds',
      experience: 7,
      costPerHour: 36,
      transmission: 'Automatic',
      specialty: 'Senior Learners',
      summary: 'Patient instructor specializing in teaching senior learners. Flexible approach tailored to individual needs.',
      availability: 'Wed-Sun: 10AM-4PM',
      gender: 'Male',
      nationality: 'British',
      religion: 'Christian',
      ethnicity: 'White British'
    }
  ];

  const filteredInstructors = instructors.filter(instructor => {
    return (
      (filters.location === '' || instructor.city.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.transmission === '' || instructor.transmission === filters.transmission || instructor.transmission === 'Both') &&
      (filters.gender === '' || instructor.gender === filters.gender) &&
      (filters.nationality === '' || instructor.nationality === filters.nationality) &&
      (filters.religion === '' || instructor.religion === filters.religion) &&
      (filters.ethnicity === '' || instructor.ethnicity === filters.ethnicity)
    );
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  return (
    <section id="instructors" className="py-16 lg:py-24 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Find Your Perfect Instructor
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our network of qualified, experienced driving instructors across the UK
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-primary-100">
          <h3 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent mb-4">Filter Instructors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter city"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
              <select
                value={filters.transmission}
                onChange={(e) => handleFilterChange('transmission', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="">All</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                value={filters.gender}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
              <select
                value={filters.nationality}
                onChange={(e) => handleFilterChange('nationality', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="">All</option>
                <option value="British">British</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
              <select
                value={filters.religion}
                onChange={(e) => handleFilterChange('religion', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="">All</option>
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
                <option value="Hindu">Hindu</option>
                <option value="Catholic">Catholic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ethnicity</label>
              <select
                value={filters.ethnicity}
                onChange={(e) => handleFilterChange('ethnicity', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="">All</option>
                <option value="White British">White British</option>
                <option value="Asian British">Asian British</option>
                <option value="Indian British">Indian British</option>
                <option value="Hispanic">Hispanic</option>
              </select>
            </div>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInstructors.map((instructor) => (
            <Card key={instructor.id} className="text-left hover:scale-105 transition-transform duration-300 border-2 border-primary-100 hover:border-primary-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {getInitials(instructor.firstName, instructor.lastName)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">
                    {instructor.firstName} {instructor.lastName}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`bi bi-star${i < Math.floor(instructor.rating) ? '-fill' : ''} text-secondary-500 text-sm`}></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({instructor.rating})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="bi bi-geo-alt mr-2"></i>
                  <span>{instructor.city}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="bi bi-calendar mr-2"></i>
                  <span>{instructor.experience} years experience</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="bi bi-currency-pound mr-2"></i>
                  <span>£{instructor.costPerHour}/hour</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="bi bi-gear mr-2"></i>
                  <span>{instructor.transmission}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="bi bi-star mr-2"></i>
                  <span>{instructor.specialty}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{instructor.summary}</p>

              <div className="text-sm text-gray-600 mb-6">
                <i className="bi bi-clock mr-2"></i>
                <span>{instructor.availability}</span>
              </div>

              <div className="space-y-2">
                <Button size="sm" className="w-full bg-gradient-primary hover:bg-gradient-primary-hover">
                  <i className="bi bi-person mr-2"></i>
                  View Profile
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <i className="bi bi-telephone mr-2"></i>
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <i className="bi bi-chat-dots mr-2"></i>
                    Message
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredInstructors.length === 0 && (
          <div className="text-center py-12">
            <i className="bi bi-search text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No instructors found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Instructors;
