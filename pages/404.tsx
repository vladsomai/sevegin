import type { NextPage } from "next";
import Image from "next/image";
import style404 from "../styles/PageNotFound.module.scss";

const Sevegin404: NextPage = () => {
  return (
    <>
      <div className={style404.centerDiv}>
        <div className="text-center">
          <Image
            src="/PageNotFound.svg"
            alt="PageNotFound Image"
            width={720}
            height={360}
          />
          <br></br>
          <br></br>
          <br></br>
          <p className="display-4">Page not found!</p>
        </div>
      </div>
    </>
  );
};
export default Sevegin404;
