import React from "react";

export default function CustomCard({ ...cardData }) {
  const cardItem = cardData.cardData;
  const { img, title, description, icon, address, working } = cardItem;
  // console.log(cardItem.email);
  return (
    <div className="text-center px-5 py-7  space-y-4">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <h4 className="text-3xl font-bold text-[#414040]">{title}</h4>
      {/* conditional rendering description, address, working */}
      {
        <p className="text-base text-[#707070] leading-[1.625rem]">
          {description
            ? description
            : address
            ? address.split(",").map((part, index) => (
                <React.Fragment key={index}>
                  {part.trim()} <br />
                </React.Fragment>
              ))
            : working?.length
            ? working.map((item, index) => (
                <React.Fragment key={index}>
                  {item} <br />
                </React.Fragment>
              ))
            : ""}
        </p>
      }
      {/* rendering phone or email */}
      {cardItem?.phone?.length ? (
        <p className="text-base text-[#707070] leading-[1.625rem]">
          {cardItem.phone.map((item, index) => (
            <React.Fragment key={index}>
              {item} <br />
            </React.Fragment>
          ))}
        </p>
      ) : cardItem?.email?.length ? (
        <p className="text-base text-[#707070] leading-[1.625rem]">
          {cardItem.email.map((item, index) => (
            <React.Fragment key={index}>
              {item} <br />{" "}
            </React.Fragment>
          ))}
        </p>
      ) : (
        <div> </div>
      )}
      {/* rendering if icon   */}
      {icon && (
        <div className="flex justify-center">
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
}
