import { useEffect } from "react";

import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";

const Home: NextPage = () => {
  const { data: session } = useSession();
  // const loading = status === "loading";

  useEffect(() => {
    if (!session) Router.push("/");
    console.log(session);
  }, [session]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-2 text-3xl font-bold">Hi, {session?.user?.name?.split(" ")[0]} 👋</h1>
        <p className="mb-5 text-lg">
          Logged in with <b>{session?.user?.email}</b>
        </p>
        <button
          className="rounded-full bg-red-600 px-4 pt-1 pb-2 text-white"
          onClick={e => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign-out
        </button>
      </main>
    </div>
  );
};

export default Home;
