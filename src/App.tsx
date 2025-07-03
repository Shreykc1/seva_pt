import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        let myLandbot: any = null;
        function initLandbot() {
            if (!myLandbot) {
                const s = document.createElement('script');
                s.type = 'module';
                s.async = true;
                s.addEventListener('load', function () {
                    // @ts-ignore
                    myLandbot = new window.Landbot.Popup({
                        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3026980-COO6XP3PC0E9CB0F/index.json',
                    });
                });
                s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
                const x = document.getElementsByTagName('script')[0];
                if (x && x.parentNode) {
                    x.parentNode.insertBefore(s, x);
                } else {
                    document.head.appendChild(s);
                }
            }
        }
        window.addEventListener('mouseover', initLandbot, { once: true });
        window.addEventListener('touchstart', initLandbot, { once: true });
        return () => {
            window.removeEventListener('mouseover', initLandbot);
            window.removeEventListener('touchstart', initLandbot);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Header />
                <Routes>
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } />
                    <Route path="/signin" element={<SignIn />} />
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

// Simple private route wrapper
function PrivateRoute({ children }: { children: JSX.Element }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? children : <Navigate to="/signin" replace />;
}

export default App;
