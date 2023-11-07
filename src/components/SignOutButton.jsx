"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <button
      className="border text-slate-300 text-xl font-bold m-2 p-4 rounded bg-slate-700 outline-none"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
