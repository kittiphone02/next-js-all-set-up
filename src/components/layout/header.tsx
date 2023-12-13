'use client'
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import Link from "next/link";
import {Boxes, ChevronRight, Moon, Sun} from "lucide-react";
import { UserNav } from "@/components/layout/user-nav";
import { toggleSidebar ,toggleSwitch} from "@/redux/slices/layoutSlice"
import { Button } from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hook";
import { Squash as Hamburger } from 'hamburger-react'
export default function Header() {
    const {isOpen} = useAppSelector(state => state.layout)
    const dispatch = useAppDispatch()
    const handleToggle =  () => {
        dispatch(toggleSwitch());
         dispatch(toggleSidebar());
         setTimeout(() => toggleSwitch(), 500);

    };
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={"/"}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <Boxes className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">T3 app template</h1>
                    <div className=" absolute w-full space-y-2 ">

                        <Button
                            variant="ghost"
                            size="icon"
                            className={"ml-48 mt-3 w-12 rounded-md border"}
                        >
                            <Hamburger
                                toggle={handleToggle}
                                toggled={!isOpen}
                                size={24}
                            />

                        </Button>
                    </div>
                </Link>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                        <UserNav  />
                </div>

            </nav>
        </div>
    );
}