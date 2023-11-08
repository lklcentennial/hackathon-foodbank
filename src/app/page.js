"use client";
import CenterContainer from "@/components/CenterContainer";
import SignInButton from "@/components/SignIn";
import SignOutButton from "@/components/SignOutButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Inventory from "@/components/Inventory";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  return (
    <CenterContainer>
      {session.data ? (
        <>
          <h1 className="m-2 text-4xl font-bold text-gray-900">
            {"Let's verify you!"}
          </h1>

          <button
            className="border text-slate-300 text-xl font-bold m-2 p-4 rounded bg-slate-700 outline-none"
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
