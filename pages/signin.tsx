import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

const Signin: NextPage = () => {
  const [pictureHeight, setPictureHeight] = useState(0);
  const [pictureWidth, setPictureWidth] = useState(0);

  useEffect(() => {
    setPictureHeight(window.innerHeight);
    setPictureWidth(window.innerWidth / 3);
  }, []);

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-around div100">
          <Image
            src="/undraw_authentication_fsn5.svg"
            height={pictureHeight}
            width={pictureWidth}
            alt="auth"
            className="img-fluid"
            priority
          ></Image>
          <div className="d-flex align-items-center justify-content-center">
            <form
              action={"/api/auth/callback/credentials"}
              className="d-flex flex-column align-items-center mt-3"
              method="post"
            >
              <input
                name="email"
                type="email"
                className="form-control fs-1 mb-4"
                placeholder="Email"
                aria-label="Email"
                required
              ></input>
              <input
                name="password"
                type="password"
                className="form-control fs-1 mb-4"
                placeholder="Password"
                aria-label="Password"
                required
              ></input>
              <button
                type="submit"
                className="btn btn-primary fw-bold fs-2 slowScale"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="display-4">
            Or you can sign in with your favourite provider!
          </p>
          <button className="btn btn-danger fs-2 slowScale">
            Sign in with Google
          </button>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 div100">
        <Image
          src="/register.svg"
          height={pictureHeight}
          width={pictureWidth}
          alt="auth"
          className="img-fluid"
          priority
        ></Image>

        <p className="display-4 text-center"> Dont have an account yet?</p>
        <button className="btn btn-success fs-2 slowScale">
          Register here!
        </button>
      </div>
    </>
  );
};

export default Signin;
