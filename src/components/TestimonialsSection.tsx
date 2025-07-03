import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reviews } from '../data/reviews';
const TestimonialsSection = () => {


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
