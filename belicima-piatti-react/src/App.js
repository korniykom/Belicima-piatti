import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menupage from "./pages/Homepage";
import Infopage from "./pages/Infopage";
import Accountpage from "./pages/Accountpage";
import Loadingpage from "./pages/Loadingpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes className="main-block">
        <Route path="menu" element={<Menupage />} />
        <Route path="info" element={<Infopage />} />
        <Route path="account" element={<Accountpage />} />
        <Route path="loading" element={<Loadingpage />} />
      </Routes>
    </BrowserRouter>
  );
}
