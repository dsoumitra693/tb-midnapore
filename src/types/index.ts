export interface ITestimonial {
    _id: string;
    name: string;
    location: string;
    avatarUrl: string;
    text: string;
}

export interface Trip {
    _id: string;
    image: { asset: { url: string }; alt: string };
    title: string;
    startDate: string;
    endDate: string;
    priceTiers: PriceTier[];
    durationDays: number;
    durationNights: number;
    actualCost: number;
    discountedCost: number;
    meals: string[];
    features: string[];
    inclusions: string[];
    exclusions: string[];
    description: string;
    itinerary: { day: string; details: string[] }[];
}

export interface PriceTier {
    peopleCount: number;
    label: string;
    originalPrice?: number;
    currentPrice: number;
    perPersonPrice: number;
}

export interface GalleryMedia {
    _id: string;
    source: string;
    type: "imageItem" | "videoItem";
    alt: string;
    caption: string;
}

export interface Notice {
    id: string;
    type: 'info' | 'warning' | 'success' | 'announcement';
    title: string;
    message: string;
    date: string;
    actionText?: string;
    actionLink?: string;
    dismissible?: boolean;
}