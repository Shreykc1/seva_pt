import React, { useState } from 'react';

const PAIN_AREAS = [
    {
        key: 'head_neck',
        label: 'Head and Neck',
        message: 'Our practice specializes in the intricate biomechanics of the head and neck. We offer comprehensive care, including precise chiropractic adjustments, physical therapy, occupational therapy to reduce and prevent pain, and acupuncture, to promote healing, alleviate pain, and restore function.'
    },
    {
        key: 'upper_back',
        label: 'Upper Back',
        message: 'We prioritize spinal health through a blend of chiropractic adjustments, physical and occupational therapies, and acupuncture. This holistic approach addresses conditions like sciatica, herniated discs, chronic back pain, and more.'
    },
    {
        key: 'shoulder_clavicle',
        label: 'Shoulder or Clavicle',
        message: 'Our expert team provides specialized care for the shoulder and clavicle area, understanding its vulnerability to injury. We combine chiropractic care with physical therapy, occupational modifications, and acupuncture.'
    },
    {
        key: 'mid_back',
        label: 'Mid-Back',
        message: 'We address mid-back pain with a combination of manual therapy, exercise, and evidence-based interventions to restore mobility and reduce discomfort.'
    },
    {
        key: 'lower_back',
        label: 'Lower Back',
        message: 'Lower back pain is managed with a comprehensive approach including chiropractic adjustments, physical therapy, and lifestyle modifications.'
    },
    {
        key: 'elbows_hands_wrists',
        label: 'Elbows, Hands, and Wrists',
        message: 'We handle various conditions, including carpal tunnel syndrome, tennis elbow, arthritis, and more, ensuring your daily activities promote joint health.'
    },
    {
        key: 'hips_knees_ankles',
        label: 'Hips, Knees and Ankles',
        message: 'We address these critical weight-bearing joints with an interdisciplinary approach. Through therapeutic exercises, gait training, acupuncture, and lifestyle adaptations.'
    }
];

const DEFAULT_MESSAGE = 'Discover how our neck and back-pain experts can treat specific areas of your body.';

const PainAreaSection = () => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <section className="py-32 bg-white">
            <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-20">
                {/* Left: Text and dynamic message */}
                <div className="flex-1 max-w-2xl">
                    <div className="flex items-center mb-10">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mr-8">
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb" opacity="0.1" /><path d="M12 8v4l3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h2 className="text-5xl font-extrabold text-gray-900">Where Is Your Pain?</h2>
                    </div>
                    <p className="text-blue-700 font-bold mb-6 text-2xl">
                        {active ? PAIN_AREAS.find(area => area.key === active)?.label : 'Discover how our neck and back-pain experts can treat specific areas of your body.'}
                    </p>
                    <p className="text-gray-600 mb-10 min-h-[120px] text-xl transition-all">
                        {active ? PAIN_AREAS.find(area => area.key === active)?.message : DEFAULT_MESSAGE}
                    </p>
                    <p className="text-gray-500 text-lg">
                        We follow a rigorous evidence based treatment method. Our chiropractors, physical therapists, occupational therapists and acupuncturists can diagnose and treat pain in most areas of your body as part of a comprehensive treatment plan.<br /><br />
                        Our specialists consistently participate in Continuing Professional Development (CPD) training to stay current with the latest research, evidence, and techniques, ensuring you receive the highest quality care.
                    </p>
                </div>
                {/* Right: Human body image with pain area labels */}
                <div className="flex-1 flex items-center justify-center relative min-h-[700px]">
                    <img
                        src="/public/images/pain.webp"
                        alt="Human body pain areas"
                        className="max-h-[700px] w-auto select-none pointer-events-none"
                    />
                    {/* Overlay pain area buttons */}
                    <div className="absolute inset-0">
                        {PAIN_AREAS.map((area, idx) => {
                            // Button positions for each area
                            const positions = [
                                { left: '45%', top: '20%' }, // head_neck
                                { left: '48%', top: '30%' }, // upper_back
                                { left: '50%', top: '40%' }, // shoulder_clavicle
                                { left: '56%', top: '55%' }, // mid_back
                                { left: '56%', top: '70%' }, // lower_back
                                { left: '50%', top: '80%' }, // elbows_hands_wrists
                                { left: '40%', top: '90%' }, // hips_knees_ankles
                            ];
                            const style = positions[idx];
                            return (
                                <button
                                    key={area.key}
                                    type="button"
                                    className={`absolute px-6 py-2 bg-white/90 rounded-full shadow text-blue-700 text-base font-bold transition border-2 ${active === area.key ? 'border-blue-700 bg-blue-100' : 'border-transparent'} `}
                                    style={{ left: style.left, top: style.top }}
                                    onClick={() => setActive(active === area.key ? null : area.key)}
                                >
                                    {area.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainAreaSection;
