import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import PainAreaSection from './components/PainAreaSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import LocationsSection from './components/LocationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const WhatWeOffer = () => <div className="min-h-[60vh] flex items-center justify-center text-3xl font-bold">What We Offer Page</div>;
const WhatWeTreat = () => <div className="min-h-[60vh] flex items-center justify-center text-3xl font-bold">What We Treat Page</div>;

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <Routes>
                    <Route path="/what-we-offer" element={<WhatWeOffer />} />
                    <Route path="/what-we-treat" element={<WhatWeTreat />} />
                    <Route path="/" element={
                        <>
                            <ImageCarousel />
                            <PainAreaSection />
                            <ServicesSection />
                            <AboutSection />
                            <LocationsSection />
                            <TestimonialsSection />
                        </>
                    } />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
