import {React,useEffect,useRef} from 'react'
import "./intro.scss"
import {init} from 'ityped'

function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            strings:["Developer","Designer","Programmer"],
            showCursor:true,
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/motta.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div >
                    <h2>Hi there, I´m</h2>
                    <h1>Agustín Fabio, Motta</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
             {/*
              <a href="#portfolio">
                    <img src="assets/down.png" alt="arrow pointing down" />
                </a>
             */}  
            </div>
        </div>
    )
}

export default Intro
