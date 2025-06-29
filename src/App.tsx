import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import PainAreaSection from './components/PainAreaSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import LocationsSection from './components/LocationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import WhatWeOffer from './pages/WhatWeOffer';
import WhatWeTreat from './pages/WhatWeTreat';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';



function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <Routes>
                    <Route path="/what-we-offer" element={<WhatWeOffer />} />
                    <Route path="/what-we-treat" element={<WhatWeTreat />} />
                    <Route path="/about" element={<Blog />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
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
