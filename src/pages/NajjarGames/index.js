import Hero from '../../components/shared/Hero'
import Section from '../../components/shared/Section'
import Hatch from '../../components/shared/Hatch'
import NajjarProjectSection from '../../components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import './NajjarProjects.scss'
import JLFLogo from './images/logoJLF.png'
import SGLogo from './images/SG_logo.png'
import { useEffect } from 'react'

const NajjarGames = () => {

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!localStorage.getItem("najjar-games-language"))
            localStorage.setItem("najjar-games-language", navigator.language)
    }, [])

    const HeroTextsList = 
    [
        {
            sequence: [
                "NajjarGames. is where I\ndesign for fun.",
                400,
                "NajjarGames. is where I\nbring to life many ideas.",
                400,
                "NajjarGames. is where I\nshare with you all.",
                400,
                "NajjarGames. is where I\ndevelop for joy.",
                400,
                "NajjarGames. is where I\ntest endlessly.",
                400,
                "NajjarGames. is where I\nrefine constantly.",
                400,
                "NajjarGames. is where I\ninnovate tirelessly.",
                400,
                "NajjarGames. is where I\nmake games with players in mind.",
                400,
                "NajjarGames. is where I\ndesign from scratch.",
                400,
                "NajjarGames. is where I\ntest until they shine.",
                400,
                "NajjarGames. is where I\nwish existed when I was a kid.",
                400,
                "NajjarGames. is where I\npour my soul into.",
                400,
                "NajjarGames. is where I\nbring to your table an experience.",
                400,
                "NajjarGames. is where I\nstart with a crazy sketch.",
                400,
                "NajjarGames. is where I\ngrow from tiny ideas.",
                400,
                "NajjarGames. is where I\nbuild to tell stories.",
                400,
                "NajjarGames. is where I\nrefine one rule at a time.",
                400,
                "NajjarGames. is where I\ncreate from chaos.",
                400,
                "NajjarGames. is where I\nbring people together.",
                400,
                "NajjarGames. is where I\nchallenge myself.",
                400,
                "NajjarGames. is where I\nplay with passion.",
                400,
                "NajjarGames. is where I\nimagine daily.",
                400,
                "NajjarGames. is where I\nbuild with love.",
                400,
            ]
        },
    ]

    return (
        <>
            <Hero>
                {HeroTextsList[Math.floor(Math.random() * HeroTextsList.length)]}
            </Hero>
            <Section
            backgroundColor='#eeffee'
            >
                <NajjarProjectSection
                    title={<img src={JLFLogo} alt="JLF" />}
                    description={<span>My Monthly event with friends to play boardgames (in Rio de Janeiro)!</span>}
                    buttonLabel={<span>(pt-br) Check JLF Instagram!</span>}
                    to={'https://www.instagram.com/jlf.boardgame/'}
                    className="jlf"
                    classNameContent="jlfContent"
                />
                <NajjarProjectSection
                    title={<img src={SGLogo} alt="Summa Gemma" />}
                    description={<span>Ad Perfectum. Summa Gemma is a game about refining gems until you make the perfect one.</span>}
                    buttonLabel={<span>Play it now on Tabletopia!</span>}
                    backgroundColor={"#2B912D"}
                    to="https://tabletopia.com/games/summa-gemma-wa69s1/play-now"
                    className="sg"
                    classNameContent="sgContent"
                />
                <NajjarProjectSection
                    title={'3014'}
                    description={<span>My 1-4 Player cooperative boardgame about surviving a galatic trip back to Earth. Avaiable on TableTop Simulator!</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    to="https://hatch.najjar.dev/games"
                />
                <NajjarProjectSection
                    title={'Gaed'}
                    description={<span>My 2-Player Deckbuilding Card Game about defeating the enemy team. My most advanced and beloved boardgame prototype ever, with 80+ unique artworks. Avaiable on TableTop Simulator!</span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B912D"}
                    to="https://hatch.najjar.dev/games"
                />
                <NajjarProjectSection
                    title={'Regent'}
                    description={<span>My 1-player boardgame about surviving an fragile kingdom over 3 years until the legitimate heir is old enough to reign. </span>}
                    buttonLabel={<span>Soon at <Hatch text="HatchGames." /></span>}
                    backgroundColor={"#2B918A"}
                    to="https://hatch.najjar.dev/games"
                />
            </Section>
            <FutureProjects />
        </>
    )
}

export default NajjarGames;