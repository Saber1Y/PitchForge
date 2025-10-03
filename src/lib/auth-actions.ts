"use server";

import { signIn } from "@/auth";
import { signOut } from "@/auth";

export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/" });
}

export async function handleSignOut() {
  await signOut();
}
