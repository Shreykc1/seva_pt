import { FaRegDotCircle } from 'react-icons/fa';

const categories = [
    {
        title: 'Back & Spine',
        image: '/images/back.jpg',
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
        image: '/images/ankle.jpeg',
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
        image: '/images/hip.webp',
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
        image: '/images/knee.jpg',
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
        image: '/images/shoulder.jpg',
        items: [
            'Frozen Shoulder (Adhesive Capsulitis)',
            'Postoperative Shoulder Care',
            'Rotator Cuff Injury',
            'Shoulder Impingement',
        ],
    },
    {
        title: 'Elbow Pain',
        image: '/images/elbow.jpg',
        items: [
            'Golfers Elbow',
            'Tennis Elbow',
        ],
    },
    {
        title: 'Wrist & Hand Pain',
        image: '/images/wrist.jpg',
        items: [
            'Carpal Tunnel Syndrome',
            "Dupuytren's Contracture",
            'Repetitive Strain Injury (RSI)',
            'Trigger Finger',
        ],
    },
    {
        title: 'Dance Medicine',
        image: '/images/dance.png',
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
        image: '/images/chronic.jpg',
        items: [
            'Pain Management',
            'Chronic Pain',
        ],
    },
    {
        title: 'Osteoarthritis',
        image: '/images/arth.jpg',
        items: [],
    },
    {
        title: 'TMD',
        image: '/images/tmd.jpg',
        items: ['Temporomandibular Disorder'],
    },
    {
        title: 'Pelvic Floor Conditions',
        image: '/images/pelvis.jpg',
        items: [],
    },
    {
        title: 'Vestibular Dysfunction',
        image: '/images/vest.png',
        items: [],
    },
    {
        title: 'Tendinitis',
        image: '/images/tend.jpg',
        items: [],
    },
    {
        title: 'Sports Therapy',
        image: '/images/sports.jpg',
        items: ['Running', 'Walking', 'Jogging'],
    },
];

const WhatWeTreat = () => {
    return (
        <div className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-x-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full opacity-30 blur-2xl -z-10" style={{ filter: 'blur(80px)' }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10" style={{ filter: 'blur(100px)' }} />

            <section className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-orange-600 mb-6 leading-tight uppercase tracking-tight drop-shadow-lg">
                    What We Treat
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-10 tracking-wide">
                    Comprehensive Care for Every Condition
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At SEVA Physical Therapy, we treat a wide range of orthopedic, neurological, and chronic pain conditions. Our expert team provides personalized care for every body part and every type of pain, helping you return to the activities you love.
                </p>
            </section>
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {categories.map((cat, idx) => (
                    <div
                        key={cat.title}
                        className={
                            `relative bg-white rounded-3xl shadow-xl p-8 flex flex-col items-start border-t-8 ` +
                            (idx % 3 === 0 ? 'border-orange-400' : idx % 3 === 1 ? 'border-blue-400' : 'border-orange-300') +
                            ' transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group'
                        }
                        style={{ minHeight: '320px' }}
                    >
                        {/* Category image */}
                        <img
                            src={cat.image}
                            alt={cat.title + ' illustration'}
                            className="w-full h-40 object-cover rounded-2xl mb-4 shadow-md"
                        />
                        {/* Icon with gradient ring */}
                        <div className="flex items-center mb-4">
                            <span className={
                                `inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ` +
                                (idx % 3 === 0 ? 'from-orange-400 to-orange-200' : idx % 3 === 1 ? 'from-blue-400 to-blue-200' : 'from-orange-300 to-blue-100') +
                                ' shadow-md mr-3 group-hover:scale-110 transition-transform duration-300'
                            }>
                                <FaRegDotCircle className="text-white w-7 h-7" />
                            </span>
                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">{cat.title}</h3>
                        </div>
                        <div className="w-full border-b border-dashed border-orange-100 mb-4" />
                        <ul className="pl-2 space-y-3 w-full">
                            {cat.items.length > 0 ? cat.items.map((item) => (
                                <li key={item} className="text-gray-700 text-lg flex items-center group/item">
                                    <span className="mr-3 text-orange-400 group-hover/item:text-blue-400 transition-colors duration-200">•</span>
                                    <span className="group-hover/item:text-orange-600 transition-colors duration-200">{item}</span>
                                </li>
                            )) : <li className="text-gray-400 italic">(See details in clinic)</li>}
                        </ul>
                        {/* Decorative bottom accent */}
                        <div className={
                            `absolute bottom-0 right-0 w-16 h-3 rounded-bl-3xl rounded-tr-3xl ` +
                            (idx % 3 === 0 ? 'bg-orange-200' : idx % 3 === 1 ? 'bg-blue-200' : 'bg-orange-100')
                        } />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default WhatWeTreat;
