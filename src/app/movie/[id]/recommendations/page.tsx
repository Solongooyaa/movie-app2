import { Section } from "@/app/_components/Section";


export default function Page ({params}: {params: {id: string}}){
    return (
            <Section title="More like this" 
            // moreLink={`movie/${params.id}/recommendations`}
            endpoint={`movie/${params.id}/recommendations`}/>
    );
}