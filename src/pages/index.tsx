import Button from "@/components/common/Button";
import CardSection from "@/components/home/CardSection";
import Connect from "@/components/home/Connect";

import Partners from "@/components/common/Partners";
import Image from "next/image";
import HeroCollage from "../assets/home/ypit-hero-collage.png";
import Carousel from "../components/home/TestimonialCarousel";
export default function Home() {
  return (
    <>
      <h1 className="text-3 md:text-2 pt-3 md:pt-1">
        Creating a Space for Young People to{" "}
        <span className="bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text">
          Connect and&nbsp;Grow
        </span>{" "}
      </h1>
      <div className="flex flex-col pt-8 gap-8 text-center md:flex-row justify-center items-center">
        <p className="md:max-w-[70%] md:text-4 md:text-start">
          YPIT is a community of young professionals in Nigeria&apos;s tech
          ecosystem, brought together with a mission to make impact in Nigeria
          and Africa using technology
        </p>
        <a
          href="https://chat.whatsapp.com/JGIXg7zr6vx48YJAFv8mF2"
          target="_blank"
        >
          <Button text="Join us now" />
        </a>
      </div>
      <Image src={HeroCollage} alt="Hero Image" className="pt-4" />
      <Connect />
      <CardSection />
      <Carousel />
      <Partners />
    </>
  );
}
