"use client"; // 👈 Must be a client component

import { usePathname } from "next/navigation";
import NavbarHome from "./NavbarHome";
import NavbarCourse from "./NavbarCourse";

export default function NavbarSwitcher() {
  const pathname = usePathname();

  if (pathname === "/") return <NavbarHome />; // only for home
  return <NavbarCourse />; // for any other page
}
