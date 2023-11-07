import { getServerSession } from "next-auth";
import React from "react";


const GuestOnly = async ({children}) => {
  const session = await getServerSession();
  return !session ? <div>{children}</div> : null;
};

export default GuestOnly;
