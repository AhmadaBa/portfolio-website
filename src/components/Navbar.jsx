"use client";
import React from 'react';
import { usePathname } from "next/navigation";
import { GoHome } from 'react-icons/go';
import { MdOutlineWorkOutline, MdOutlineComputer } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav class="bg-inherit fixed flex w-full border border-indigo-600">
            <div class="flex items-center justify-center mx-auto mt-10 md:mt-20 p-4 border border-orange-600">
                <div class="flex w-auto border border-yellow-600 " id="navbar-sticky">
                    <ul class="flex flex-row flex-wrap space-x-10 p-0 mt-0 font-medium border md:space-x-16">
                        <li className="text-lg p-0 hover:scale-110 font-mono" style={{ color: pathname === "/" ? "#FF7F50" : "white" }}>
                            <a href="#" class="hidden md:block md:py-2 md:px-3"><GoHome class="inline align-middle mr-2" />Home</a>
                            <GoHome class="md:hidden inline align-middle mr-2" size={25} />
                        </li>
                        <li className="text-lg p-0 hover:scale-110 font-mono" style={{ color: pathname === "/" ? "#FF7F50" : "white" }}>
                            <a href="#" class="hidden md:block md:py-2 md:px-3"><MdOutlineWorkOutline class="inline align-middle mr-2" />Experience</a>
                            <MdOutlineWorkOutline class="md:hidden inline align-middle mr-2" size={25} />
                        </li>
                        <li className="text-lg p-0 hover:scale-110 font-mono" style={{ color: pathname === "/" ? "#FF7F50" : "white" }}>
                            <a href="#" class="hidden md:block md:py-2 md:px-3"><MdOutlineComputer class="inline align-middle mr-2" />Project </a>
                            <MdOutlineComputer class="md:hidden inline align-middle mr-2" size={25} />
                        </li>
                        <li className="text-lg p-0 hover:scale-110 font-mono" style={{ color: pathname === "/" ? "#FF7F50" : "white" }}>
                            <a href="#" class="hidden md:block md:py-2 md:px-3"><BiCameraMovie class="inline align-middle mr-2" />Movies</a>
                            <BiCameraMovie class="md:hidden inline align-middle mr-2" size={25} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
