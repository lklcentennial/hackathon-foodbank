"use client";
import CenterContainer from "@/components/CenterContainer";
import SignInButton from "@/components/SignIn";
import SignOutButton from "@/components/SignOutButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import Inventory from "@/components/Inventory";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  return (
    <CenterContainer>
      {session.data ? (
        <>
          <h1 className="m-8 text-6xl font-bold text-gray-900">
            {"Let's verify you!"}
          </h1>

          <button
            className="m-2 -mt-2 py-4 px-12 text-2xl rounded bg-orange-500 text-center text-white transition duration-500 hover:bg-orange-700"
            onClick={() => router.push("/verify")}
          >
            Procced
          </button>
          <SignOutButton />
        </>
      ) : (
        <>
          <h1 className="m-2 text-4xl font-bold text-gray-900">
            Hey! Come on in!
          </h1>
          <SignInButton />
        </>
      )}
    </CenterContainer>
  );
}
