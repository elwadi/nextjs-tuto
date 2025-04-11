import NextAuth from "next-auth";
import { GITHUB_ID, GITHUB_SECRET } from "@/lib/env";

import GitHubProvider from "next-auth/providers/github";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHubProvider({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
});
