import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Michelle G.",
            rating: 5,
            date: "March 2024",
            service: "ADPT",
            text: "ADPT by SEVA is a facility that helps to build not only the strength and recovery needed to physically heal but also encourages the positive mental attitude it takes to push through the pain to fully rehabilitate. The therapists are engaged and work hard to map out a plan specifically for the individual's needs. Excellent!",
            avatar: "MG",
            verified: true
        },
        {
            id: 2,
            name: "Rami H.",
            rating: 5,
            date: "February 2024",
            service: "Physical Therapy",
            text: "Best in NY. Professional, Fun, intense, friendly, challenging, and effective. I wouldn't go anywhere else for physio, injury rehab, or strength and conditioning. Very friendly and professional front desk and reception.",
            avatar: "RH",
            verified: true
        },
        {
            id: 3,
            name: "Valériane L.",
            rating: 5,
            date: "January 2024",
            service: "Acupuncture",
            text: "Being a professional dancer I've met a lot of physical therapists and Laurence is by far the most skilled, patient and understanding. Not only did she help me target areas to strengthen but she also adapted each exercise so that I could relate it to dance. I felt supported and prepared physically even in the midst of a pandemic with a tailored approach which has been a privilege to experience.",
            avatar: "VL",
            verified: true
        },
        {
            id: 4,
            name: "David Thompson",
            rating: 5,
            date: "December 2023",
            service: "Massage Therapy",
            text: "As someone who works long hours at a desk, the massage therapy sessions have been essential for managing my stress and muscle tension. The therapists are professional and the environment is so relaxing. Highly recommend!",
            avatar: "DT",
            verified: true
        },
        {
            id: 5,
            name: "Jacqueline L",
            rating: 5,
            date: "November 2023",
            service: "Occupational Therapy",
            text: "I first came in 3 months post ACL reconstruction last year and I've been coming to ADPT for 10 months now. Within 10 months, I went from struggling to walk without crutches to jogging and doing plyometrics training now! Alvin, my PT, truly cares about my goals and has been very transparent about the different stages of recovery and milestones that I have to achieve before returning to sports. This really helps me focus on small goals and celebrate the progress that I've made along the way. The whole team treats me like a professional athlete and they have pushed me to train harder than I ever had. They've helped me become stronger than I was before my injury. ",
            avatar: "JL",
            verified: true
        },
        {
            id: 6,
            name: "Emily A",
            rating: 5,
            date: "October 2023",
            service: "Multi-disciplinary Care",
            text: "Dipti is an awesome physical therapist. She is kind, sensitive, and holistically insightful, sharing her thoughts and information with you in a way that's encouraging and empowering. She has helped me solve my long-lasting issues with neck/shoulder tension and alignment, which is a great relief and very motivating - I'm now working on strength training! It's been a pleasure to work with her at Cynergy Cobble Hill, I highly recommend Mena and this physical therapy practice",
            avatar: "EA",
            verified: true
        }
    ];

    const renderStars = (rating: number) => (
        Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))
    );

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our Patients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real stories from real people who've experienced the SEVA PT difference
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />

                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {review.name}
                                    </h4>
                                    <div className="flex items-center space-x-2 mb-1">
                                        {renderStars(review.rating)}
                                        <span className="text-xs text-gray-600">{review.service}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs text-gray-500">{review.date}</span>
                                        {review.verified && (
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to='/reviews' className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                        Read More Reviews
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
