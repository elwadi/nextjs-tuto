"use client";
import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return <button onClick={() => login()}> Sign In With Github</button>;
};
