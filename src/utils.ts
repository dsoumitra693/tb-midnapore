import { Trip } from "./types"

export function formatDateToLongString(date: string | Date): string {
  const d = new Date(date)

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d)
}


export const constructTripShareMsg = (trip: Trip) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
  };

  const dateRange = `${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}`;

  const itineraryText = trip.itinerary
    .map(
      (item, index) =>
        `*Day ${index + 1}* \n ${item.details.join(", ")}`
    )
    .join("\n\n");

  const mealsText = trip.meals.length > 0 ? `♦️Meal: ${trip.meals.join(", ")}` : "";

  const inclusionsText =
    trip.inclusions.length > 0 ? `\n\nIncluding:- ${trip.inclusions.join(", ")}.` : "";

  const budgetText =
    trip.discountedCost
      ? `\n\n*Budget:* ₹${trip.discountedCost}/person`
      : "";

  return `*${trip.title} (${trip.durationNights} Nights ${trip.durationDays} Days)*
Date: ${dateRange}

👉 *Howrah to Sealdah Full Package*

${itineraryText}

${mealsText}${inclusionsText}${budgetText}

👉 Contact: 9564965458
👉 Official Website: https://travelbuddiesmidnapore.in/home/trips/${trip._id}
👉 facebook Page: https://www.facebook.com/travelbuddiesmidnapore`;

};
