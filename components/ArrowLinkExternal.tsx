import React from 'react'

type Props = {
    link: string;
    text: string;
}

function ArrowLinkExternal({ link, text }: Props) {
    return (
        <a href={link} rel="noopener noreferrer" target="_blank">
            <span className="group flex flex-row items-center space-x-2.5">
                <span className="text-base xl:text-xl 2xl:text-2xl tracking-tight font-work font-medium uppercase group-hover:text-yellow-base transition-colors duration-200">{text}</span>
                <svg className="h-8 w-8 text-yellow-base group-hover:text-yellow-accent group-hover:ml-4 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 25">
                    <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                </svg>
            </span>
        </a>
    )
}

export default ArrowLinkExternal
