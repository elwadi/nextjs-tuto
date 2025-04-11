import { auth } from "@/auth";
import Image from "next/image";

export default async function UserInfo() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="bg-black shadow-md rounded-lg p-8 max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-bold text-primary">
          NextAuth v5 + Next 15
        </h1>

        {session?.user?.image && (
          <div className="flex justify-center">
            <Image
              src={session.user.image}
              width={96}
              height={96}
              alt={session.user.name ?? "Avatar"}
              className="rounded-full border-2 border-primary"
            />
          </div>
        )}

        <div className="text-white">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {session?.user?.name ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {session?.user?.email ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
