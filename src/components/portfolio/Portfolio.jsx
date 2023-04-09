import "./portfolio.scss";
import React from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { useEffect } from "react";
import { vanillaPortfolio, reactPortfolio, designPortfolio } from "../../Data";
const Portfolio = () => {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Front End Vanilla",
    },
    {
      id: "React",
      title: "React",
    },
    {
      id: "ui",
      title: "UI design",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "ui":
        setData(designPortfolio);
        break;
      case "frontend":
        setData(vanillaPortfolio);
        break;
      case "React":
        setData(reactPortfolio);
        break;
      default:
        setData(vanillaPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="content">
        <ul>
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              selected={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="items-container">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt={item.id} />
              <h3>{item.title}</h3>
              <a href={item.url} target="_blank">View Design</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
