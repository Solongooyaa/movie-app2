import { Section } from "@/app/_components/Section";

export default function RecomPage({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <div>
      <Section
        title="More like"
        endpoint={`movie/${params.id}/recommendations`}
      />
    </div>
  );
}
