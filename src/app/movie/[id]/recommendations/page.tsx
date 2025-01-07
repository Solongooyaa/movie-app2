import { Footer } from "@/app/_components/Footer";
import { Navigation } from "@/app/_components/Navigation";
import { Section } from "@/app/_components/Section";

export default function RecomPage({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <div>
      <Navigation />
      <Section
        title="More like this"
        endpoint={`movie/${params.id}/recommendations`}
      />
      <Footer />
    </div>
  );
}
