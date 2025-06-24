import Hero from '../../components/shared/Hero'
import NajjarProjectSection from '../../components/NajjarProjectSection'
import FutureProjects from './components/FutureProjects'
import AboutMe from './components/AboutMe'
import './NajjarGames.scss'
import JLFLogo from './images/logoJLF.png'
import { useEffect } from 'react'
import Instagram from './images/instagramIconWhite.svg'
import Document from './images/documentIcon.svg'
import Tabletopia from './images/Tabletopia-Logo.png'
import Video from './images/videoIcon.svg'

import texts from '../../helper/texts'
import FlexList from '../../components/shared/flexList'
import Section from '../../components/shared/Section'

const NajjarGames = () => {

    const localLanguage = localStorage.getItem("najjar-games-language") || (navigator.language === "pt-BR" ? "pt-BR" : "en")

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!localStorage.getItem("najjar-games-language"))
            localStorage.setItem("najjar-games-language", (navigator.language === "pt-BR" ? "pt-BR" : "en"))
    }, [])

    const MainGamesList = [
        {
            img: 'https://i.imgur.com/Adj1t1T.png',
            text: 'Summa Gemma',
            buttons: [
                {
                    icon: <img src={Document} alt="SellSheet" style={{width: "70px"}}/>,
                    description: 'SellSheets',
                    to:"https://drive.google.com/drive/folders/11Sk0rVgOq0RBjhssYfx4Me7vuXVu6L1j?usp=sharing",
                },
                {
                    icon: <img src={Video} alt="Short Video" style={{width: "70px"}}/>,
                    description: texts.videos[localLanguage],
                    to:"https://drive.google.com/drive/folders/1Nhe0dQfPzvon0e4hVK-xseZKNTwb0pfM?usp=sharing",
                },
                {
                    icon: <img src={Tabletopia} alt="Play Now!" style={{width: "70px"}}/>,
                    description: texts.playNow[localLanguage],
                    to:"https://tabletopia.com/games/summa-gemma-wa69s1/play-now",
                },
            ]
        },
        {
            img: 'https://i.imgur.com/OBxxZ71.png',
            text: texts["3014"][localLanguage],
            buttons: [
                {
                    icon: <img src={Document} alt="SellSheet" style={{width: "70px"}}/>,
                    description: 'SellSheets',
                    to:"https://drive.google.com/drive/folders/1623C1iWOlyCnQoVsF_m2OQrSneSYVjkH?usp=sharing"
                },
            ]
        },
    ];

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
                <a href="https://www.instagram.com/jlf.boardgame/" target="_blank" rel="noreferrer" >
                    <img className='instagramIcon' src={Instagram} alt="Instagram NajjarGames." />
                </a>
            </NajjarProjectSection>
        </>
    )
}

export default NajjarGames;