import HeroSection from "./hero-section";
import fetchPageDataHero from "@/hooks/fetchPageDataHero";

export default async function HeroWrapper() {
    const data = await fetchPageDataHero();

    return <HeroSection heroData={data}/>;
}