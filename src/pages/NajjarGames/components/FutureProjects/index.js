import FlexList from '../../../../components/shared/flexList';
import Section from '../../../../components/shared/Section'
import './FutureProjects.scss'
import texts from '../../../../helper/texts.js'

const FutureProjects = () => {

    const localLanguage = localStorage.getItem("najjar-games-language") || (navigator.language === "pt-BR" ? "pt-BR" : "en")
    
    const SubGamesList1 = [
        {
            img: 'https://i.imgur.com/F8ShJGz.jpeg',
            text: texts.regentes[localLanguage],
        },
        {
            img: 'https://i.imgur.com/8MXXAwX.png',
            text: texts.gaed[localLanguage],
        },
        {
            img: 'https://i.imgur.com/cSrkzGQ.png',
            text: 'AllyBetray',
        },
    ];

    const SubGamesList2 = [
        {
            img: 'https://i.imgur.com/1UP38Rw.jpeg',
            text: 'Burnout',
        },
        {
            img: 'https://i.imgur.com/aiwK4UF.png',
            text: texts.ovos[localLanguage],
        },
        {
            img: 'https://i.imgur.com/pLPfkug.jpeg',
            text: 'Element Gourmet',
        },
    ];
    
    return (
        <>
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyDesktop"}>
                <div className={"sub-games-title"}>
                    {texts.futureProjectsDesktop[localLanguage]}
                </div>
            </Section>
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyMobile"}>
                <div className={"sub-games-title"}>
                    {texts.futureProjectsMobile[localLanguage]}
                </div>
            </Section>
            <FlexList items={SubGamesList1}/>
            <FlexList items={SubGamesList2}/>
        </>
    )
}

export default FutureProjects;