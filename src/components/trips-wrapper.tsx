import { fetchTrips } from "@/hooks/getTrips";
import TripSection from "./trip-section";

export default async function TripsWrapper (){
    const featuredTrips = await fetchTrips({
        limit:3,
        offset:0
    })
    console.log(featuredTrips)

    return <TripSection featuredTrips={featuredTrips}/>
}