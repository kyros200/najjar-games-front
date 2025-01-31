import Link from '../shared/Link'
import Hatch from '../shared/Hatch'
import './Header.scss'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    NajjarGames.
                </Link>
                <div className='buttons'>
                    <Link to="https://hatch.najjar.dev">Go to <Hatch /></Link> 
                </div>
            </div>
        </div>
    )
}

export default Header;