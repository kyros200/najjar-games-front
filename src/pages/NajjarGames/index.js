import Hero from '../../components/shared/Hero'
import NajjarProjectSection from '../../components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import AboutMe from './components/AboutMe'
import './NajjarGames.scss'
import JLFLogo from './images/logoJLF.png'
import SGLogo from './images/SG_logo.png'
import { useEffect } from 'react'

import texts from '../../helper/texts'

const NajjarGames = () => {

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!localStorage.getItem("najjar-games-language"))
            localStorage.setItem("najjar-games-language", navigator.language)
    }, [])

    let localLanguage = localStorage.getItem("najjar-games-language")

    return (
        <>
            <Hero>
                {texts.heroTextsList[localLanguage]}
            </Hero>
            <NajjarProjectSection
                title={<img src={SGLogo} alt="Summa Gemma" height={"300px"}/>}
                description={<span>Ad Perfectum. Summa Gemma is a game about refining gems until you make the perfect one.</span>}
                buttonLabel={<span>Play it now on Tabletopia!</span>}
                to="https://tabletopia.com/games/summa-gemma-wa69s1/play-now"
                className="sg"
                classNameRight="sgContent"
            />
            <NajjarProjectSection
                title={<img src={JLFLogo} alt="JLF" height={"300px"}/>}
                description={<span>My Monthly event with friends to play boardgames (in Rio de Janeiro)!</span>}
                buttonLabel={<span>(pt-br) Check JLF Instagram!</span>}
                to={'https://www.instagram.com/jlf.boardgame/'}
                className="jlf"
                classNameRight="jlfContent"
            />
            <FutureProjects />
            <AboutMe></AboutMe>
        </>
    )
}

export default NajjarGames;