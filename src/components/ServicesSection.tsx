import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Heart, Zap, Users, Award, Clock } from 'lucide-react';

const services = [
    {
        icon: <Activity className="w-8 h-8" />,
        title: 'Physical Therapy',
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: 'Sports Medicine',
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: 'Wellness Programs',
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: 'Group Classes',
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: 'Sports Performance',
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'Injury Prevention',
    },
];

const ServicesSection = () => {
    const navigate = useNavigate();
    return (
        <section className="py-0 bg-white">
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left: Fullscreen Image */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-screen flex items-center justify-center overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&w=1200&q=80"
                        alt="Physical Therapy NYC"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right: Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 lg:py-0 lg:px-20 max-w-3xl mx-auto">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Advanced Physical Therapy in New York City
                    </h2>
                    <h3 className="text-2xl font-bold text-orange-700 mb-6">Who We Are</h3>
                    <p className="text-gray-600 mb-8 text-xl">
                        Welcome to SEVA Physical and Occupational Therapy NYC, your premier destination for specialized orthopedic physical therapy and sports performance physical therapy services in the heart of New York City. Our devoted team of licensed physical, occupational, and hand therapists is dedicated to improving your well-being through personalized, one-on-one care.
                    </p>
                    <p className="text-gray-600 mb-8 text-xl">
                        At SEVA, we stand out from the competition by taking a holistic approach to rehabilitation. Unlike other clinics, we never rely on aides or assistants, ensuring that you receive expert care and individualized attention throughout your journey. Our mission is to empower you to thrive in your daily life, recognizing the active, demanding lifestyles of New Yorkers.
                    </p>
                    <p className="text-gray-500 mb-12 text-lg">
                        Whether you seek orthopedic rehabilitation, pain management, or injury prevention, our experienced therapists collaborate closely with you to craft a tailored treatment plan that caters to your unique needs. We understand the importance of peak performance in your life, and we're here to help you achieve it.
                    </p>
                    {/* Service Buttons */}
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                        {services.map((service, idx) => (
                            <button
                                key={service.title}
                                onClick={() => navigate('/what-we-treat')}
                                className="flex items-center space-x-3 px-8 py-4 bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold rounded-lg shadow transition-all text-lg min-w-[220px] justify-center"
                            >
                                <span>{service.icon}</span>
                                <span>{service.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
