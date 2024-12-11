import CustomCard from "../ui/CustomCard";

export default function ContactUs() {
  const contactData = [
    {
      img: "./images/location.png",
      title: "Address",
      address: "A108 Adam Street, New York NY 535022",
    },
    {
      img: "./images/call.png",
      title: "Cll Us",
      phone: ["+88 01750 00 00 00", "+88 01750 00 00 02"],
    },
    {
      img: "./images/email.png",
      title: "Email Us",
      email: ["info@gmail.com", "info@gmail22.com"],
    },
    {
      img: "./images/time.png",
      title: "Working Hours",
      working: ["Mon-Fri: 9AM to 5PM", "Sunday: 9AM to 1 PM"],
    },
  ];
  return (
    <div className="mb-24">
      <div className="flex justify-center mb-7">
        <div className="text-center space-y-4 w-3/5">
          <h1 className="text-4xl font-bold text-[#414040]">Contact With Us</h1>
          <p className="text-base text-[#707070] leading-[1.625rem]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </div>
      {/* contact bottom */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full grid grid-cols-2">
          {contactData.map((contactItem, index) => (
            <CustomCard key={index} cardData={contactItem} />
          ))}
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}