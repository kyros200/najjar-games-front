import Link from '../shared/Link'
import './Header.scss'
import Button from '../shared/Button'
import { useState } from 'react'

const Header = () => {

    let [localLanguage, setLocalLanguage] = useState(localStorage.getItem("najjar-games-language"))

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
                        {localLanguage === "pt-BR" ? "Change to English" : "Mudar para Português"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;