import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Catalog from "./page/Catalog/Catalog";
import Header from "./components/Header/Header"
import Home from "./page/Home/Home";
import Item from "./page/Item/Item";
import card from "./card.js"

function App() {
  const catalogItem = card
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
        {catalogItem.map((el) => {return <Route key={el.id} path={`/catalog/${el.id}`} element={<Item/>}/>})}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
