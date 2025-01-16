import Hero from "@/components/Hero";
import BestAir from "@/components/BestAir";
import Feature from "@/components/Feature";
import { DontMiss } from "@/components/Don'tMiss";
import Essential from "@/components/Essential";
import Gear_up from "@/components/Gear_up";

const page = () => {
  return (
    <div>
      <Hero />
      <BestAir />
      <Feature />
      <Gear_up />
      <DontMiss />
      <Essential />
    </div>
  );
};

export default page;
