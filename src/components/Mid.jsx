import React from "react";
import "./Mid.css";
import { Slider } from "@mui/material";
import { Chart as ChartJS ,defaults } from "chart.js/auto";
import { Bar, Doughnut,Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive= true;

defaults.plugins.title.display=true;
defaults.plugins.title.align="start";
defaults.plugins.title.font.size=20;
defaults.plugins.title.color="black";

 
const Mid = () => {
  return (
    <div className="mainMid">
      <div className="bothBox">
        <div className="smallBoxdiv">
          <div className="smallBoxes">
            <div className="smallBoxImg">
              <img
                src="https://www.pinclipart.com/picdir/big/117-1177864_png-file-four-squares-icon-clipart.png"
                alt="icons"
              />
            </div>
            <h2>5</h2>
            <p>Total Projects</p>
          </div>
          <div className="smallBoxes">
            <div className="smallBoxImg">
              <img
                src="https://th.bing.com/th/id/OIP.OpZKz1xRTKCMiG3CuKdUaAAAAA?w=474&h=474&rs=1&pid=ImgDetMain"
                alt="icons"
              />
            </div>
            <h2>1</h2>
            <p>Completed</p>
          </div>
          <div className="smallBoxes">
            <div className="smallBoxImg">
              <img
                src="https://www.shutterstock.com/image-vector/reduce-reuse-circle-arrow-round-260nw-2258984911.jpg"
                alt="icons"
              />
            </div>
            <h2>3</h2>
            <p>Ongoing</p>
          </div>
          <div id="tomato" className="smallBoxes">
            <div className="smallBoxImg">
              <img
                src="https://static-00.iconduck.com/assets.00/warning-triangle-icon-2048x2046-cn3vk959.png"
                alt="icons"
              />
            </div>
            <h2 id="whiteColor">1</h2>
            <p id="whiteColor"> Delayed</p>
          </div>
          <div className="smallBoxes">
            <div className="smallBoxImg">
              <img
                src="https://img.88icon.com/download/jpg/20200729/266f3f702f900b24da673d920c6b2358_512_512.jpg!bg"
                alt="icons"
              />
            </div>
            <h2>5</h2>
            <p>Employees</p>
          </div>
        </div>
        <div className="largeBox">
          <div className="box1"><Line

          data= {{
            labels: ["19 June", "20 June", "21 June", "22 June", "23 June", "24 June", "25 June",""],
            datasets: [
              {
                label: " Total Revenue",
                data: [200,1000, 3500, 3200, 4200, 5500, 6500,6450],
                borderColor: "teal",
                fill: false,
              },
            ],
           } }
           options={{
            plugins:{
              title:{
                text:"Total Revenue",
                // position:"bottom"
              }
            }
          }}
          /></div>
          <div className="box2"><Doughnut

data= {{
  labels: ["Over Budget", "On Budget", "Under Budget"],
  datasets: [
    {
      
      data: [19, 33, 48],
      backgroundColor: ["red", "blue", "teal"],
      label:"Budget",
      
    },
  ],
}}
options={{
  plugins:{
    title:{
      text:"Total Budget"
    }
  }
}}
/></div>

        </div>
      </div>
      <div className="rightBox">
        <div className="fontName">Team Mood</div>
        <div className="Icon">
          <img
            className="profilePic"
            alt="image"
            src="https://i.pinimg.com/originals/19/6e/53/196e53be93f1be62e3d9bba8e25d8bb3.jpg"
          />
          <div className="Name">
            Andrea
            <p>UX junior</p>
          </div>
        </div>
        <Slider
          className="sliderWidth"
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <div className="Icon">
          <img
            className="profilePic"
            alt="image"
            src="https://i.pinimg.com/originals/19/6e/53/196e53be93f1be62e3d9bba8e25d8bb3.jpg"
          />
          <div className="Name">
            Alvaro
            <p>Back End Developer</p>
          </div>
        </div>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />

        <div className="Icon">
          <img
            className="profilePic"
            alt="image"
            src="https://i.pinimg.com/originals/19/6e/53/196e53be93f1be62e3d9bba8e25d8bb3.jpg"
          />
          <div className="Name">
            Juan
            <p>UX senior</p>
          </div>
        </div>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />

        <div className="Icon">
          <img
            className="profilePic"
            alt="image"
            src="https://i.pinimg.com/originals/19/6e/53/196e53be93f1be62e3d9bba8e25d8bb3.jpg"
          />
          <div className="Name">
            Jose
            <p>Marketing</p>
          </div>
        </div>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />

        <div className="Icon">
          <img
            className="profilePic"
            alt="image"
            src="https://i.pinimg.com/originals/19/6e/53/196e53be93f1be62e3d9bba8e25d8bb3.jpg"
          />
          <div className="Name">
            Maria
            <p>UX junior</p>
          </div>
        </div>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

export default Mid;
