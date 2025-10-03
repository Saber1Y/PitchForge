"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ClientUserAvatar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-8 h-8 rounded-full bg-pitchforge-gold/20 animate-pulse" />
    );
  }

  if (!session?.user) return null;

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={session.user.image || "/default-avatar.png"}
        alt={session.user.name || "User Avatar"}
        width={32}
        height={32}
        className="rounded-full border-2 border-pitchforge-gold/30 hover:border-pitchforge-gold transition-colors"
      />
      <span className="hidden sm:inline text-sm font-medium text-pitchforge-text">
        {session.user.name}
      </span>
    </div>
  );
}
