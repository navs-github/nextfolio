//packages
import Link from 'next/link'

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
            <Link href={to}>
                <img src={thumb.src} className="2xl:h-[400px] w-[1400px] mt-6 xl:mt-12 p-1 border border-warm border-opacity-30 xl:opacity-80 xl:hover:opacity-100" width="700" height="200" alt="" srcSet="" />
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
