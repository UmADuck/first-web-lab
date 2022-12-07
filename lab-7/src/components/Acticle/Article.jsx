import img from "../../assert/img/img.svg"
import "./Article.scss"

function Article({ number }) {
    return (
        <div className="cardItem">
            <p>Item {number}</p>
            <img src={img} alt={"img"} />
            <div className="textCard">
                <h2>Amazing stuff</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui </span>
            </div>
            <button>Viev more</button>
        </div>
    )
}

export default Article;