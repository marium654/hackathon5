
import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import StarterMenu from "@/components/Menu/StartMenu";
import MainCours from "@/components/MainCours/MainCourse";
import Experience from "@/components/Experience/Experience";
import PartnersAndClients from "@/components/PartnerClient/PartnerClient";
import Hero from "@/components/HeroSection/Hero";

export default function Menu() {
  return (
<div>
  <Hero />
  <StarterMenu />
  <MainCours />
  <Experience />
  <Dessert />
  <Drink />
  <PartnersAndClients />
</div>
  );
}