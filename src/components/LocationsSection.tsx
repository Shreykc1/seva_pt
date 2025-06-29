const LocationsSection = () => {

    return (
        <section id="location" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Location
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Conveniently located across New York City to serve you better
                    </p>
                </div>

                {/* Big Google Map */}
                <div className="w-full mt-16 flex justify-center">
                    <div className="w-full max-w-6xl h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.9743457052236!2d-74.6442136!3d40.3207269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1d1d9116cad%3A0x3fdc5b0d6eea2f99!2sSeva%20Orthopedic%20Physical%20Therapy!5e0!3m2!1sen!2sin!4v1751101193545!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Seva Orthopedic Physical Therapy Map"
                        ></iframe>
                    </div>
                </div>

                {/* <div className="text-center mt-12">
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                        View All Locations on Map
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default LocationsSection;
