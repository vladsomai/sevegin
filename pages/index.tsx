import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ConstructionPic from "../assets/pictures/undraw_work_in_progress_uhmv.svg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sevegin</title>
        <meta name="Sevegin" content="E-Commerce website by Vlad Somai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.centerDiv}>
        <div className="text-center">
          <Image
            src={ConstructionPic}
            alt="PageNotFound Image"
            width={720}
            height={360}
          />
          <hr></hr>
          <p className="display-5">
            We are currently in development, please visit us later.
          </p>
        </div>
      </main>
      <footer className=""></footer>
    </>
  );
};

export default Home;
