import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <div className="container mx-auto px-9">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-9">
        <div className="space-y-5">
          <img src="./images/logo.png" alt="" />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl font-bold">Useful Link</h3>
          <ul className="text[#CFCFCF] font-normal text-base space-y-4">
            <li>
              <a href="#"></a>Home
            </li>
            <li>
              <a href="#"></a>About us
            </li>
            <li>
              <a href="#"></a>Cases
            </li>
            <li>
              <a href="#"></a>Blog
            </li>
            <li>
              <a href="#"></a>Contact Us
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl font-bold">Useful Link</h3>
          <div className="text[#CFCFCF] font-normal text-base space-y-5">
            <div>
              <p>
                555 4th 5t NW, Washington <br />
                DC 20530, United States
              </p>
            </div>
            <div>
              <p>
                +88 01750 000 000 <br />
                +88 01750 000 000
              </p>
            </div>
            <div>
              <p>
                info@gmail.com <br /> info@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl font-bold">Useful Link</h3>
          <div className="text[#CFCFCF] font-normal text-base space-y-5">
            <p>
              Subscribe for our latest & Articles. We Won’t Give You Spam Mails
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button className="ml-1" type="submit">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
