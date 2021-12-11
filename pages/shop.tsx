import type { NextPage } from "next";
import Image from "next/image";
import Card from "../components/card";
import Head from "next/head";

const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="Sevegin" content="E-Commerce website by Vlad Somai" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className=" d-flex flex-column flex-md-row justify-content-between mb-5 padding-t100">
        <div className="d-flex flex-column text-center">
          <p className="display-1">Extra sale</p>
          <p className="fs-3">Get -20% off for all products</p>
          <Image
            src="/discount.svg"
            height={480}
            width={1080}
            alt="auth"
            className="img-fluid"
            priority
          ></Image>
        </div>
        <div className="mt-3">
          <Card
            displayText={"Everything you need for your home!"}
            displayPrice={"Price starts at 19$"}
            picturePath={"/home-pic.webp"}
            pictureHeight={500}
            pictureWidth={950}
          ></Card>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg mt-3">
          <Card
            displayText={"Women clothing"}
            displayPrice={"Price starts at 19$"}
            picturePath={"/women-clothing.webp"}
            pictureHeight={500}
            pictureWidth={400}
          ></Card>
        </div>
        <div className="col-lg mt-3">
          <Card
            displayText={"Men clothing"}
            displayPrice={"Price starts at 19$"}
            picturePath={"/men-clothing.webp"}
            pictureHeight={500}
            pictureWidth={400}
          ></Card>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm text-center mt-3">
          <Card
            displayText={"Women shoes"}
            displayPrice={"Price starts at 19$"}
            picturePath={"/women-shoes.webp"}
            pictureHeight={200}
            pictureWidth={150}
          ></Card>
        </div>
        <div className="col-sm mt-3">
          <Card
            displayText={"Men shoes"}
            displayPrice={"Price starts at 19$"}
            picturePath={"/men-shoes.webp"}
            pictureHeight={500}
            pictureWidth={950}
          ></Card>
        </div>
        <div className="col-sm mt-3">
          <Card
            displayText={"Running shoes"}
            displayPrice={"Price starts at 19$"}
            picturePath={"/running-shoes.webp"}
            pictureHeight={500}
            pictureWidth={950}
          ></Card>
        </div>
      </div>
    </>
  );
};

export default Shop;
