import { Fragment } from "react";
import Article from "../../components/Acticle/Article";
import Filter from "../../components/Filter/Filter";
import "./Catalog.scss"

function Catalog() {
    const card = [1, 2, 3, 4, 5,]
    return (
        <Fragment>
            <Filter/>
            <main className="articleCard">
                {card.map((el, index) => {return <Article key={index} number={el}/>})}
            </main>
        </Fragment>
    );
}

export default Catalog