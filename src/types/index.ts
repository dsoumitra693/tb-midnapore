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
    originalPrice: number;
    currentPrice: number;
    durationDays: number;
    durationNights: number;
    actualCost: number;
    discountedCost: number;
    meals: string[];
    features: string[];
    inclusions: string[];
    description: string;
    itinerary: { day: string; details: string[] }[];
}