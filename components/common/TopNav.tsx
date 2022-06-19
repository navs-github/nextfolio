import { useState } from "react";

import Link from 'next/link'

import Logo from '@components/logos/Logo'

type Props = {
    className?: string;
}
function TopNav({ className }: Props) {
    const [accentColor, setAccentColor] = useState<string>('yellow');

    return (
        <header className={`${className} pt-8 xl:pt-12`}>
            <div className="w-full flex flex-col space-y-6 xl:flex-row xl:space-y-0 items-center">
                <div className="animate-slideup">
                    <Logo />
                </div>
                <div className="ml-12 hidden xl:flex flex-row items-center space-x-2">
                    <button
                        className={`p-0.5 border-2 border-warm rounded-full ${accentColor == "yellow" ? "border-opacity-100" : "border-opacity-50"} hover:border-opacity-100 transition-opacity duration-200 ease overflow-hidden`}
                        onClick={() => { setThemeColor("yellow") }}
                    >
                        <div className="w-4 h-4 rounded-full bg-yellow-accent"></div>
                    </button>
                    <button
                        className={`p-0.5 border-2 border-warm rounded-full ${accentColor == "blue" ? "border-opacity-100" : "border-opacity-50"} hover:border-opacity-100 transition-opacity duration-200 ease group overflow-hidden`}
                        onClick={() => { setThemeColor("blue") }}
                    >
                        <div className="w-4 h-4 rounded-full bg-blue-accent"></div>
                    </button>
                </div>
                <nav className="ml-auto w-full xl:w-auto font-work font-medium text-sm xl:text-lg 2xl:text-xl">
                    <ul className="w-full flex flex-row justify-between xl:justify-start xl:space-x-16">
                        <li className="opacity-0 animate-slideup50 text-link">
                            <Link href="/work" passHref>
                                WORK
                            </Link>
                        </li>
                        <li className="opacity-0 animate-slideup100 text-link">
                            <Link href="/about" passHref>
                                ABOUT
                            </Link>
                        </li>
                        <li className="opacity-0 animate-slideup150 text-link">
                            <Link href="/process" passHref>
                                PROCESS
                            </Link>
                        </li>
                        <li className="opacity-0 animate-slideup200 text-link">
                            <Link href="/contact" passHref>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )

    function setThemeColor(color) {
        setAccentColor(color);

        if (color == "yellow") {
            document.body.className = "";
        }
        else {
            document.body.className = `theme-${color}`;
        }
    }
}

export default TopNav
