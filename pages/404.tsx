import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const Sevegin404: NextPage = () => {
  const [pictureHeight, setPictureHeight] = useState(0);
  const [pictureWidth, setPictureWidth] = useState(0);

  useEffect(() => {
    setPictureHeight(window.innerHeight);
    setPictureWidth(window.innerWidth / 3);
  }, []);

  return (
    <>
      <div className="container div100 d-flex flex-column justify-content-center">
        <Image
          src="/PageNotFound.svg"
          alt="PageNotFound Image"
          width={pictureWidth}
          height={pictureHeight}
          priority
          className="flex-grow-1"
        />
        <p className="display-4 text-center">Page not found!</p>
      </div>
    </>
  );
};
export default Sevegin404;
