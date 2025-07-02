import { useState, useRef, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    const [showSuccess,setShowSuccess] = useState(false);
    const [showFailure,setShowFailure] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        day: '',
        time: '',
        message: ''
    });

    const formRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const startDateTime = `${formData.day}T${formData.time}`;
        const endDateTime = `${formData.day}T${formData.time}`; // Add duration if needed

        try {
            const response = await fetch('http://localhost:5000/api/calendar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    summary: formData.service,
                    description: formData.message,
                    startDateTime,
                    endDateTime,
                    email: formData.email,
                    timeZone: userTimeZone,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setShowSuccess(true);

                console.log('Event created: ' + data.eventLink);
            } else {
                setShowFailure(true);

            }
        } catch (err: any) {
            alert('Error: ' + err.message);
        }
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Add a small delay and then scroll up a bit more for better positioning
        setTimeout(() => {
            window.scrollBy({
                top: -200,
                behavior: 'smooth'
            });
        }, 0);
    };

    // Handle hash navigation
    useEffect(() => {
        if (window.location.hash === '#form') {
            // Small delay to ensure the page is fully loaded
            setTimeout(() => {
                scrollToForm();
            }, 100);
        }
    }, []);

    const contactInfo = [
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "Phone",
            details: ["732-986-6576"],
            color: "bg-orange-500"
        },
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email",
            details: ["sevaptny@gmail.com"],
            color: "bg-orange-500"
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "Address",
            details: ["123 W 42nd Street", "New York, NY 10036"],
            color: "bg-orange-500"
        },
        {
            icon: <FaClock className="w-6 h-6" />,
            title: "Hours",
            details: ["Mon-Fri: 7AM-8PM", "Sat: 8AM-4PM", "Sun: Closed"],
            color: "bg-orange-500"
        }
    ];

    const services = [
        "Chiropractic Care",
        "Physical Therapy",
        "Occupational Therapy",
        "Acupuncture",
        "Massage Therapy",
        "General Inquiry"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Ready to start your wellness journey? Get in touch with our team today. We're here to help you achieve optimal health and well-being.
                    </p>
                    <button
                        onClick={scrollToForm}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-colors transform hover:scale-105"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="py-0 bg-white">
                <div className="w-full mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                                <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center text-white mb-4`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form and Map Section */}
            <div className="py-16 bg-gray-50">
                <div className="w-full mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div ref={formRef} className="bg-white rounded-2xl p-8 shadow-lg">
                          <div className='flex w-full justify-between'>
                          <h2 className="text-3xl font-light text-gray-800 mb-6">Send Us a Message</h2>
                          {
                            showSuccess && (
                                <div className='h-10 py-1.5 px-4 border border-green-500 rounded-lg bg-green-600/20 text-green-600'>
                            Appointment Booked Succesfully!
                          </div>
                            )
                          } {
                            showFailure && (
                                <div className='h-10 py-1.5 px-4 border border-green-500 rounded-lg bg-green-600/20 text-green-600'>
                            Appointment Booked Succesfully!
                          </div>
                            )
                          }
                          </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service of Interest
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Day and Time Selection */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Day
                                        </label>
                                        <input
                                            type="date"
                                            id="day"
                                            name="day"
                                            value={formData.day}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Time
                                        </label>
                                        <input
                                            type="time"
                                            id="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell us about your health concerns or questions..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Our Location</h3>
                                <div className="w-full h-64 rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.9743457052236!2d-74.6442136!3d40.3207269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1d1d9116cad%3A0x3fdc5b0d6eea2f99!2sSeva%20Orthopedic%20Physical%20Therapy!5e0!3m2!1sen!2sin!4v1751101193545!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Seva Orthopedic Physical Therapy Location"
                                    />
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                        <FaFacebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                                        <FaInstagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                        <FaYoutube className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <FaPhone className="w-4 h-4 text-orange-600" />
                                        <span className="text-gray-600">732-986-6576</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaEnvelope className="w-4 h-4 text-orange-600" />
                                        <span className="text-gray-600">info@sevawellness.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaClock className="w-4 h-4 text-orange-600" />
                                        <span className="text-gray-600">Mon-Fri: 7AM-8PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        Book your consultation today and take the first step towards better health
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToForm}
                            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Book Appointment
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
