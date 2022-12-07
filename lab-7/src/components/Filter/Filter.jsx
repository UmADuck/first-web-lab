import { Fragment } from "react";
import "./Filter.scss"

function Filter() {
    return (
        <Fragment>
            <form>
                <div>
                    <select>
                        <option>Filter 1</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        <option>Item 4</option>
                    </select>
                    <select>
                        <option>Filter 3</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        <option>Item 4</option>
                    </select>
                    <select>
                        <option>Filter 2</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        <option>Item 4</option>
                    </select>
                </div>
                <button type="submit">Apply</button>
            </form>
        </Fragment>
    )
}

export default Filter;