import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "../pages/home";
import Navbar from "../components/navbar";

export default function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}