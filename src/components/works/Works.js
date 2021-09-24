import { React, useState } from 'react'
import "./Works.scss"

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "I am experienced in HTML, CSS, JavaScript and libraries like React which this website was built upon",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "I have done some courses where i learned to make my own React Native app using MySQL as the database",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/teamwork.png",
      title: "Working as a team",
      desc:
        "I like working in a team environment, working in groups and explaining someone who doesn’t understand how to do something how to do it because by teaching you can understand more",
      img:
        "./assets/peerProgramming.jpg",
    },
  ];
  const handleClick = (way) => {
    switch (way) {
      case "left":
            if(currentSlide>0)
            {
              setCurrentSlide(currentSlide-1);
            }
            else
            {
              setCurrentSlide(data.length-1);
            }
        break;
      case "right":
        
        if (currentSlide < data.length-1)
        {
          setCurrentSlide(currentSlide+1);
        }
        else
        {
          setCurrentSlide(0)
        }
        break;

        default:
          break;
    }

  }
  return (
    <div className="Works" id="works">
      <div className="slider" style={{ 
        transform: `translateX(-${currentSlide * 100}vw)` 
        }}>
        {data.map((i) => {
          return <div className={"container"}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={i.icon} alt="" />
                  </div>
                  <h1 className="text">{i.title}</h1>
                  <p className="text">{i.desc}</p>
                 {/* <h4 className="text"><a href="https://www.google.com/">Projects</a></h4>*/}
                </div>
              </div>
              <div className="right">
                <div className="imgContainer">
                  <img src={i.img} alt="web">

                  </img>

                </div>


              </div>
            </div>
          </div>
        })}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  )
}

export default Works
