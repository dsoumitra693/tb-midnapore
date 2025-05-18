import fetchPageDetailsContactUs from "@/hooks/fetchPageDetailsContactUs";
import ContactSection from "./contact-section";

export default async function ContactWrapper() {
    const data = await fetchPageDetailsContactUs();
    if (!data) return null;
    return <ContactSection contactData={data.contactsection} />;
}
