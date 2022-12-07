import './Card.scss';

function Card(props) {
    const {
        number
    } = props
    return (
        <div className='Card'>
            <img src={require(`../../assert/img/Book${number}.png`)} alt={`img${number}`} />
            <h2>Tile {number} Book</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
        </div>
    )
}

export default Card;