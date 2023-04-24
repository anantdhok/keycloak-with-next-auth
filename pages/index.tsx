import { useEffect } from "react";

import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";

const Home: NextPage = () => {
  const { status, data: session } = useSession();

  useEffect(() => {
    if (session) Router.push("/profile");
  }, [status, session]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-2 text-3xl font-bold">Welcome 👋</h1>
        {status === "unauthenticated" ? (
          <div>
            <p className="mb-3 text-lg">Authentication with keycloak.</p>
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
            <span className="align-items-center flex justify-center">
              <button
                className="m-3"
                onClick={e => {
                  e.preventDefault();
                  signIn("keycloak", {}, { kc_idp_hint: "google" });
                }}
              >
                <img
                  alt="Google"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  width={28}
                  height={28}
                />
              </button>
              <button
                className="m-3"
                onClick={e => {
                  e.preventDefault();
                  signIn("keycloak", {}, { kc_idp_hint: "facebook" });
                }}
              >
                <img
                  alt="Facebook"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                  width={28}
                  height={28}
                />
              </button>
              <button
                className="m-3"
                onClick={e => {
                  e.preventDefault();
                  signIn("keycloak", {}, { kc_idp_hint: "microsoft" });
                }}
              >
                <img
                  alt="Microsoft"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  width={28}
                  height={28}
                />
              </button>
            </span>
          </div>
        ) : (
          <p className="mb-3 text-lg">Please wait, preparing your session ...</p>
        )}
      </main>
    </div>
  );
};

export default Home;
