import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

const pictureHeight = 1080;
const pictureWidth = 800;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sevegin</title>
        <meta name="Sevegin" content="E-Commerce website by Vlad Somai" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className="d-flex flex-column justify-content-around">
        <div className="d-flex flex-column-reverse flex-md-row align-items-center div100">
          <Image
            src="/Men_clothes.webp"
            height={pictureHeight}
            width={pictureWidth}
            alt="card"
            className="img-fluid rounded-pill"
            priority
          ></Image>
          <div className="d-flex justify-content-center w-100 align-content-center">
            <div className="d-flex flex-column align-items-center">
              <p className="display-1"> be distinct. </p> 
              <p className="display-1"> be yourself. </p>
              <p className="fs-2 mt-5"> We are now available in Timisoara,</p>
              <p className="fs-2">
                where you can enjoy the full experience of Sevegin.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row-reverse align-items-center div100">
          <Image
            src="/Women_clothes1.webp"
            height={pictureHeight}
            width={pictureWidth}
            alt="card"
            className="img-fluid rounded-pill"
            priority
          ></Image>
          <div className="d-flex justify-content-center w-100 align-content-center">
            <div className="d-flex flex-column align-items-center">
              <p className="display-1"> quality is our mission. </p>
              <p className="fs-2 mt-5"> </p>
              <p className="fs-2">Our dedicated department for quality <br/> will ensure the best customer experience. </p>
            </div>
          </div>
        </div>
      <div className="d-flex flex-column-reverse flex-md-row align-items-center div100">
          <Image
            src="/Women_clothes.webp"
            height={pictureHeight}
            width={pictureWidth}
            alt="card"
            className="img-fluid rounded-pill"
            priority
          ></Image>
         <div className="d-flex justify-content-center w-100 align-content-center">
            <div className="d-flex flex-column align-items-center ms-5">
              <p className="display-1"> explore. </p>
              <p className="fs-2 mt-5"> </p>
              <p className="fs-2">visit our shop page to discover<br/> a multitude of products</p>
            </div>
          </div>
        </div>
      </div>

      <footer className=""></footer>
    </>
  );
};

export default Home;
