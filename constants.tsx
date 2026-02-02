import { ServiceCategory, ServiceDetail, Testimonial, FAQItem } from './types';
import React from 'react';

export const PHONE_NUMBER = "+1 (800) 555-0199";

export const SERVICES: ServiceDetail[] = [
  {
    id: 'transport-nemt',
    title: 'Medical Transportation (NEMT)',
    category: ServiceCategory.TRANSPORTATION,
    shortDescription: 'HIPAA-compliant non-emergency medical transport and critical courier services.',
    fullDescription: 'Our NEMT division operates with clinical precision, prioritizing patient safety, punctuality, and dignity.',
    extendedDescription: [
      "Global Linkforce Inc. sets the standard for Non-Emergency Medical Transportation (NEMT). We understand that medical transport is not just about moving people; it is about ensuring continuity of care. Our fleet is equipped to handle diverse mobility needs, including ambulatory, wheelchair, and stretcher transport, ensuring that every patient arrives at their appointment safely and comfortably.",
      "Our drivers are more than just chauffeurs; they are certified professionals trained in PASS (Passenger Assistance Safety and Sensitivity), CPR/First Aid, and strict HIPAA compliance protocols. We utilize advanced routing software to guarantee on-time arrivals for dialysis treatments, chemotherapy sessions, post-operative discharges, and routine check-ups.",
      "Beyond patient transport, our Medical Courier service provides a secure chain of custody for sensitive medical items. From biological specimens and pharmaceuticals to confidential medical records, we ensure time-critical delivery with real-time tracking and temperature-controlled options where necessary."
    ],
    iconName: 'Activity',
    capabilities: ['Wheelchair & Stretcher Fleets', 'Certified Medical Couriers', 'Real-Time GPS Tracking', 'Door-to-Door Assistance', 'Hospital Discharge Coordination']
  },
  {
    id: 'logistics-local',
    title: 'Advanced Logistics',
    category: ServiceCategory.LOGISTICS,
    shortDescription: 'Precision local logistics and last-mile delivery optimization.',
    fullDescription: 'We engineer local supply chains for speed and reliability, optimizing the last mile for businesses.',
    extendedDescription: [
      "In the fast-paced urban environment, the 'last mile' is often the most critical and expensive part of the supply chain. Global Linkforce's Advanced Logistics division leverages AI-driven route optimization to deliver unmatched speed and efficiency for local deliveries. We serve legal firms, medical facilities, automotive parts distributors, and e-commerce retailers who demand same-day precision.",
      "Our infrastructure allows for scheduled routed deliveries—perfect for inter-office mail, daily lab pickups, or retail restocking—as well as on-demand 'hot shot' services for urgent needs. By integrating directly with your inventory systems via API, we provide full visibility into your local supply chain.",
      "We also offer warehousing and cross-docking solutions for short-term storage and sorting, allowing businesses to reduce their overhead while maintaining rapid access to their inventory. Our drivers are vetted, uniformed, and professional, representing your brand with excellence at every drop-off."
    ],
    iconName: 'Truck',
    capabilities: ['AI-Driven Route Optimization', 'Same-Day & Rush Courier', 'Scheduled Distribution Routes', 'Asset Tracking & chain of custody', 'White Glove Delivery']
  },
  {
    id: 'shipping-freight',
    title: 'Global Freight & Shipping',
    category: ServiceCategory.SHIPPING,
    shortDescription: 'Scalable domestic and international freight solutions via Air, Ocean, and Ground.',
    fullDescription: 'Navigating global trade complexities with ease, handling everything from customs to final delivery.',
    extendedDescription: [
      "Global Linkforce connects your business to the world. Our Global Freight & Shipping division provides comprehensive freight forwarding services, managing the complexities of international trade so you don't have to. Whether you are shipping a single pallet or full container loads (FCL), we have the carrier relationships to secure the best rates and transit times.",
      "For time-sensitive shipments, our Air Freight solutions offer expedited global reach. For larger, cost-conscious volumes, our Ocean Freight services provide reliable connectivity to major ports worldwide. Domestically, our Ground Freight network covers Less-Than-Truckload (LTL) and Full-Truckload (FTL) needs across North America.",
      "We handle the entire administrative burden, including customs brokerage, import/export documentation, and cargo insurance. Our proactive tracking systems notify you of milestones and exceptions, giving you the control to manage your supply chain proactively rather than reactively."
    ],
    iconName: 'Globe',
    capabilities: ['International Air & Ocean Freight', 'Domestic FTL & LTL Trucking', 'Customs Brokerage & Compliance', 'Cargo Insurance & Risk Management', 'Intermodal Solutions']
  },
  {
    id: 'procurement-sourcing',
    title: 'Strategic Procurement',
    category: ServiceCategory.PROCUREMENT,
    shortDescription: 'End-to-end product sourcing, vendor negotiation, and acquisition management.',
    fullDescription: 'Transforming procurement from a cost center to a strategic advantage through global sourcing networks.',
    extendedDescription: [
      "Effective procurement is about more than just buying; it is about strategic sourcing that drives value, reduces risk, and ensures quality. Global Linkforce's Strategic Procurement division acts as an extension of your purchasing department. We leverage a vast network of vetted global suppliers to source raw materials, finished goods, and operational supplies at competitive prices.",
      "Our team manages the entire procure-to-pay lifecycle. We conduct rigorous vendor audits, negotiate favorable contracts, and oversee quality control inspections before goods even leave the factory. This end-to-end management eliminates the headaches of dealing with multiple vendors and language barriers.",
      "Whether you need to procure medical equipment, construction materials, or technology hardware, we provide transparent cost structures and reliable delivery timelines. We also assist with demand planning and inventory management strategies to prevent stockouts and overstock situations."
    ],
    iconName: 'Briefcase',
    capabilities: ['Global Supplier Sourcing', 'Vendor Negotiation & Management', 'Bulk Acquisition Strategy', 'Supply Chain Audits', 'Quality Control Inspections']
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