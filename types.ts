export enum ServiceCategory {
  TRANSPORTATION = 'Transportation',
  LOGISTICS = 'Logistics',
  SHIPPING = 'Shipping',
  PROCUREMENT = 'Procurement',
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Mapping to Lucide icon
  capabilities: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingFormState {
  // Common Fields
  name: string;
  company?: string;
  email: string;
  phone: string;
  serviceType: string;
  notes: string;

  // Service Specific: Transportation
  pickupLocation?: string;
  dropoffLocation?: string;
  appointmentTime?: string;
  mobilityNeeds?: string; // e.g., Wheelchair, Ambulatory
  isRoundTrip?: boolean;

  // Service Specific: Logistics/Shipping
  cargoDescription?: string;
  weightEstimate?: string;
  originAddress?: string;
  destinationAddress?: string;
  freightMode?: string; // Air, Ocean, Ground

  // Service Specific: Procurement
  productCategory?: string;
  quantity?: string;
  targetBudget?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}