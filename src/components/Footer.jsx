import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-inherit text-gray-500 border border-yellow-400">
            <div class="w-full mx-auto max-w-screen-xl pl-4 md:flex md:items-center md:justify-between">
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                    <a href="https://www.instagram.com/ahmad.al.fayez/" class="hover:underline me-4 md:me-6" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/user/nnwf9tg5gh3qrt53ogharag7r?si=445fd33b18be4cca&nd=1&dlsi=656f3f045a5f4ae8" class="hover:underline me-4 md:me-6" target="_blank" rel="noopener noreferrer">Spotify</a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@ahmadbafayez" class="hover:underline me-4 md:me-6" target="_blank" rel="noopener noreferrer">Tiktok</a>
                    </li>
                    <li>
                        <a href="https://www.chess.com/member/ahmad2ba" class="hover:underline" target="_blank" rel="noopener noreferrer">Chess.com</a>
                    </li>
                </ul>

                <span class="text-sm  sm:text-center dark:text-gray-400">© 2024 Ahmad Bakhit Al Fayez. All rights reserved.</span>
            </div>
        </footer>

    )
}

export default Footer
