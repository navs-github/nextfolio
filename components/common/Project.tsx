//packages
import Link from 'next/link'
import Image from 'next/image'

//components
import ArrowLinkSet from './ArrowLinkSet'
import ArrowLinkInternal from './ArrowLinkInternal'
import ArrowLinkExternal from './ArrowLinkExternal'

interface Props {
    to: string;
    title: string;
    body: string;
    thumb: StaticImageData;
    link?: string;
}

function Project({ to, title, body, thumb, link }: Props) {

    return (
        <div className="">
            <div className="flex flex-row items-center space-x-2">
                <h2 className="font-work font-medium text-lg xl:text-xl 2xl:text-2xl">{title}</h2>
                <div className="w-full h-[1px] bg-warm opacity-30"></div>
            </div>
            <p className="mt-4 xl:mt-6">{body}</p>
            <Link href={to} passHref>
                <div className="mt-6 xl:mt-12 relative h-[300px] w-full 2xl:h-[400px] 2xl:w-[1400px] border border-warm border-opacity-30 xl:opacity-80 xl:hover:opacity-100">
                    <Image src={thumb.src} layout="fill" className="object-cover cursor-pointer" alt="" />
                </div>
            </Link>
            <ArrowLinkSet>
                <li>
                    <ArrowLinkInternal text="LEARN MORE" to={to}></ArrowLinkInternal>
                </li>
                {link &&
                    <li>
                        <ArrowLinkExternal text="VISIT WEBSITE" link={link}></ArrowLinkExternal>
                    </li>
                }
            </ArrowLinkSet>
        </div>
    )
}

export default Project
