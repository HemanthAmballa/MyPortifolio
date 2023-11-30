import React from "react";
import camera from "../images/hrmanth.png";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import ContactNEW from "./Contactnew";

function Home() {
  const nav = useNavigate();
  return (
    <div id="home">
      <div className="container text-center">
        <div className="row" style={{ textAlign: "start", paddingBottom: 0 }}>
          <div className="col-7" style={{ color: "white", marginTop: 50 }}>
            <br></br>
            <h1 style={{ fontSize: 70, textAlign: "start" }}>
              Hi, I'm <scan>Hemanth!</scan>
            </h1>
            <br></br>
            <h2 style={{ textAlign: "start", lineHeight: 1.6 }}>
              I am an <scan style={{ color: "blue" }}>Aspiring</scan> developer
              and have been trained in{" "}
              <scan style={{ color: "blue" }}>Frontend</scan> and{" "}
              <scan style={{ color: "blue" }}>Backend</scan> development with
              various technologies
            </h2>

            <br></br>
            <button
              class="button"
              onClick={() => {
                nav("/resume");
              }}
              style={{ marginRight: 80 }}
              type="button"
            >
              Resume
            </button>
            <button
              class="button"
              type="button"
              onClick={() => {
                nav("/contact");
              }}
            >
              Hire Me
            </button>
          </div>
          <div className="col-5" style={{ paddingBottom: 0 }}>
            <div className="circular--portraitt" style={{marginTop : 25,marginLeft :50}} ><img src={camera}  className="" alt=""/></div>
{/* 
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stop-color="rgba(248, 117, 55, 1)"
                    offset="0%"
                  ></stop>{" "}
                  <stop
                    id="stop2"
                    stop-color="rgba(251, 168, 31, 1)"
                    offset="100%"
                  ></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <image 
      width="500" 
      height="250" 
      href={camera} 
      clip-path="url(#sw-gradient)"
    />
              <path
                fill="none"
                d="M22.3,-26.4C28,-21.7,31.2,-13.9,34.1,-4.9C37.1,4.2,39.9,14.4,36.1,20.8C32.4,27.3,22.1,29.9,13.1,30.9C4.2,32,-3.5,31.4,-11.2,29.3C-18.9,27.2,-26.6,23.5,-30.9,17.3C-35.2,11.1,-36.1,2.3,-35.3,-7C-34.6,-16.2,-32.2,-25.9,-26.1,-30.5C-19.9,-35.1,-9.9,-34.6,-0.8,-33.6C8.3,-32.6,16.5,-31.1,22.3,-26.4Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                stroke-width="1"
                style={{transitionProperty: 'all',transitionDuration: 0.3,transitionTimingFunction: 'ease',transitionDelay: 0}}
                stroke="url(#sw-gradient)"
              ></path>{" "}
            </svg> */}
          </div>
        </div>
      </div>
      <div>
        <Projects></Projects>
        <About></About>
        <ContactNEW></ContactNEW>
      </div>
    </div>
  );
}

export default Home;
