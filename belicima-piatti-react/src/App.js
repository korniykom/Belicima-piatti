import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menupage from "./pages/Homepage";
import Infopage from "./pages/Infopage";
import Accountpage from "./pages/Accountpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes class="main-block">
        <Route path="menu" element={<Menupage />} />
        <Route path="info" element={<Infopage />} />
        <Route path="account" element={<Accountpage />} />
      </Routes>
    </BrowserRouter>
  );
}
