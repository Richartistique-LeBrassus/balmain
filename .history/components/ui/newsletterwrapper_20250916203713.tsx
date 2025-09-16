"use client";
import { usePathname } from "next/navigation";
import Newsletter from "../Newsletter";


export default function NewsletterWrapper() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Newsletter />;
}