import clsses from './Card.module.css'

const Card = (props) => {
    return (
        <div className={clsses.card}>{props.children}</div>
    )
}

export default Card