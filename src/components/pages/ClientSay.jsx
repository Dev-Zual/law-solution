import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomCarousel from "../ui/CustomCarousel";
export default function ClientSay() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const carouselData = [
    {
      sliderImg: "./images/slider-1.jpg",
      userImg: "./images/user-1.png",
      name: "John Dow",
      title: "UIX Designer",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
    },
    {
      sliderImg: "./images/slider-2.jpg",
      userImg: "./images/user-2.png",
      name: "Awlad Hossain",
      title: "Web Developer",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
    },
    {
      sliderImg: "./images/slider-3.jpg",
      userImg: "./images/user-3.png",
      name: "William Bell",
      title: "Software Engineer",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
    },
    {
      sliderImg: "./images/slider-3.jpg",
      userImg: "./images/user-3.png",
      name: "William Bell",
      title: "Software Engineer",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
    },
  ];
  return (
    <div className="mb-24">
      <div className="flex justify-center mb-7">
        <div className="text-center space-y-4 w-3/5">
          <h1 className="text-4xl font-bold text-[#414040]">
            What Our Client Say
          </h1>
          <p className="text-base text-[#707070] leading-[1.625rem]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </div>
      {/* carousel area */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[500px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselData.map((carouselItem, index) => (
            <CustomCarousel key={index} carouselItem={carouselItem} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute  left-4 z-10 text-white bg-black/50 p-2 rounded-full" />
        <CarouselNext className="absolute right-4 z-10 text-white bg-black/50 p-2 rounded-full" />
      </Carousel>
    </div>
  );
}
