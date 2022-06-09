
type Props = {
    children: React.ReactNode;
}

function BigText({ children }: Props) {
    return (
        <h2 className="self-center text-[64px] xl:text-[136px] 2xl:text-[180px] font-work font-thin leading-[120%] tracking-wide whitespace-nowrap">
            {children}
        </h2>
    )
}

export default BigText
