import { Navigation } from "./_components/Navigation";
import { Footer } from "./_components/Footer";
import { PhoneTop } from "./_components/PhoneTop";
import { title } from "process";
import { Section } from "./_components/Section";

const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <Section title="Popular" 
      endpoint="popular?language=en-US&page=1" 
      moreLink={`popular?language=en-US&page=1"`}/>
      <Section title="Upcoming" 
      endpoint="upcoming?language=en-US&page=1" 
      moreLink={`upcoming?language=en-US&page=1`}/>
      <Section title="Top Rated" 
      endpoint="top_rated?language=en-US&page=1" 
      moreLink={`top_rated?language=en-US&page=1`}/>
      <Footer />
    </div>
  );
}
