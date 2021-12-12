import Image from "next/image";

export type CardProperties = {
  displayText: string;
  displayPrice: string;
  picturePath: string;
  pictureHeight: number;
  pictureWidth: number;

};

const Card = ({
  displayText,
  displayPrice,
  picturePath,
  pictureHeight,
  pictureWidth,
}: CardProperties) => {
  return (
    <>
      <button className="btn border shadowCard">
        <p className="display-4 text-center">{displayText}</p>
        <Image
          src={picturePath}
          height={pictureHeight}
          width={pictureWidth}
          alt="card"
          className="img-fluid rounded"
          priority
        ></Image>
        <p className="fs-5 text-end">{displayPrice}</p>
      </button>
    </>
  );
};

export default Card;
