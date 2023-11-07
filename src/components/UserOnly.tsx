import { getServerSession } from "next-auth";
import React from "react";

type SessionCheckerProps = {
  children: React.ReactNode;
  errorMessage: string;
};

const UserOnly = async ({
  children,
  errorMessage,
}: SessionCheckerProps) => {
  const session = await getServerSession();
  return session ? <div>{children}</div> : <div>{errorMessage}</div>;
};

export default UserOnly;
