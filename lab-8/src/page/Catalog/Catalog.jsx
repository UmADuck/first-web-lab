import { useEffect } from "react";
import { Fragment, useState } from "react";
import card from "../../card";
import Article from "../../components/Acticle/Article";
import Filter from "../../components/Filter/Filter";
import "./Catalog.scss";

function Catalog() {
    const [search, searchSet] = useState("");
    const [cardItem, setCardItem] = useState(card);

    const getValue = (event) => {
        searchSet(event.target.value);
    }

    const sendDataToParent = (cardFromChildren) => {
        setCardItem(cardFromChildren)
        console.log(cardFromChildren);
    }

    useEffect(() => {
        const funcSearch = () => {
            if (search === '') {
                setCardItem(card);
            } else {
                let foundCard = card.filter((card) => {
                    return card["author"].search(search) !== -1
                });
                setCardItem(foundCard);
            }
        }
        funcSearch();
    }, [search])

    return (
        <Fragment>
            <input type="text" className="SearchBox" placeholder="🔍" onChange={getValue} />
            <Filter sendDataToParent={sendDataToParent}/>
            <main className="articleCard">
                {cardItem.map((el) => { return <Article key={el.id} number={el.id} text={el.author} /> })}
            </main>
        </Fragment>
    );
}

export default Catalog