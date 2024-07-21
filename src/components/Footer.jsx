import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-inherit text-gray-500 border border-yellow-400">
            <div class="w-full mx-auto max-w-screen-xl pl-4 md:flex md:items-center md:justify-between">
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>

                <span class="text-sm  sm:text-center dark:text-gray-400">© 2023 Ahmad Bakhit Al Fayez. All rights reserved.</span>
            </div>
        </footer>

    )
}

export default Footer
