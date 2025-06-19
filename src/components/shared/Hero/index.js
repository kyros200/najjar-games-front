import './Hero.scss';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ children }) => {
    return (
        <div className='landing-hero-container'>
            <div className='content'>
                <TypeAnimation
                    wrapper="div"
                    speed={50}
                    className = "left"
                    repeat={Infinity}
                    style={{ whiteSpace: 'pre-line' }}
                    {...children}
                />
            </div>
        </div>
    )
}

export default Hero;