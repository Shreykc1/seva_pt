import React from 'react';
import { CheckCircle, Users, MapPin, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10,000+', label: 'Patients Treated' },
    { icon: <MapPin className="w-8 h-8" />, number: '6', label: 'NYC Locations' },
    { icon: <Clock className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
    { icon: <CheckCircle className="w-8 h-8" />, number: '95%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'One-on-One Care',
      description: 'Every session is personalized to your specific needs and goals.'
    },
    {
      title: 'Expert Therapists',
      description: 'Our team consists of highly trained and experienced professionals.'
    },
    {
      title: 'Advanced Techniques',
      description: 'We use the latest evidence-based treatments and technologies.'
    },
    {
      title: 'Holistic Approach',
      description: 'We address not just symptoms, but the root cause of your condition.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SEVA PT?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At SEVA PT, we believe in providing therapy that is always one-on-one.
              Our personalized approach ensures that every patient receives the individual
              attention they deserve to achieve their health and wellness goals.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-purple-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Learn More About Us
            </button>
          </div>

          {/* Right Content */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
