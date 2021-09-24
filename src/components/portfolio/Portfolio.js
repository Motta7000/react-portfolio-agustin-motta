import { React} from 'react'
import "./Portfolio.scss"

function Portfolio() {





    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>

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
