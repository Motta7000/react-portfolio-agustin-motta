import { React, useEffect, useState } from 'react'
import "./Portfolio.scss"
import PortfolioList from "../portfoliolist/portfolio"
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data"
function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content"
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                break;

        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            {/*<ul>
                {list.map((i) => (
                    <PortfolioList title={i.title} id={i.id} active={selected === i.id} selected={selected} setSelected={setSelected} />
                ))}
            </ul>*/}

            <div className="container">
                <div className="item">
                    <a href="https://github.com/Motta7000/JuegosAPI-master" >

                        <img onclick='console.log("Hello")' src="assets/matematicas.PNG" alt="Rev studio app" />

                        <h3>Math games (2020)</h3>
                    </a>
                </div>
                <div className="item">
                    <a href="https://www.youtube.com/watch?v=XmQ__P91m-Y"  >
                        <img onclick='console.log("Hello")' src="assets/turistear.PNG" alt="Rev studio app" />
                        <h3>Virtual Turism (2021)</h3>
                    </a>
                </div>
                <div className="item">
                    <a href="https://github.com/Motta7000/react-native-mysql-tasks" >
                        <img src="assets/tasks2.PNG" alt="Rev studio app" />
                        <h3>Task list app (2021)</h3>
                    </a>
                </div>

                <div className="" href="https://www.google.com/" >

                </div>

            </div>
        </div>
    )
}

export default Portfolio
