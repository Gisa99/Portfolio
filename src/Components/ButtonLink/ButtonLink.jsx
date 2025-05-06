import './ButtonLink.scss'

const ButtonLink = ({link, children}) =>{
    return(
        <a href={link} target='_blank'><button>{children}</button></a>
    )
}

export default ButtonLink