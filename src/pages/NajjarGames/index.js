import Hero from '../../components/shared/Hero'
import NajjarProjectSection from '../../components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import AboutMe from './components/AboutMe'
import './NajjarGames.scss'
import JLFLogo from './images/logoJLF.png'
import { useEffect } from 'react'
import Instagram from './images/instagramIconWhite.svg'

import texts from '../../helper/texts'
import FlexList from '../../components/shared/flexList'
import Section from '../../components/shared/Section'

const NajjarGames = () => {

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!localStorage.getItem("najjar-games-language"))
            localStorage.setItem("najjar-games-language", navigator.language)
    }, [])

    const MainGamesList = [
        {
            img: 'https://i.imgur.com/Adj1t1T.png',
            text: 'Summa Gemma',
        },
        {
            img: 'https://i.imgur.com/OBxxZ71.png',
            text: '3014',
        },
    ];

    const localLanguage = localStorage.getItem("najjar-games-language")

    return (
        <>
            <Hero>
                {texts.heroTextsList[localLanguage]}
            </Hero>
            <AboutMe />
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyDesktop"}>
                <div className={"sub-games-title"}>
                    {texts.mainGamesDesktop[localLanguage]}
                </div>
            </Section>
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyMobile"}>
                <div className={"sub-games-title"}>
                    {texts.mainGamesMobile[localLanguage]}
                </div>
            </Section>
            <FlexList items={MainGamesList} />
            <FutureProjects />
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyDesktop"}>
                <div className={"sub-games-title"}>
                    {texts.otherThingsDesktop[localLanguage]}
                </div>
            </Section>
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyMobile"}>
                <div className={"sub-games-title"}>
                    {texts.otherThingsMobile[localLanguage]}
                </div>
            </Section>
            <NajjarProjectSection
                title={<img src={JLFLogo} alt="JLF" height={"300px"}/>}
                description={texts.jlfDescription[localLanguage]}
                className="jlf"
                classNameRight="jlfContent"
            >
                <a href="https://www.instagram.com/najjargames/" target="_blank" rel="noreferrer" >
                    <img className='instagramIcon' src={Instagram} alt="Instagram NajjarGames." />
                </a>
            </NajjarProjectSection>
        </>
    )
}

export default NajjarGames;