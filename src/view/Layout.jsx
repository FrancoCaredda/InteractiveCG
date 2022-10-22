import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./theme/layout.css";

function Layout() {
    const onLinkClicked = (e) => {
        var menuElements = document.querySelector("div#side-bar-nav ul");

        menuElements.childNodes.forEach((node) => {
            node.classList.remove("selected");
        })

        e.target.parentElement.classList.add("selected");
    };

    return (
        <div id="page">
            <div id="side-bar">
                <div id="logo">
                    <h2>InteractiveCG</h2>
                    <p>Learn computer graphics</p>
                </div>
                <div id="side-bar-nav">
                    <ul>
                        <li className="selected"><Link to="/" onClick={onLinkClicked}>References</Link></li>
                        <li><Link to="/fractal" onClick={onLinkClicked}>Mandelbrot set</Link></li>
                        <li><Link to="/color" onClick={onLinkClicked}>Color models</Link></li>
                        <li><Link to="/" onClick={onLinkClicked}>Movement</Link></li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    );
}

export default Layout;