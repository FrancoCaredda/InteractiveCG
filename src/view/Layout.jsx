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
        <div id="page" className="container-fluid">
            <div className="row">
                <div id="side-bar" className="col-1">
                    <div id="logo">
                        <h2>InteractiveCG</h2>
                        <p>Learn computer graphics</p>
                    </div>
                    <div id="side-bar-nav">
                        <ul>
                            <li className="selected"><Link to="/" onClick={onLinkClicked}>Теорія</Link></li>
                            <li><Link to="/fractal" onClick={onLinkClicked}>Множина мандельброта</Link></li>
                            <li><Link to="/color" onClick={onLinkClicked}>Колірні моделі</Link></li>
                            <li><Link to="/movement" onClick={onLinkClicked}>Рух квадрата</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;