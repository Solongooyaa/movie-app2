import { Navigation } from "./_components/Navigation";
import { Footer } from "./_components/Footer";
import { PhoneTop } from "./_components/PhoneTop";
import { title } from "process";
import { Section } from "./_components/Section";

const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

export default async function Home() {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top Rated" endpoint="top_rated" />
      <Footer />
    </div>
  );
}
