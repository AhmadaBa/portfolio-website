"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from 'react-icons/go';
import { MdOutlineWorkOutline, MdOutlineComputer } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav class="bg-inherit flex w-full">
            <div class="flex items-center justify-center mx-auto  md:mt-10 p-4">
                <div class="flex w-auto" id="navbar-sticky">
                    <ul class="flex flex-row flex-wrap space-x-10 mt-0 font-medium  md:space-x-16 text-lg p-0 font-mono">
                        <li class="hover:scale-110" style={{ color: pathname === "/" ? "#FF7F50" : "white" }}>
                            <Link href="/" className="md:block md:py-2 md:px-3">
                                <GoHome className="inline align-middle mr-2" size={25} />
                                <span className="hidden md:inline">Home</span>
                            </Link>
                        </li>
                        <li class="hover:scale-110" style={{ color: pathname === "/Experience" ? "#FF7F50" : "white" }}>
                            <Link href="/Experience" className="md:block md:py-2 md:px-3">
                                <MdOutlineWorkOutline className="inline align-middle mr-2" size={25} />
                                <span className="hidden md:inline">Experiences</span>
                            </Link>
                        </li>
                        <li class="hover:scale-110" style={{ color: pathname === "/Project" ? "#FF7F50" : "white" }}>
                            <Link href="/Project" className="md:block md:py-2 md:px-3">
                                <MdOutlineComputer className="inline align-middle mr-2" size={25} />
                                <span className="hidden md:inline">Projects</span>
                            </Link>
                        </li>
                        <li class="hover:scale-110" style={{ color: pathname === "/Movies" ? "#FF7F50" : "white" }}>
                            <Link href="/Movies" className="md:block md:py-2 md:px-3">
                                <BiCameraMovie className="inline align-middle mr-2" size={25} />
                                <span className="hidden md:inline">Movies</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
