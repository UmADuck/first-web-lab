import { useState } from 'react';
import Book from '../../assert/img/MainBook.webp';
import Card from '../Card/Card.jsx';
import './Main.scss';

function Main() {
    const [view, setView] = useState(false);
    const [text, setText] = useState("View more")
    const moreInfo = () => {
        if (text === "View more") {setText("View less")}
        if (text === "View less") {setText("View more")}
        setView(!view)
    }

    return (
        <main className='Main'>
            <div className='MainInformation'>
                <img src={Book} alt='Book' />
                <div>
                    <h1> Book </h1>
                    <p>Hello Friend. You are on a cool website created by an IoT student. Here you can buy different books by different authors, settings, etc. You can also sell your books here</p>
                </div>
            </div>
            <div className='MainCard'>
                <Card number='1' />
                <Card number='2' />
                <Card number='3' />
            </div>
            {view && <div className='MainCard'>
                <Card number='3' />
                <Card number='2' />
                <Card number='1' />
            </div>}
            <button  className='button-more' onClick={moreInfo}> {text} </button>
        </main>
    )
}

export default Main;