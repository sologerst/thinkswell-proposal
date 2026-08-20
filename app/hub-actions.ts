"use server";

import { redirect } from "next/navigation";
import {
  clearHubUnlock,
  passwordUnlocksHub,
  setHubUnlocked,
} from "@/lib/hub-auth";

export async function unlockHub(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!passwordUnlocksHub(password)) {
    redirect("/?unlock=failed");
  }

  await setHubUnlocked();
  redirect("/");
}

export async function lockHub() {
  await clearHubUnlock();
  redirect("/");
}
