
interface Props {
    children?: React.ReactNode; //phase out in favor of slug
    slug?: string;
    inView: boolean;
    className?: string;
}

function BoxHeading({ slug, children, inView, className }: Props) {

    return (
        <div className={`${className} opacity-100 overflow-hidden py-2 px-3 xl:py-1 xl:px-1 border-b border-warm border-opacity-40`}>
            <div className="overflow-hidden">
                <h2 className={"text-sm xl:text-xl 2xl:text-2xl font-work font-medium tracking-wide " + (inView ? 'opacity-1 animate-slideupalt' : 'opacity-0 animate-none')}>
                    {children ? children : slug}
                </h2>
            </div>
        </div>
    )
}

export default BoxHeading
