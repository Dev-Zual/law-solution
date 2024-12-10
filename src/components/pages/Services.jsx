import Card from "../ui/Card";

export default function Services() {
  const cardData = [
    {
      img: "./images/business.png",
      title: "Business Law",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      icon: "./images/Frame.png",
    },
    {
      img: "./images/criminal.png",
      title: "Criminal Law",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      icon: "./images/Frame.png",
    },
    {
      img: "./images/child.png",
      title: "Child Support",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      icon: "./images/Frame.png",
    },
    {
      img: "./images/education.png",
      title: "Education Law",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      icon: "./images/Frame.png",
    },
    {
      img: "./images/divorce.png",
      title: "Divorce Law",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      icon: "./images/Frame.png",
    },
    {
      img: "./images/tax.png",
      title: "Tax Law",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      icon: "./images/Frame.png",
    },
  ];
  return (
    <div className="mb-24">
      <div className="flex justify-center mb-7">
        <div className="text-center space-y-4 w-3/5">
          <h1 className="text-4xl font-bold text-[#414040]">
            The Legal Practice Area
          </h1>
          <p className="text-base text-[#707070] leading-[1.625rem]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </div>
      {/* card area */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cardData.map((cardItem, index) => (
          <Card key={index} cardData={cardItem} />
        ))}
      </div>
    </div>
  );
}
