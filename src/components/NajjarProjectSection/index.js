import Button from '../shared/Button'
import './NajjarProjectSection.scss'

const NajjarProjectSection = ({ children, title="Title", description, renderBottom, buttonLabel, to, backgroundColor, className, classNameContent, classNameRight, classNameLeft, ...rest}) => {
    return (
        <div className={`najjarProjectSection ${className}`} {...rest}>
            <div className={`najjarProjectSectionContent ${classNameContent}`}>
                <div className={`left ${classNameLeft}`}>
                    {title}
                </div>
                <div className={`right ${classNameRight}`}>
                    <div className='text'>
                        {description}
                    </div>
                    {renderBottom ? renderBottom : <></>}
                    {buttonLabel ?
                    <Button
                        className="button"
                        to={to}
                    >
                        {buttonLabel}
                    </Button>
                    :<></>}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default NajjarProjectSection;