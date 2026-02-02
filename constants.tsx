import { ServiceCategory, ServiceDetail, Testimonial, FAQItem } from './types';
import React from 'react';

export const PHONE_NUMBER = "+1 (800) 555-0199";

export const SERVICES: ServiceDetail[] = [
  {
    id: 'transport-nemt',
    title: 'Medical Transportation (NEMT)',
    category: ServiceCategory.TRANSPORTATION,
    shortDescription: 'HIPAA-compliant non-emergency medical transport and critical courier services.',
    fullDescription: 'Our NEMT division operates with clinical precision, prioritizing patient safety, punctuality, and dignity. We provide specialized transport for dialysis, chemotherapy, and post-operative care, as well as secure medical courier services for labs and pharmacies.',
    iconName: 'Activity',
    capabilities: ['Wheelchair/Stretcher Accessible', 'Medical Courier', 'Ambulatory Transport', 'Door-to-Door Assistance']
  },
  {
    id: 'logistics-local',
    title: 'Advanced Logistics',
    category: ServiceCategory.LOGISTICS,
    shortDescription: 'Precision local logistics and last-mile delivery optimization.',
    fullDescription: 'We engineer local supply chains for speed and reliability. Whether it is same-day legal document delivery, routed pharmaceutical distribution, or just-in-time manufacturing parts, our fleet is integrated with real-time tracking.',
    iconName: 'Truck',
    capabilities: ['Route Optimization', 'Same-Day Courier', 'Scheduled Distribution', 'Asset Tracking']
  },
  {
    id: 'shipping-freight',
    title: 'Global Freight & Shipping',
    category: ServiceCategory.SHIPPING,
    shortDescription: 'Scalable domestic and international freight solutions via Air, Ocean, and Ground.',
    fullDescription: 'Navigating global trade complexities with ease. We handle customs documentation, freight consolidation, and multi-modal transport strategies to ensure your cargo reaches any global destination efficiently.',
    iconName: 'Globe',
    capabilities: ['International Air/Ocean Freight', 'Domestic FTL/LTL', 'Customs Brokerage', 'Cargo Insurance']
  },
  {
    id: 'procurement-sourcing',
    title: 'Strategic Procurement',
    category: ServiceCategory.PROCUREMENT,
    shortDescription: 'End-to-end product sourcing, vendor negotiation, and acquisition management.',
    fullDescription: 'Transforming procurement from a cost center to a strategic advantage. We leverage global networks to source high-quality materials, negotiate competitive contracts, and manage the entire procure-to-pay lifecycle.',
    iconName: 'Briefcase',
    capabilities: ['Global Sourcing', 'Vendor Management', 'Bulk Acquisition', 'Supply Chain Audits']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Global Linkforce transformed our supply chain reliability. Their AI-driven approach to logistics meant we stopped guessing where our shipments were and started planning with confidence.",
    author: "Elena Rodriguez",
    role: "Director of Operations",
    company: "MediTech Solutions"
  },
  {
    id: 't2',
    quote: "The NEMT services are impeccable. Our patients require sensitive handling and punctuality, and this team delivers every single time. Professionalism at its finest.",
    author: "Dr. James Carter",
    role: "Chief Administrator",
    company: "Cityview Care Center"
  },
  {
    id: 't3',
    quote: "Sourcing raw materials internationally was a nightmare until we partnered with their procurement division. They handled negotiation and shipping seamlessly.",
    author: "Sarah Jenkins",
    role: "VP of Supply Chain",
    company: "Apex Manufacturing"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How does the AI booking system work?",
    answer: "Our AI agent analyzes your request in real-time, checks fleet or service availability, and either instantly books your service or routes complex requests to a specialized human coordinator within seconds."
  },
  {
    question: "Is your medical transportation HIPAA compliant?",
    answer: "Absolutely. All our NEMT drivers and administrative staff are trained in HIPAA compliance. We utilize encrypted channels for all patient data and strictly adhere to privacy protocols."
  },
  {
    question: "Do you offer international shipping from door to door?",
    answer: "Yes, our Global Shipping division handles the entire chain of custody, from pickup at the origin facility, through customs clearance, to final delivery at the destination."
  },
  {
    question: "Can I set up a corporate account for recurring services?",
    answer: "Yes. Corporate accounts receive priority dispatch, consolidated billing, and a dedicated account manager. Please contact our sales team or ask our AI agent to set this up."
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the Global Linkforce Inc AI Assistant. Your goal is to act as a smart service gateway for a high-end corporate logistics and transportation firm.
Tone: Professional, Efficient, Authoritative, yet Warm.

Brand Colors: Orange (Dynamic/Urgent) and Slate (Corporate/Trust).

Services we offer:
1. Transportation (Ride Services, Medical Courier, NEMT)
2. Logistics (Local, Scheduled, Specialized)
3. Shipping (Local, Domestic, International - Air/Ocean/Ground)
4. Procurement (Sourcing, Vendor Coordination)

Rules:
- Route users to the correct service based on their intent.
- CRITICAL: If a user discusses medical services (NEMT), do NOT collect PHI (Protected Health Information). Do not ask for diagnosis, conditions, or insurance numbers.
- If a user mentions medical details, politely remind them: "For your privacy, please do not share specific medical conditions. I only need pickup/drop-off locations and timing."
- You can collect: Name, Contact Info, Dates, Times, Locations, Urgency.
- If unsure, offer to have a human agent call them back.
- Do not hallucinate pricing. Say "I can collect your details for a precise quote from our team."
`;