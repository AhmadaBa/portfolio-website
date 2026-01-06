import React from 'react';
import { SiTiktok, SiInstagram, SiChessdotcom, SiSpotify  } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-inherit">
            <div className="pt-9 flex justify-center space-x-2">
                <a
                    href="https://www.instagram.com/ahmad.al.fayez/"
                    type="button"
                    className="rounded-full p-3 "
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="mx-auto">
                        <SiInstagram  className="h-5 w-5" />
                    </span>
                </a>

                <a
                    href="https://open.spotify.com/user/nnwf9tg5gh3qrt53ogharag7r?si=445fd33b18be4cca&nd=1&dlsi=656f3f045a5f4ae8"
                    type="button"
                    className="rounded-full  p-3 "
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="mx-auto">
                        <SiSpotify  className="h-5 w-5" />
                    </span>
                </a>

                <a
                    href="https://www.tiktok.com/@ahmadbafayez"
                    type="button"
                    className="rounded-full  p-3 "
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="mx-auto">
                        <SiTiktok className="h-5 w-5" />
                    </span>
                </a>

                <a
                    href="https://www.chess.com/member/ahmad2ba"
                    type="button"
                    className="rounded-full  p-3"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="mx-auto">
                        <SiChessdotcom className="h-5 w-5" />
                    </span>
                </a>
            </div>

            <div className="w-full p-4 text-center">
                <span>© 2026 Ahmad Bakhit Al Fayez. All rights reserved.</span>
            </div>

        </footer>
    );
};

export default Footer;
