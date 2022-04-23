
type Props = {
    children: React.ReactNode;
}

function BigTextHero({ children }: Props) {
    return (
        <h2 className="self-center text-[40px] xl:text-[120px] 2xl:text-[180px] font-work font-thin leading-[120%] tracking-wide whitespace-nowrap">
            {children}
        </h2>
    )
}

export default BigTextHero
