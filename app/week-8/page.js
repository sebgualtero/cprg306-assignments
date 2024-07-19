"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main>
      <header>
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      </header>
      <section>
        {user ? (
          <div className="text-lg">
            <p>Signed in as {user.email}</p>
            <Link
              href="./week-8/shopping-list/"
              className="text-lg hover:underline"
            >
              Continue to your Shopping List
            </Link>
            <br></br>
            <button
              onClick={handleSignOut}
              className="text-lg m-2 hover:underline"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
              className="text-lg m-2 hover:underline"
            >
              Sign In with GitHub
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
