import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { reviews } from '../data/reviews';


const featuredReview = {
    name: "Jennifer Martinez",
    rating: 5,
    service: "Complete Wellness Journey",
    text: "SEVA Health and Wellness has been my sanctuary for the past year. From the moment I walked in with debilitating sciatica, to now being pain-free and active again, the journey has been nothing short of miraculous. Dr. Smith's expertise in chiropractic care, combined with the incredible physical therapy team, created a treatment plan that addressed not just my symptoms, but the root cause of my pain. The acupuncture sessions added that extra layer of healing that made all the difference. What sets this place apart is the genuine care and attention to detail. Every session feels personalized, and the staff remembers your specific needs and progress. I've recommended SEVA to everyone I know who's struggling with pain or seeking wellness. This isn't just a healthcare facility—it's a community of healers who truly want to see you thrive.",
    avatar: "JM",
    verified: true,
    date: "Ongoing Patient"
};

const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [likedReviews, setLikedReviews] = useState<number[]>([]);
    const [reviewsPerView, setReviewsPerView] = useState(1);
    const formRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Responsive reviews per view
    useEffect(() => {
        const updateReviewsPerView = () => {
            if (window.innerWidth >= 1024) {
                setReviewsPerView(3);
            } else if (window.innerWidth >= 768) {
                setReviewsPerView(2);
            } else {
                setReviewsPerView(1);
            }
        };
        updateReviewsPerView();
        window.addEventListener('resize', updateReviewsPerView);
        return () => window.removeEventListener('resize', updateReviewsPerView);
    }, []);

    // Calculate number of pages
    const totalPages = Math.ceil(reviews.length / reviewsPerView);

    // Clamp currentSlide if reviewsPerView changes
    useEffect(() => {
        if (currentSlide > totalPages - 1) {
            setCurrentSlide(totalPages - 1);
        }
    }, [reviewsPerView, totalPages]);

    const toggleLike = (reviewId: number) => {
        setLikedReviews(prev =>
            prev.includes(reviewId)
                ? prev.filter(id => id !== reviewId)
                : [...prev, reviewId]
        );
    };

    const scrollToForm = () => {
        navigate('/contact#form');
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    // Get reviews for current page
    const startIdx = currentSlide * reviewsPerView;
    const endIdx = startIdx + reviewsPerView;
    const visibleReviews = reviews.slice(startIdx, endIdx);

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
                        Patient Reviews & Testimonials
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover what our patients say about their transformative experiences at SEVA Health and Wellness
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-orange-600">4.9</div>
                            <div className="text-sm text-gray-600">Average Rating</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">500+</div>
                            <div className="text-sm text-gray-600">Happy Patients</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">98%</div>
                            <div className="text-sm text-gray-600">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Review */}
            <div className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-light text-gray-800 mb-2">Featured Story</h2>
                        <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {featuredReview.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">{featuredReview.name}</h3>
                                    {featuredReview.verified && (
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                                    )}
                                </div>
                                <div className="flex items-center space-x-2 mb-1">
                                    {renderStars(featuredReview.rating)}
                                    <span className="text-sm text-gray-600">{featuredReview.service}</span>
                                </div>
                                <span className="text-sm text-gray-500">{featuredReview.date}</span>
                            </div>
                        </div>
                        <div className="relative">
                            <FaQuoteLeft className="text-orange-300 text-4xl mb-4" />
                            <p className="text-lg text-gray-700 leading-relaxed italic">
                                "{featuredReview.text}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Carousel */}
            <div className="py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-light text-gray-800 mb-2">What Our Patients Say</h2>
                        <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
                    </div>

                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out py-10 w-full"
                                style={{ transform: `translateX(0%)` }}
                            >
                                {visibleReviews.map((review) => (
                                    <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                        {review.avatar}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                                        <div className="flex items-center space-x-1">
                                                            {renderStars(review.rating)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => toggleLike(review.id)}
                                                    className={`p-2 rounded-full transition-colors ${likedReviews.includes(review.id)
                                                        ? 'text-red-500 bg-red-50'
                                                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                                        }`}
                                                >
                                                    <FaHeart className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="mb-3">
                                                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                                                    {review.service}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                "{review.text}"
                                            </p>

                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{review.date}</span>
                                                {review.verified && (
                                                    <span className="flex items-center space-x-1">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        <span>Verified</span>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                            disabled={totalPages <= 1}
                        >
                            <FaChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                            disabled={totalPages <= 1}
                        >
                            <FaChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-orange-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        Ready to Start Your Wellness Journey?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Join hundreds of satisfied patients who have transformed their health with our comprehensive care
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToForm}
                            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Book Your Consultation
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                            Learn More About Our Services
                        </button>
                    </div>
                </div>
            </div>

            {/* Hidden Contact Form Reference */}
            <div ref={formRef} className="hidden">
                {/* This div serves as a scroll target for the contact form */}
            </div>
        </div>
    );
};

export default Reviews;
