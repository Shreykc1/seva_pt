import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
    {
        q: 'Do you accept insurance?',
        a: (
            <div>
                <p className="mb-4">At SEVA Health and Wellness, we offer a wide range of insurance and self-pay options to provide the best service to our patients. Below is a summary of our accepted insurances:</p>
                <div className="mb-4">
                    <span className="font-bold">Accepted Insurance Providers:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><span className="font-bold">Aetna US Healthcare:</span> We accept most PPO and POS plans. Note: HMO plans are not accepted.</li>
                        <li><span className="font-bold">Blue Cross Blue Shield (BC/BS)</span> of New York and out-of-state: We accept most PPO and POS plans. Note: HMO plans are not accepted.</li>

                        <li><span className="font-bold">Meritain Health</span></li>
                        <li><span className="font-bold">Private Healthcare Systems (PHCS)</span></li>
                        <li><span className="font-bold">United Healthcare:</span> We accept most PPO and POS plans. Note: HMO plans are not accepted.</li>
                        <li>Most International Insurance Providers</li>
                    </ul>
                </div>
                <p className="mb-4">Please be informed that deductibles and co-insurance specifics may differ among plans.</p>
                <div className="mb-2">
                    <span className="font-bold">Important Information:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Patients are responsible for any co-pays and co-insurance expenses.</li>
                        <li>While most insurance plans cover a range of , physical therapy, physical and physical therapy, it's advisable to check with our office for insurance verification.</li>
                        <li>Some insurance agreements allow us to offer our services without requiring an external referral from a physician or the insurance company itself.</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <span className="font-bold">Unaccepted Insurance Plans:</span> We currently do not accept <span className="font-bold">Medicaid, Medicare, HIP and Workers Comp</span>.<br />
                    <span className="font-bold">Additional Payment Options:</span> Family medical insurance plans are welcome. We also provide discounted cash plans for those seeking an alternative payment method. If your insurance provider is not mentioned in our list or if you have any questions regarding our payment options, please do not hesitate to reach out to us directly at <a href="tel:9176941565" className="text-blue-500 font-bold hover:underline">732-986-6576</a>. Our dedicated team is on standby to assist and guide you. Schedule your appointment today: To schedule your appointment, call us today at <a href="tel:732-986-6576" className="text-blue-500 font-bold hover:underline">732-986-6576</a>.
                </div>
            </div>
        )
    },
    {
        q: 'Do I need a referral from a doctor to receive treatment at SEVA Health and Wellness?',
        a: (
            <div>
                <p className="mb-4">Thank you for your interest in SEVA Health and Wellness. One of the key advantages of our facility is that, in many cases, you do not need a referral from a doctor to receive treatment from our healthcare professionals. We offer a range of services, including , Physical Therapy, physical Therapy, physical, and Massage Therapy, and while some insurance plans may require a referral for coverage, most do not. Let me provide you with more detailed information on our approach to care and recent changes in healthcare regulations.</p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                    <li>
                        <span className="font-bold">No Doctor Referral Required for Most Services:</span> For services like  and physical, you typically do not need a referral from a medical doctor to initiate treatment. We operate as a portal of entry for your musculoskeletal and wellness needs, allowing you to seek our expertise directly.
                    </li>
                    <li>
                        <span className="font-bold">Physical Therapy and physical Therapy - New Laws and Portal of Entry Care:</span> In recent years, there have been significant changes in healthcare regulations that are particularly beneficial to our patients. In New York, Physical Therapists and physical Therapists can now see patients without the need for a medical referral for the first month of care. This means that if you're seeking Physical Therapy or physical Therapy services, you can come directly to SEVA Health and Wellness without having to first see a physician for a referral.
                    </li>
                    <li>
                        <span className="font-bold">Insurance and Referral Requirements:</span> It's important to note that insurance coverage for our services can vary. While many insurance plans do not require a doctor's referral for , physical, or Massage Therapy, some may request a referral for coverage, and this can depend on the specific terms of your insurance plan. Physical Therapy and physical Therapy coverage may also differ among insurance providers, so we recommend checking with your insurance company to understand your specific requirements.
                    </li>
                </ul>
                <p className="mb-4">Our team at SEVA Health and Wellness is committed to helping you navigate this process. We can assist you in verifying your insurance coverage and ensuring you have the necessary documentation if a referral is required. Whether you have a referral or not, we are here to provide you with the highest quality care and support to address your musculoskeletal concerns and wellness needs.</p>
                <p>If you have any questions or need assistance with understanding your insurance requirements or treatment options, please don't hesitate to reach out to us. We're dedicated to making your experience at SEVA Health and Wellness as smooth and beneficial as possible, and we look forward to working with you on your journey to better health and well-being.</p>
            </div>
        )
    },
    {
        q: 'How do I know which treatment option is right for me?',
        a: (
            <div>
                <p className="mb-4">At SEVA Health and Wellness, we understand that choosing the right treatment option can be a significant decision for your health and well-being. The process of determining the most suitable treatment for your specific needs involves a careful assessment and collaboration with our team of healthcare professionals. Here's a comprehensive guide on how to navigate the decision-making process:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                    <li><span className="font-bold">Initial Assessment:</span> The first step in determining the right treatment option is to undergo an initial assessment. During this assessment, one of our healthcare professionals will thoroughly evaluate your condition. This may include discussing your medical history, performing physical examinations, and possibly conducting diagnostic tests like X-rays or MRI scans if needed. The assessment helps us understand the nature and extent of your health concern.</li>
                    <li><span className="font-bold">Consultation:</span> Following the assessment, you will have a consultation with our healthcare provider who will explain the findings and the available treatment options. We will take the time to address your questions, concerns, and preferences, allowing you to make an informed decision.</li>
                    <li><span className="font-bold">Personalized Treatment Plan:</span> Your healthcare provider will work with you to create a personalized treatment plan that takes into consideration your unique needs, goals, and any relevant medical history. This plan may involve a single treatment modality or a combination of services that are best suited to address your condition.</li>
                    <li><span className="font-bold">Benefits and Risks:</span> Your healthcare provider will also discuss the potential benefits and risks associated with each treatment option. Understanding both the positive outcomes and any potential side effects or limitations is crucial in making an informed decision.</li>
                    <li><span className="font-bold">Collaborative Decision-Making:</span> At SEVA Health and Wellness, we believe in a collaborative approach to healthcare. We encourage open communication between you and your healthcare provider to ensure that your treatment plan aligns with your goals and comfort level. You have the final say in determining which treatment option is right for you.</li>
                    <li><span className="font-bold">Ongoing Evaluation:</span> As you progress through your treatment plan, your healthcare provider will continuously monitor your response to the chosen therapy. If necessary, adjustments to your treatment plan can be made to ensure that you are receiving the most effective care.</li>
                </ol>
                <p className="mb-2">It's important to remember that our team of healthcare professionals at SEVA Health and Wellness includes experts in various fields, including <a href="#" className="text-blue-500 font-bold hover:underline"></a>, <a href="#" className="text-blue-500 font-bold hover:underline">Physical Therapy</a>, <a href="#" className="text-blue-500 font-bold hover:underline">physical Therapy</a>, <a href="#" className="text-blue-500 font-bold hover:underline">physical</a>, and Massage Therapy. This diversity allows us to provide a wide range of treatment options, and the most appropriate choice will depend on your individual condition and health goals. Ultimately, the decision of which treatment option is right for you should be based on a combination of expert guidance, your preferences, and your health objectives. We are here to support you throughout this process, and our primary goal is to help you achieve the best possible outcomes in your journey to improved health and wellness.</p>
            </div>
        )
    },
    {
        q: 'Can I get a same day appointment?',
        a: (
            <div>
                <p className="mb-4">We understand that your health concerns may sometimes require urgent attention, and we strive to accommodate our patients to the best of our abilities. While we do our utmost to provide timely care, same-day appointments may vary depending on a few factors, including the specific service you require, the availability of our healthcare professionals, and the current schedule. Here's how you can go about requesting a same-day appointment:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><span className="font-bold">Contact Us Directly:</span> The quickest way to check for same-day appointment availability is to contact our office directly. Our friendly and knowledgeable staff will be able to provide you with real-time information regarding openings and help you schedule an appointment.</li>
                    <li><span className="font-bold">Urgent Needs:</span> If you have an urgent healthcare need, please let our team know. We prioritize the well-being of our patients and will do our best to accommodate you as soon as possible.</li>
                    <li><span className="font-bold">Flexible Scheduling:</span> Our facility offers a variety of services, and the availability of same-day appointments may vary by service type. Some services, such as  care and physical, may be more readily available for same-day appointments, while others, like physical Therapy, Physical Therapy, or certain Massage Therapy sessions, may require a bit more lead time to schedule. We can also coordinate care with NYC assisted living facilities.</li>
                    <li><span className="font-bold">Advance Booking:</span> To increase your chances of securing a same-day appointment, especially for specific treatments or with specific healthcare providers, we recommend booking in advance whenever possible.</li>
                </ul>
                <p>Our commitment is to provide you with the highest quality care, and we will work diligently to accommodate your scheduling needs to the best of our ability. If you require a same-day appointment or have any questions about our services or scheduling, please feel free to contact our office, and we will be more than happy to assist you in addressing your health and wellness concerns promptly.</p>
            </div>
        )
    },
    {
        q: 'What should I expect during my first visit?',
        a: (
            <div>
                <p className="mb-4">At SEVA Health and Wellness, your well-being is our top priority, and we want to ensure that your first visit is both informative and comfortable. When you arrive for your initial appointment, you can expect a warm and welcoming environment where our experienced team of healthcare professionals will work with you to assess your musculoskeletal condition and create a personalized treatment plan. Here's a detailed overview of what you can anticipate during your first visit, specifically focusing on the initial medical examination for your musculoskeletal concern.</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><span className="font-bold">Comprehensive Health History:</span> Your first visit begins with a thorough review of your medical history. We'll discuss any prior injuries, surgeries, or chronic conditions that might be relevant to your current concern. Understanding your overall health is essential for tailoring your treatment plan.</li>
                    <li><span className="font-bold">Symptom Assessment:</span> We will listen attentively as you describe your current symptoms, including the location, duration, and intensity of any pain or discomfort. This helps us pinpoint the areas that require attention and understand the nature of your musculoskeletal issue.</li>
                    <li><span className="font-bold">Physical Examination:</span> Our healthcare professionals will conduct a physical examination specific to your musculoskeletal condition. This may include:
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Range of motion assessments to evaluate joint and muscle flexibility.</li>
                            <li>Orthopedic tests to identify potential sources of pain or discomfort.</li>
                            <li>Palpation of affected areas to locate tender points, muscle tightness, or signs of inflammation.</li>
                            <li>Neurological examinations to assess reflexes and nerve function.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Diagnostic Imaging (if necessary):</span> In some cases, X-rays or other imaging studies may be required to gain a more comprehensive view of your musculoskeletal condition. If this is deemed necessary, we will discuss the process and ensure you receive the necessary diagnostics.</li>
                    <li><span className="font-bold">Initial Diagnosis and Discussion:</span> Following the examination, our healthcare team will provide you with an initial diagnosis. We will explain our findings and the nature of your musculoskeletal condition in detail. We encourage you to ask questions and discuss your concerns or expectations.</li>
                    <li><span className="font-bold">Treatment Plan Development:</span> Based on the diagnosis and your specific needs, we will collaborate with you to create a customized treatment plan. This plan may involve a combination of our services, such as  care, physical therapy, physical therapy, physical, and massage therapy. We will outline the goals, expected outcomes, and the recommended course of treatment.</li>
                    <li><span className="font-bold">Patient Education:</span> During your first visit, we believe in empowering you with knowledge about your condition. Our healthcare professionals will educate you on what to expect during your treatment, including the potential benefits and any lifestyle modifications that may be necessary.</li>
                    <li><span className="font-bold">Treatment:</span> Based on the care plan we have developed for you and if there are no contraindications presented in any earlier components of your first visit, we may decide it will be beneficial to start your comprehensive therapy journey on the first visit.</li>
                    <li><span className="font-bold">Scheduling and Follow-Up:</span> We will assist you in scheduling future appointments for your treatment sessions. These appointments will be tailored to your treatment plan, ensuring you receive the care you need to address your musculoskeletal condition effectively.</li>
                </ul>
                <p>At SEVA Health and Wellness, we are committed to providing the highest level of care and support during your journey to better health. Your first visit is a crucial step in understanding your condition and creating a plan for healing and recovery. We look forward to working closely with you to address your musculoskeletal concerns and guide you towards a pain-free and improved quality of life.</p>
            </div>
        )
    },
    {
        q: 'Can I receive multiple types of treatments during a single visit?',
        a: (
            <div>
                <p className="mb-4">Absolutely, at SEVA Health and Wellness, we offer a holistic approach to healthcare, and in many cases, it's not only possible but also highly beneficial to receive multiple types of treatments during a single visit. We understand as a busy professional in NYC, time is our most valuable resource so we are committed to helping you get the most out of your visit with us. Our goal is to provide you with comprehensive care that addresses all aspects of your health and wellness, and our team of skilled professionals is well-equipped to offer a combination of services to best meet your needs.</p>
                <p className="mb-4">During a single visit, you can receive a combination of treatments that are specifically tailored to your unique health concerns and goals. Here are some examples of how you can benefit from a multi-disciplinary approach:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><span className="font-bold">Physical Therapy:</span> Our physical therapy sessions are designed to improve mobility, restore function, and help you recover from injury or surgery. Our therapists use evidence-based techniques tailored to your specific needs and goals.</li>
                    <li><span className="font-bold">Massage Therapy:</span> Massage therapy can help relieve muscle tension, reduce pain, and promote relaxation. Our licensed massage therapists work with you to address areas of discomfort and support your overall wellness.</li>
                </ul>
                <p>Our healthcare professionals work collaboratively to ensure that the combination of treatments you receive during a single visit is safe, effective, and aligned with your wellness goals. Your well-being is our top priority, and our team will coordinate your care to provide you with the best possible results. If you're interested in exploring a multi-disciplinary approach to your healthcare, please let us know, and we'll be happy to work with you to create a customized treatment plan that incorporates the services you need to achieve optimal health and wellness.</p>
            </div>
        )
    },
    {
        q: 'How long does a  treatment session last?',
        a: (
            <div>
                <p className="mb-4">At SEVA Health and Wellness, we understand that our patients often have busy schedules, and we aim to provide effective and efficient care while also ensuring your comfort. The duration of a  treatment session can vary depending on several factors, including the specific needs and conditions of the patient. On average, a  treatment session typically lasts between <span className="font-bold">30-45 minutes</span>.</p>
                <p className="mb-4"><span className="font-bold">Initial Appointment:</span> The initial  appointment, which includes a thorough assessment, may take a bit longer, typically around <span className="font-bold">45 minutes to an hour</span>. During this first visit, our doctor will conduct a comprehensive evaluation, which includes discussing your medical history, performing physical exams, and possibly taking X-rays if necessary. This thorough assessment helps us understand your condition and create a personalized treatment plan.</p>
                <p className="mb-4"><span className="font-bold">Follow-Up Sessions:</span> Subsequent  sessions, which involve spinal adjustments and other therapeutic interventions, are typically shorter in duration. The doctor will focus on the specific areas of concern and perform adjustments or other manual therapies as needed to address your musculoskeletal issues.</p>
                <p className="mb-4">Our goal is to provide you with effective care that meets your individual needs while respecting your time constraints. Your doctor will work with you to develop a treatment plan that not only addresses your condition but also fits your schedule.</p>
                <p>If you have any questions about the duration of  sessions or would like to discuss your specific needs, please feel free to reach out to us. We are here to provide you with the highest quality care and ensure your comfort throughout the treatment process.</p>
            </div>
        )
    },
    {
        q: 'What conditions do you treat?',
        a: (
            <div>
                <p className="mb-4">Our expert team integrates various therapeutic methods, offering an unparalleled approach to your well-being. From the intricate biomechanics of the head and neck to the critical functionality of the spine and extremities, we employ a combination of specialized  care, physical and physical therapies, and physical. This comprehensive strategy allows us to effectively manage a spectrum of conditions, providing relief, enhancing healing, and ensuring a return to optimal health. Dive into our specific care areas below to learn more about how our holistic and patient-centered approach can bring balance, strength, and mobility back into your life.</p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                    <li>
                        <span className="font-bold">Head and Neck:</span> Our practice specializes in the intricate biomechanics of the head and neck. We offer comprehensive care, including precise  adjustments, physical therapy, physical therapy to reduce and prevent pain, and physical, to promote healing, alleviate pain, and restore function. Our approach addresses a range of conditions, from tension headaches and migraines to complex disorders like cervical radiculopathy and TMJ.
                    </li>
                    <li>
                        <span className="font-bold">Back and Spine:</span> We prioritize spinal health through a blend of  adjustments, physical and physical therapies, and physical. This holistic approach addresses conditions like sciatica, herniated discs, chronic back pain, and more, focusing on natural healing, pain relief, and preventative strategies.
                    </li>
                    <li>
                        <span className="font-bold">Shoulders and Clavicle:</span> Our expert team provides specialized care for the shoulder and clavicle area, understanding its vulnerability to injury. We combine  care with physical therapy, physical modifications, and physical to treat conditions ranging from rotator cuff injuries and frozen shoulder to more severe cases like clavicle fractures and post-operative rehabilitation.
                    </li>
                    <li>
                        <span className="font-bold">Elbows, Hands, and Wrists:</span> Focusing on these essential structures, our team employs custom exercise regimens, practical environmental adaptations, and specialized physical techniques. We handle various conditions, including carpal tunnel syndrome, tennis elbow, arthritis, and more, ensuring your daily activities promote joint health.
                    </li>
                    <li>
                        <span className="font-bold">Hips, Knees, and Ankles:</span> We address these critical weight-bearing joints with an interdisciplinary approach. Through therapeutic exercises, gait training, physical, and lifestyle adaptations, we manage and treat conditions like hip bursitis, knee osteoarthritis, ACL/MCL injuries, meniscal tears, and more, aiming to restore functionality and improve your daily life quality.
                    </li>
                </ul>
                <p>Our comprehensive care for these areas is designed to provide relief, promote natural healing, and improve functionality across various conditions, employing a mix of specialized techniques tailored to each patient's needs.</p>
            </div>
        )
    },
    {
        q: 'What types of services does SEVA Health and Wellness provide?',
        a: (
            <div>
                <p className="mb-4">At SEVA Health and Wellness in the bustling heart of New York City, we are dedicated to offering a comprehensive range of services that focus on your well-being. Our team of dedicated professionals comprises doctors, Physical Therapists, physical Therapists, Acupuncturists, and Massage Therapists, all working together to provide you with the highest quality care tailored to your unique needs. We understand that our clients come from all walks of life, and their health concerns are equally diverse. To address this, we've designed a variety of services and therapies that can help you achieve your health and wellness goals.</p>
                <ul className="list-disc pl-6 space-y-3 mb-4">

                    <li>
                        <span className="font-bold">Physical Therapy:</span>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li><span className="font-bold">Services:</span> Therapeutic exercises, manual therapies (such as Myofascial release and Graston Technique), electrical stimulation, therapeutic ultrasound, mechanical traction decompression, gait training, running gait analysis.</li>
                            <li><span className="font-bold">Therapeutic Benefits:</span> Invaluable for recovering from injuries, enhancing muscle strength, improving mobility, and managing pain. It can also accelerate healing and diagnose nerve-related problems.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">Massage Therapy:</span>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li><span className="font-bold">Services:</span> Our licensed Massage Therapists offer a range of modalities, including Swedish, deep tissue, and sports massage, tailored to your specific needs.</li>
                            <li><span className="font-bold">Therapeutic Benefits:</span> Provides relaxation and relief from muscle tension, stress, and pain, promoting physical and mental well-being.</li>
                        </ul>
                    </li>
                </ul>
                <p className="mb-4">At SEVA Health and Wellness, our collective mission is to be your trusted partner on your journey to a healthier, pain-free life. Our dedicated and experienced team is committed to offering you a diverse array of services and therapies to address various musculoskeletal concerns and help you achieve your health and wellness goals. We invite you to experience the transformative power of our services and look forward to helping you achieve the best version of yourself.</p>
            </div>
        )
    },
];

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <div className="bg-white min-h-screen ">
            {/* Header */}
            <div className="py-20 text-center relative">
                <h1 className="text-5xl md:text-6xl font-light text-gray-700 mb-2 z-10 relative">FAQs</h1>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <svg width="400" height="120" viewBox="0 0 400 120" fill="none" className="mx-auto opacity-10">
                        <path d="M200 10c50 0 90 40 90 90H110c0-50 40-90 90-90z" stroke="#1e293b" strokeWidth="2" />
                    </svg>
                </div>
            </div>
            {/* General Section */}
            <div className="flex flex-col py-10 justify-center items-center w-full h-full bg-orange-50">
                <h2 className="text-4xl pb-5 text-orange-700 mb-6 text-center">General</h2>
                <div className="w-full max-w-5xl rounded-2xl border border-blue-200 p-10">
                    <div className="divide-y divide-blue-100">
                        {faqs.map((item, i) => (
                            <div key={item.q} className="py-2">
                                <button
                                    className="w-full flex items-center justify-between py-4 px-4 hover:bg-blue-50 rounded-lg transition text-left focus:outline-none"
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                >
                                    <span className="text-blue-900 text-xl ">{item.q}</span>
                                    {open === i ? (
                                        <FiMinus className="text-blue-400 w-6 h-6" />
                                    ) : (
                                        <FiPlus className="text-blue-400 w-6 h-6" />
                                    )}
                                </button>
                                {open === i && (
                                    <div className="pl-4 pr-8 pb-4 text-gray-600 text-base animate-fade-in">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <button className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold z-50 transition-all">
                Book Now
            </button> */}
        </div>
    );
};

export default FAQ;
