import { Route, BrowserRouter, Routes } from "react-router-dom"

export default function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/post" element={<h1>Post</h1>} />
            </Routes>        
        </BrowserRouter>
    );
}