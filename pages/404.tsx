import type { NextPage } from "next";
import Image from "next/image";

const Sevegin404: NextPage = () => {
  return (
    <>
      <div className="container div100 d-flex flex-column justify-content-center">
        <Image
          src="/PageNotFound.svg"
          alt="PageNotFound Image"
          width={720}
          height={360}
          priority
          className="flex-grow-1"
        />
        <p className="display-4 text-center">Page not found!</p>
      </div>
    </>
  );
};
export default Sevegin404;
