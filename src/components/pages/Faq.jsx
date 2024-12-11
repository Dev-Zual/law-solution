import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  return (
    <div className="mb-24">
      <div className="flex justify-center mb-7">
        <div className="text-center space-y-4 w-3/5">
          <h1 className="text-4xl font-bold text-[#414040]">
            Frequently Asked Any Questions
          </h1>
          <p className="text-base text-[#707070] leading-[1.625rem]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem
              className="bg-gray-200/80 rounded-md p-4"
              value="item-1"
            >
              <AccordionTrigger className="text-2xl text-[#414040]">
                1. Are application fee waivers available?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#707070] leading-[1.625rem]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-gray-200/80 rounded-md p-4"
              value="item-2"
            >
              <AccordionTrigger className="text-2xl text-[#414040]">
                2. Are application fee waivers available?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#707070] leading-[1.625rem]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-gray-200/80 rounded-md p-4"
              value="item-3"
            >
              <AccordionTrigger className="text-2xl text-[#414040]">
                3. Are application fee waivers available?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#707070] leading-[1.625rem]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-gray-200/80 rounded-md p-4"
              value="item-4"
            >
              <AccordionTrigger className="text-2xl text-[#414040]">
                4. Are application fee waivers available?
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#707070] leading-[1.625rem]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full">
          <img src="./images/faq.png" alt="" />
        </div>
      </div>
    </div>
  );
}
