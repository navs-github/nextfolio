import Link from 'next/link'

type Props = {
    to: string;
    text: string;
}

function ArrowLinkInternal({ to, text }: Props) {
    return (
        <Link href={to} passHref>
            <span className="group flex flex-row items-center space-x-2.5 cursor-pointer">
                <span className="text-base xl:text-xl 2xl:text-2xl tracking-tight font-work font-medium uppercase group-hover:text-theme-accent transition-colors duration-200">
                    {text}
                </span>
                <svg className="h-8 w-8 text-theme-accent group-hover:text-yellow-accent group-hover:ml-4 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 25">
                    <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                </svg>
            </span>
        </Link>
    )
}

export default ArrowLinkInternal;
