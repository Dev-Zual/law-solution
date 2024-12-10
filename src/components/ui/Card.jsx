export default function Card({ ...cardData }) {
  const { img, title, description, icon } = cardData.cardData;
  return (
    <div className="text-center px-5 py-7  border space-y-4">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <h4 className="text-3xl font-bold text-[#414040]">{title}</h4>
      <p className="text-base text-[#707070] leading-[1.625rem]">
        {description}
      </p>
      {icon && (
        <div className="flex justify-center">
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
}
