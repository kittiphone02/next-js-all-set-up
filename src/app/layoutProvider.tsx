// LayoutProvider.tsx
// Use the client directive for using usePathname hook.
"use client";

// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import { Layout } from "@/components/layout";
import React from "react";

const pathsToHideNavbar = [
    "/login",
];

export default function LayoutProvider({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Check if the current path is in the array of paths to hide the Navbar
    const shouldHideNavbar = pathsToHideNavbar.includes(pathname);

    return <>{shouldHideNavbar ? children : <Layout>{children}</Layout>}</>;
}
