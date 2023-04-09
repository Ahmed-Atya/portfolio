import React from 'react'
import { useState } from 'react';
import './works.scss'
const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img:
          "https://cdn.dribbble.com/users/4196864/screenshots/14002337/media/e39537ce73ec9bc50565934c9d7ebde7.png?compress=1&resize=1000x750&vertical=top",
      },
     
      {
        id: "3",
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "4",
        icon: "./assets/writing.png",
        title: "Branding",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
      {
        id: "5",
        icon: "./assets/mobile.png",
        title: "Ui design",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://cdn.dribbble.com/users/4196864/screenshots/13986352/media/5f0a2def799bd47abe7b3043be717de9.png?compress=1&resize=1000x750&vertical=top",
      },
     
    ];
  
    const handleClick = (way) => {
      way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    
    return (
      <div className="works" id="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="info-container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    );
}

export default Works