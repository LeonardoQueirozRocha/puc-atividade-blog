import React from "react"
import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a className="logo" href="/">
                    <h3>Meu Blog</h3>
                </a>
            </div>
            
            <div>
                <a href="/">Home</a>
                <a href="/about">Sobre</a>
                <a href="/contact">Contato</a>
                <a href="/culture">Cultura</a>
            </div>
        </nav>
    )
}