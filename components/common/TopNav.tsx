import Link from 'next/link'

import Logo from '@components/logos/Logo'

type Props = {
    className?: string;
}
function TopNav({ className }: Props) {
    return (
        <header className={`${className} pt-8 xl:pt-12`}>
            <div className="flex flex-col space-y-6 xl:flex-row w-full xl:space-y-0 xl:justify-between items-center">
                <div className="animate-slideup">
                    <Logo />
                </div>
                <nav className="w-full xl:w-auto font-work font-medium text-sm xl:text-lg 2xl:text-xl">
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
}

export default TopNav
