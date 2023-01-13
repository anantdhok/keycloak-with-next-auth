import { useEffect } from "react";

import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
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
          className="my-2 rounded-full bg-blue-500 px-4 pt-1 pb-2 text-white"
          onClick={e => {
            e.preventDefault();
            signIn("keycloak");
          }}
        >
          Continue to sign-in
        </button>

        <Link className="my-2 rounded-full bg-red-500 px-4 pt-1 pb-2 text-white" href="">
          Use google account
        </Link>
      </main>
    </div>
  );
};

export default Home;
