import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../../assert/img/img.svg";
import { useCurrency } from "../../jsx/Context";
import { addToCart } from "../../store/slice";
import './Information.scss';

function Information() {
    const navigation = useNavigate();
    const [card, setCard] = useState(useCurrency())
    const dispatch = useDispatch()
    const goBack = () => {
        navigation(-1)
    }

    const addElementToCart = () => {
        let id = parseInt(window.location.pathname.split(/.catalog./)[1]) - 1
        dispatch(addToCart(card[id]))
    }

    return (
        <main className="Information">
            <div className="main">
                <img src={img} alt="img for camera" />
                <div className="textInformation">
                    <div className="textInformation--characteristic">
                        <h3 className="textInformation--characteristic--1">1 characteristic</h3>
                        <h3 className="textInformation--characteristic--2">2 characteristic</h3>
                    </div>
                    <div className="textInformation--main">
                        <h1>Some awesome title </h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                            commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat </span>
                    </div>
                    <div className="InformationInput">
                        <div>
                            <label htmlFor="cars">Countable field</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label>Selectable Field</label>
                            <select name="lab" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Navigation">
                <p>Price 432432</p>
                <div>
                    <button onClick={goBack}>Go Back</button>
                    <button style={{ color: '#FFFFFF', background: '#424242' }} onClick={addElementToCart}>Add Card</button>
                </div>
            </div>

        </main>
    )
}

export default Information;