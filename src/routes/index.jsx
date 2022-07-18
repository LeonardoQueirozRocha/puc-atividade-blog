import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "../pages/home";

export default function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<h1>Post</h1>} />
            </Routes>
        </BrowserRouter>
    );
}