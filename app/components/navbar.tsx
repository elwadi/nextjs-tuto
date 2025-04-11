"use client";

import { auth } from "@/auth";
import { SignInButton } from "./sign-in-button";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="navbar bg-gray-900 text-white border-b border-gray-700">
      <div className="flex justify-between items-center w-full">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            NextAuth v5 + Next 15
          </Link>
        </div>
        <div className="flex-none gap-2">
          {session?.user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-outline border-gray-300 text-white rounded-full flex items-center gap-2"
              >
                {session?.user?.image && (
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? "Avatar"}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                )}
                <span>{session.user?.name ?? "User"}</span>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-800 rounded-box w-52"
              >
                <li>
                  <Link href="/user-info" className="text-white">
                    User Info
                  </Link>
                </li>
                <li>
                  <SignOutButton />
                </li>
              </ul>
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
}
