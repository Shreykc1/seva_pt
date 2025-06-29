import { FaRegDotCircle } from 'react-icons/fa';

const categories = [
    {
        title: 'Back & Spine',
        items: [
            'Back Pain',
            'Neck Pain',
            'Neurological Impairments',
            'Discectomy',
            'Foot Drop',
            'Low Back Pain',
            'Radiculopathy',
            'Stenosis',
            'Thoracic Spine Pain',
            'Vertebral Fractures',
        ],
    },
    {
        title: 'Foot & Ankle',
        items: [
            'Foot & Ankle Pain',
            'Ankle Sprains',
            'Foot Drop',
            'Neuromas',
            'Plantar Fasciitis',
            'Postoperative Ankle Fractures',
            'Stress Injury',
        ],
    },
    {
        title: 'Hip',
        items: [
            'Hip Pain',
            'Hip Arthroscopy',
            'Arthritis',
            'Bursitis',
            'Hip Impingement',
            'Labral Tear',
        ],
    },
    {
        title: 'Knee',
        items: [
            'Knee Pain',
            'Torn Meniscus Treatment',
            'ACL Injury Physical Therapy',
            'ACL Injury',
            'IT Band Pain',
            'MCL Injury',
            'Meniscus Tear',
            'Patellofemoral Dysfunction',
        ],
    },
    {
        title: 'Shoulder Pain',
        items: [
            'Frozen Shoulder (Adhesive Capsulitis)',
            'Postoperative Shoulder Care',
            'Rotator Cuff Injury',
            'Shoulder Impingement',
            'Shoulder Labral Tear',
        ],
    },
    {
        title: 'Elbow Pain',
        items: [
            'Golfers Elbow',
            'Tennis Elbow',
        ],
    },
    {
        title: 'Wrist & Hand Pain',
        items: [
            'Carpal Tunnel Syndrome',
            "Dupuytren's Contracture",
            'Repetitive Strain Injury (RSI)',
            'Trigger Finger',
        ],
    },
    {
        title: 'Dance Medicine',
        items: [
            'Hip Pain (labral tears, impingement, snapping hip syndrome)',
            'Muscle Strains',
            'Patellofemoral Syndrome',
            'Ankle Sprain',
            'Post-op Rehabilitation',
            'Bunions',
            'Stress Fractures',
            'Back Pain',
            'Tendinopathies (upper and lower extremities)',
        ],
    },
    {
        title: 'Chronic Pain',
        items: [
            'Pain Management',
            'Chronic Pain',
        ],
    },
    {
        title: 'Osteoarthritis',
        items: [],
    },
    {
        title: 'TMD',
        items: ['Temporomandibular Disorder'],
    },
    {
        title: 'Pelvic Floor Conditions',
        items: [],
    },
    {
        title: 'Vestibular Dysfunction',
        items: [],
    },
    {
        title: 'Neurological Impairments',
        items: [],
    },
    {
        title: 'Tendinitis',
        items: [],
    },
];

const WhatWeTreat = () => {
    return (
        <div className="bg-white min-h-screen py-20 px-4">
            <section className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6 leading-tight uppercase tracking-tight">
                    What We Treat
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-10 tracking-wide">
                    Comprehensive Care for Every Condition
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At Cynergy Physical Therapy, we treat a wide range of orthopedic, neurological, and chronic pain conditions. Our expert team provides personalized care for every body part and every type of pain, helping you return to the activities you love.
                </p>
            </section>
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {categories.map((cat) => (
                    <div key={cat.title} className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-start">
                        <div className="flex items-center mb-4">
                            <FaRegDotCircle className="text-purple-400 w-7 h-7 mr-2" />
                            <h3 className="text-2xl font-bold text-purple-500">{cat.title}</h3>
                        </div>
                        <ul className="pl-2 space-y-2">
                            {cat.items.length > 0 ? cat.items.map((item) => (
                                <li key={item} className="text-gray-700 text-lg flex items-center">
                                    <span className="mr-2 text-purple-400">•</span> {item}
                                </li>
                            )) : <li className="text-gray-400 italic">(See details in clinic)</li>}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default WhatWeTreat;
