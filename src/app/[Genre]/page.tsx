import { Section } from "lucide-react";

export default function Page({ params }) {
  console.log(params.genre);
  return (
    <div>
      <Section title={params.category} endpoint={params.category} />
    </div>
  );
}
