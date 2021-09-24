import React from 'react'
import "./Topbar.scss"
import { Mail, Person } from '@material-ui/icons';
import { useState } from "react"
function Topbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
            <div className={"topbar " + ((menuOpen) ? "active" : "")}>
                <div className="wrapper" >
                    <div className="left">
                        <a href="#intro" className="logo">genius.</a>
                        <div className="itemContainer">
                            <Mail className="icon" />
                            <span>+5491112121</span>
                        </div>

                        <div className="itemContainer">
                            <Person className="icon" />
                            <span>motta.agustin6@gmail.com</span>
                        </div>
                    </div>
                    <div className="right">

                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"menu " + ((menuOpen) ? "active" : "")}>
                <ul className="hamburger-list">
                    <li>
                        <a onClick={() => setMenuOpen(!menuOpen)} className="hamburger-item" href="#App"><h1>Home</h1></a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(!menuOpen)} className="hamburger-item" href="#portfolio"><h1>Portfolio</h1></a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(!menuOpen)} className ="hamburger-item" href="#works"><h1>Works</h1></a>
                    </li>
                    <li>
                        <a onClick={() => setMenuOpen(!menuOpen)}  className="hamburger-item"  href="#contact"><h1>Contact</h1></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Topbar
