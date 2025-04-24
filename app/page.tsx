import { Cta11 } from "@/components/cta-home";
import { Footer2 } from "@/components/footer-home";
import { Hero7 } from "@/components/hero-home";
import { Navbar1 } from "@/components/navbar-home";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Navbar1 />
    <Hero7 />
    <Cta11 heading={"Hello World!"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
   </>
  );
}
