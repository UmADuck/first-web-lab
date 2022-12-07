import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Catalog from "./page/Catalog/Catalog";
import Header from "./components/Header/Header"
import Home from "./page/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
