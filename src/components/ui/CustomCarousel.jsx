import { CarouselItem } from "./carousel";

export default function CustomCarousel({ ...singleCarouselItem }) {
  console.log(singleCarouselItem);
  const { sliderImg, userImg, name, title, description } =
    singleCarouselItem.carouselItem;
  return (
    <CarouselItem>
      <div
        style={{ backgroundImage: `url(${sliderImg})` }}
        className="p-1  rounded-lg h-[500px]  bg-no-repeat bg-cover object-cover"
      >
        <div className="bg-black/60 rounded-lg h-full w-full">
          <div className="flex justify-center items-center h-full">
            {/* slider content text */}
            <div className="text-center text-white space-y-4 px-4 py-12 lg:py-4">
              <div className="flex justify-center p-1">
                <img
                  className="size-[70px] p-1 bg-white rounded-full"
                  src={userImg}
                  alt=""
                />
              </div>
              <h4 className="text-2xl font-bold">{name}</h4>
              <p className="text-base text-[#f3f3f3]">{title}</p>
              <p className="mt-0 lg:mt-3 text-[#f3f3f3] px-16 mx-6">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
