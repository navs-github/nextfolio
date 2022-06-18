import Link from 'next/link'

import Logo from '@components/logos/Logo'
import LogoDribbble from '@components/logos/LogoDribbble'
import LogoAngel from '@components/logos/LogoAngel'
import LogoGithub from '@components/logos/LogoGithub'
import LogoLinkedin from '@components/logos/LogoLinkedin'
import LogoInstagram from '@components/logos/LogoInstagram'
import LogoSpotify from '@components/logos/LogoSpotify'

interface Props {
    className?: string;
}

function Footer({ className }: Props) {
    return (
        <footer className={`${className} -mx-6 px-6 xl:-mx-44 xl:px-44 2xl:px-56 2xl:-mx-56 py-12 xl:py-24 flex items-center justify-center border-t border-opacity-30 border-warm bg-dark`}>
            {/* 💻  */}
            <div className="hidden xl:flex flex-row space-x-44 text-lg 2xl:text-xl">
                <nav className="flex flex-col items-center">
                    <Logo></Logo>
                    <ul className="mt-7 flex flex-row space-x-9">
                        <li className=""><LogoGithub></LogoGithub></li>
                        <li className=""><LogoDribbble></LogoDribbble></li>
                        <li className=""><LogoLinkedin></LogoLinkedin></li>
                        <li className=""><LogoAngel></LogoAngel></li>
                        <li className=""><LogoInstagram></LogoInstagram></li>
                        <li className=""><LogoSpotify></LogoSpotify></li>
                    </ul>
                    <span className="mt-8">Based in Toronto</span>
                    <span className="mt-2 text-sm">© 2021 Abhinav Verma | All Rights Reserved</span>
                </nav>
                <nav className="flex flex-row space-x-20">
                    <ul className="flex flex-col space-y-4">
                        <li className="text-base uppercase">NAVIGATION</li>
                        <Link href="/" passHref>
                            <li className="text-link">Home</li>
                        </Link>
                        <Link href="/about" passHref>
                            <li className="text-link">About</li>
                        </Link>
                        <Link href="/work" passHref>
                            <li className="text-link">Work</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="text-link">Contact</li>
                        </Link>
                    </ul>
                    <ul className="flex flex-col space-y-4">
                        <li className="text-base uppercase">EXTRAS</li>
                        <Link href="/books" passHref>
                            <li className="text-link">Books</li>
                        </Link>
                        <Link href="/notion" passHref>
                            <li className="text-link">Notion</li>
                        </Link>
                        <Link href="/playlists" passHref>
                            <li className="text-link">Playlists</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            {/* 📲 */}
            <div className="xl:hidden flex flex-col items-center space-y-12 text-base">
                <nav className="flex flex-row space-x-36">
                    <ul className="flex flex-col space-y-4">
                        <li className="text-sm uppercase">NAVIGATION</li>
                        <Link href="/" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">Home</li>
                        </Link>
                        <Link href="/about" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">About</li>
                        </Link>
                        <Link href="/work" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">Work</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">Contact</li>
                        </Link>
                    </ul>
                    <ul className="flex flex-col space-y-4">
                        <li className="text-sm uppercase">EXTRAS</li>
                        <Link href="/books" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">Books</li>
                        </Link>
                        <Link href="/notion" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">Notion</li>
                        </Link>
                        <Link href="/playlists" passHref>
                            <li className="hover:text-yellow-base transition-colors duration-200">Playlists</li>
                        </Link>
                    </ul>
                </nav>
                <nav className="flex flex-col items-center">
                    <Logo />
                    <ul className="mt-7 flex flex-row space-x-9">
                        <li className=""><LogoGithub></LogoGithub></li>
                        <li className=""><LogoDribbble></LogoDribbble></li>
                        <li className=""><LogoLinkedin></LogoLinkedin></li>
                        <li className=""><LogoAngel></LogoAngel></li>
                        <li className=""><LogoInstagram></LogoInstagram></li>
                        <li className=""><LogoSpotify></LogoSpotify></li>
                    </ul>
                    <span className="mt-8">Based in Toronto</span>
                    <span className="mt-2 text-xs">© 2021 Abhinav Verma | All Rights Reserved</span>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
