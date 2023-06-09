import './intro.scss'
import React from "react";
import {useEffect,useRef} from "react";
import { init } from 'ityped'
const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Frontend Developer", "UI/UX Designer", "Worpress Developer"],
      });
    }, []);
    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="image-container"><img src="assets/man.png" alt="man" /></div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there,I'am</h2>
                    <h1>Ahmed Hamed</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <img src="assets/down.png" alt="arrow-down" />
                </a>
            </div>
        </div>
    )
}

export default Intro