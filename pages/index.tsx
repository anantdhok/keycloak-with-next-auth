import { useEffect } from "react";

import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";

const Home: NextPage = () => {
  const { data: session } = useSession();
  // const loading = status === "loading";

  useEffect(() => {
    if (session) Router.push("/profile");
  }, [session]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-2 text-3xl font-bold">Welcome to keyclaok 👋</h1>
        <p className="mb-3 text-lg">Hi there, click on the button below to login.</p>
        <button
          className="my-2 w-[200px] rounded-full bg-blue-500 pt-1 pb-2 text-white"
          onClick={e => {
            e.preventDefault();
            signIn("keycloak");
          }}
        >
          Continue to sign-in
        </button>

        <p className="text-gray my-2 text-sm">Or, continue with</p>

        <span className="flex flex-col">
          <button
            className="my-2 w-[200px] rounded-full bg-red-500 pt-1 pb-2 text-white"
            onClick={e => {
              e.preventDefault();
              signIn("keycloak", {}, { kc_idp_hint: "google" });
            }}
          >
            Google account
          </button>
          <button
            className="my-2 w-[200px] rounded-full bg-red-500 pt-1 pb-2 text-white"
            onClick={e => {
              e.preventDefault();
              signIn("keycloak", {}, { kc_idp_hint: "facebook" });
            }}
          >
            Facebook account
          </button>
        </span>
      </main>
    </div>
  );
};

export default Home;
