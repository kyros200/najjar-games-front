import Link from '../shared/Link'
import './Header.scss'
import Button from '../shared/Button'
import { useState } from 'react'

import texts from '../../helper/texts.js'

const Header = () => {

    let [localLanguage, setLocalLanguage] = useState(localStorage.getItem("najjar-games-language") || (navigator.language === "pt-BR" ? "pt-BR" : "en"))

    let changeLanguage = () => {
        if (localStorage.getItem("najjar-games-language") === "pt-BR"){
            localStorage.setItem("najjar-games-language", "en")
        } else {
            localStorage.setItem("najjar-games-language", "pt-BR")
        }
        setLocalLanguage(localStorage.getItem("najjar-games-language"))
        window.location.reload()
    }

    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    NajjarGames.
                </Link>
                <div className='buttons'>
                    <Button onClick={() => changeLanguage()}>
                        {texts.changeLanguage[localLanguage]}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;