import Section from '../../../../components/shared/Section'

import Gmail from './images/gmail.svg'
import Instagram from './images/instagram.svg'

import './AboutMe.scss';

import texts from '../../../../helper/texts.js'

const AboutMe = () => {

    const localLanguage = localStorage.getItem("najjar-games-language") || (navigator.language === "pt-BR" ? "pt-BR" : "en")

    return (
        <Section backgroundColor='#eeffee' >
            <div className='aboutMeContent'>
                <div className="left">
                    <div className="image">
                        <img src="https://github.com/kyros200.png" alt="Rafael Najjar Github profile"/>
                    </div>
                </div>
                <div className="right">
                    <div className='titleContent'>
                        <div className="aboutMeTitle">
                            {texts.aboutNajjarGames[localLanguage]}
                        </div>
                        <div className="channels">
                            <a href="https://www.instagram.com/najjargames/" target="_blank" rel="noreferrer" >
                                <img src={Instagram} alt="Instagram NajjarGames." />
                            </a>
                            <a style={{paddingLeft: "12px"}} href="mailto:rafaelnajjar@gmail.com" target="_blank" rel="noreferrer" >
                                <img src={Gmail} alt="email pessoal Rafael Najjar" />
                            </a>
                        </div>
                    </div>
                    <p>
                        {texts.aboutMe1[localLanguage]}
                    </p>
                    <p>
                        {texts.aboutMe2[localLanguage]}
                    </p>
                    <p>
                        {texts.aboutMe3[localLanguage]}
                    </p>
                    <p>
                        {texts.aboutMe4[localLanguage]}
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default AboutMe;