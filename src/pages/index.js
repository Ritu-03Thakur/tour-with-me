import HeroSection from "@/components/HeroSection";
  import { section , card } from "./Data";
import Place from "@/components/Place";

export default function Home() {
  return (
   <> 
   <div className="flex flex-col justify-center items-center">

  <HeroSection section={section}/>
  <Place place = {card}/>
   </div>

   </>
  )
}
