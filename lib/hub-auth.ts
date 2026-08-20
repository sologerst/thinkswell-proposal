import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const HUB_COOKIE = "ts_hub";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function hubPassword() {
  return process.env.HUB_PASSWORD ?? "";
}

function accessToken() {
  const password = hubPassword();
  if (!password) return "";
  return createHmac("sha256", password).update("thinkswell-hub-v1").digest("hex");
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function passwordUnlocksHub(input: string) {
  const expected = hubPassword();
  if (!expected) return false;
  return safeEqual(input, expected);
}

export async function isHubUnlocked() {
  const expected = accessToken();
  if (!expected) return false;
  const jar = await cookies();
  const token = jar.get(HUB_COOKIE)?.value;
  if (!token) return false;
  return safeEqual(token, expected);
}

export async function setHubUnlocked() {
  const token = accessToken();
  if (!token) return;
  const jar = await cookies();
  jar.set(HUB_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function clearHubUnlock() {
  const jar = await cookies();
  jar.delete({ name: HUB_COOKIE, path: "/" });
}
