import { Fragment, useState } from "react";
import "./Filter.scss";
import axios from "axios";

function Filter({ sendDataToParent }) {
    const [pagesValue, setPagesValue] = useState("Pages");
    const [authorValue, setAuthorValue] = useState("Author");
    const [card, setCard] = useState([]);

    const filterCard = (event) => {
        axios.get("http://localhost:9999/books").then((response) => {
            setCard(response.data)
        });
        event.preventDefault();
        let findCard = card;
        let left = parseInt(pagesValue.toString().split(",")[0]);
        let right = parseInt(pagesValue.toString().split(",")[1]);
        if (pagesValue === "Pages" && authorValue === "Author") { findCard = card }
        if (pagesValue !== "Pages" && authorValue === "Author") { findCard = card.filter((el) => el.pagesNumber >= left && el.pagesNumber <= right) }
        if (pagesValue === "Pages" && authorValue !== "Author") { findCard = card.filter((el) => el.author === authorValue) }
        if (pagesValue !== "Pages" && authorValue !== "Author") { findCard = card.filter((el) => el.pagesNumber >= left && el.pagesNumber <= right && el.author === authorValue) }
        sendDataToParent(findCard);
    }

    return (
        <Fragment>
            <form>
                <div>
                    <select onChange={(event) => { setPagesValue(event.target.value) }}>
                        <option multiple={true} value={"Pages"}>Pages</option>
                        <option multiple={true} value={["0", "50"]}>To 50</option>
                        <option multiple={true} value={["50", "100"]}>From 50 to 100</option>
                        <option multiple={true} value={["100", "200"]}>From 100 to 200</option>
                        <option multiple={true} value={["200", "3000"]}>From 200 ...</option>
                    </select>
                    <select onChange={(event) => { setAuthorValue(event.target.value) }}>
                        <option value={"Author"}>Author</option>
                        <option value={"Shakespear"}>Shakespear</option>
                        <option value={"Veres"}>Veres</option>
                        <option value={"god"}>god</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <button type="submit" onClick={filterCard}>Apply</button>
            </form>
        </Fragment>
    )
}

export default Filter;