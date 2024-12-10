import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Banner() {
  return (
    <div className="bg-[url('./images/banner.png')] h-[550px] rounded-lg mt-12  mb-28 bg-no-repeat bg-cover object-cover">
      <div className="flex rounded-lg justify-center items-center h-full bg-gradient-to-t from-black from-[-25%] to-transparent">
        <div className="text-white text-center w-3/5 space-y-6">
          <h1 className="lg:text-7xl text-3xl lg:leading-[85px] font-bold">
            We Provide Effective Legal Solutions
          </h1>
          <p className="leading-[1.625rem] text-slate-300">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div className="w-full justify-center flex">
            <div className="flex w-full justify-center max-w-sm items-center space-x-2">
              <Input
                className="bg-white text-slate-800"
                type="text"
                placeholder="Search your services"
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
