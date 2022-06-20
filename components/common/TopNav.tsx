import { useState } from "react";
import Link from 'next/link'

import ThemeSwitch from "@components/inputs/ThemeSwitch";

import Logo from '@components/logos/Logo'

type Props = {
    className?: string;
}
function TopNav({ className }: Props) {
    const [selectedAccentColor, setSelectedAccentColor] = useState<string>('yellow');

    return (
        <header className={`${className} pt-8 xl:pt-12`}>
            <div className="w-full flex flex-col space-y-6 xl:flex-row xl:space-y-0 items-center">
                <div className="animate-slideup">
                    <Logo />
                </div>
                <div className="ml-12 hidden xl:flex flex-row items-center space-x-2">
                    <ThemeSwitch
                        color={"yellow"}
                        selectedAccentColor={selectedAccentColor}
                        setThemeColor={setThemeColor}
                    />
                    <ThemeSwitch
                        color={"green"}
                        selectedAccentColor={selectedAccentColor}
                        setThemeColor={setThemeColor}
                    />
                    <ThemeSwitch
                        color={"red"}
                        selectedAccentColor={selectedAccentColor}
                        setThemeColor={setThemeColor}
                    />
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
        setSelectedAccentColor(color);

        if (color == "yellow") {
            document.body.className = "";
        }
        else {
            document.body.className = `theme-${color}`;
        }
    }
}

export default TopNav
