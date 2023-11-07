"use client";
import CenterContainer from "@/components/CenterContainer";
import GuestOnly from "@/components/GuestOnly";
import Login from "@/components/Login";
import SignInButton from "@/components/SignIn";
import SignOutButton from "@/components/SignOutButton";
import Validation from "@/components/Validation";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <CenterContainer>
      {session.data ? (
        <>
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
