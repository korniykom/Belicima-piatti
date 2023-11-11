import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Menupage from "./pages/Homepage";
import Infopage from "./pages/Infopage";
import Accountpage from "./pages/Accountpage";
import Loading from "./components/Loading/Loading";
import DetailedDish from "./pages/DetailedDish";

export default function App() {
  return (
    <BrowserRouter>
      <Routes className="main-block">
        <Route path="dish/:category" element={<DetailedDish />} />
        <Route path="menu" element={<Menupage />} />
        <Route path="info" element={<Infopage />} />
        <Route path="account" element={<Accountpage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="/" element={<Nav backLink="/" title="Перші страви" />} />
      </Routes>
    </BrowserRouter>
  );
}
