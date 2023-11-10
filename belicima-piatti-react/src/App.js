import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Menupage from "./pages/Homepage";
import Infopage from "./pages/Infopage";
import Accountpage from "./pages/Accountpage";
import Loading from "./components/Loading/Loading";
// import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes className="main-block">
        <Route path="menu" element={<Menupage />} />
        <Route path="info" element={<Infopage />} />
        <Route path="account" element={<Accountpage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="/" element={<Nav backLink="/" title="Головна" />} />
        <Route path="/dish/:id" element={<Dish />} />

        {/* <Route
          path="dish/Перші страви"
          element={<CategoryPage category="Перші страви" />}
        />
        <Route
          path="dish/Другі страви"
          element={<CategoryPage category="Другі страви" />}
        />
        <Route
          path="dish/М'ясні страви"
          element={<CategoryPage category="М'ясні страви" />}
        />
        <Route
          path="dish/Десерти"
          element={<CategoryPage category="Десерти" />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
