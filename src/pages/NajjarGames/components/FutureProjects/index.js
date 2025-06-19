import FlexList from '../../../../components/shared/flexList';
import Section from '../../../../components/shared/Section'
import './FutureProjects.scss'

const FutureProjects = () => {
    
    const SubGamesList1 = [
        {
            img: 'https://i.imgur.com/F8ShJGz.jpeg',
            text: 'Regentes',
        },
        {
            img: 'https://i.imgur.com/8MXXAwX.png',
            text: 'Faça um baralho na hora e derrote o adversário!',
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
            text: 'Ovos.',
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
                    Jogos que estou desenvolvendo
                </div>
            </Section>
            <Section backgroundColor='#2B6535' className={"sub-games-section onlyMobile"}>
                <div className={"sub-games-title"}>
                    Em desenvolvimento
                </div>
            </Section>
            <FlexList items={SubGamesList1}/>
            <FlexList items={SubGamesList2}/>
        </>
    )
}

export default FutureProjects;