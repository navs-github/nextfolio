
type Props = {
    children: React.ReactNode;
}

function ArrowLinkSet({ children }: Props) {
    return (
        <ul className="mt-8 xl:mt-12 space-y-4 xl:space-y-6 2xl:space-y-8 flex flex-col items-start opacity-0 animate-fadein">
            {children}
        </ul>
    )
}

export default ArrowLinkSet
