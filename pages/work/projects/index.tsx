
import Project from '@components/Project'

import enroller_preview from '@img/enroller_preview.webp'
import unicodes_preview from '@img/unicodes_preview.webp'
import raofolio_preview from '@img/raofolio_preview.webp'

interface Props {
    inView: boolean;
}

function Works({ inView }: Props) {
    return (
        <article className={"mt-8 xl:mt-12 flex flex-col space-y-36 xl:space-y-52 leading-[160%] opacity-0 " + (inView ? 'animate-fadein' : 'animate-none')}>
            <Project
                title="Raofolio"
                body="A fashion model's online portfolio. Designed with a minimal dark theme to keep the focus on the finer details of the imagery."
                thumb={raofolio_preview}
                to="work/projects/raofolio"
                link="https://raofolio.in"
            />
            <Project
                title="Unicodes"
                body="A web tool that allows quick access to unique special characters. Implemented with live search for a smooth, one-page experience."
                thumb={unicodes_preview}
                to="work/projects/unicodes"
                link="https://navs-unicodes.vercel.app/"
            />
            <Project
                title="Enroller"
                body="A university SaaS app that makes administrative tasks easy for students by simplifying complex processes such as course management and tuition payment."
                thumb={enroller_preview}
                to="work/projects/enroller"
            />
        </article >
    )
}

export default Works

