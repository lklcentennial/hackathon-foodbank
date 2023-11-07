"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  return (
    <button
      className="border text-slate-300 text-xl font-bold m-2 p-4 rounded bg-slate-700 outline-none"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
