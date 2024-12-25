import { Navigation } from "./_components/Navigation";
import { Footer } from "./_components/Footer";
import { Homescreen } from "./_components/HomeScreen";
import { PhoneTop } from "./_components/PhoneTop";
import { Scroll } from "lucide-react";

const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
    });

  return (
    <div className="w-100% h-screen">
      {/* <PhoneTop/> */}
      <Navigation />
      <Scroll />
      <Homescreen />
      <Footer />
    </div>
  );
}
