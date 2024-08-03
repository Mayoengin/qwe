import React from "react";
import "../css/Projects.css";

import stockPredictorImage from "../images/stock.png";
import ecgClassification from "../images/ecg.jpg";
import nurse from "../images/nurslink.PNG";
import employee from "../images/employee.jpeg";
import githubLogo from "../images/github.png";
import game from "../images/game.jpeg";
import car from "../images/car-app.jpeg";
import todo from "../images/to-do-list.jpeg";
import energy from "../images/energy.webp";

const projects = [
  {
    title: "Text Adventure Game",
    description:
      "This text adventure game consists of a player that represents a human, who makes certain decisions to achieve their goal. Add controls and different commands to deliver a rich and immersive story.",
    image: game,
    github: "https://github.com/Mayoengin/text_adventure_game",
  },
  {
    title: "Employee Registration App",
    description:
      "Employee Registration App Angular 18.api usage, dynamic entry, inline Editing in Angular",
    image: employee,
    github: "https://github.com/Mayoengin/-Employee-Registration-app",
  },
  {
    title: "Stock Predictor",
    description:
      "Created a stock predictor using Python and Flask for backend framework as well as HTML and CSS for frontend, while also handling real-time data retrieval and LLM model integration.",
    image: stockPredictorImage,
    github: "https://github.com/Mayoengin/stock_prices_prediction",
  },
  {
    title: "ECG Classification Model",
    description:
      "A deep neural network with residual blocks (DNN-RB) for classifying ECG signals into six types of heartbeats. Using the MIT-BIH Arrhythmia dataset, the model inputs segmented ECG signals and outputs 6 types of classifications.",
    image: ecgClassification,
    github: "https://github.com/Mayoengin/ecg_classification",
  },
  {
    title: "Nurse Link Mobile App",
    description:
      "Developing a mobile application that facilitates the connection between the nurses and the people who need them at home on a regular basis. (Uber for nurses).",
    image: nurse,
    github: "https://github.com/Mayoengin/nurslink_1",
  },
  {
    title: "Car Rental App",
    description:
      "A car Rental app with 2 main components.1) Cars where you can view the current cars and add a new car to your database.2)renting wher you can select one or more of the cars from the databse to rent",
    image: car,
    github: "https://github.com/Mayoengin/Car_rental_project",
  },
  {
    title: "to do List App",
    description:
      "A to do list where you enter you task with a validation factor,add and delete. the purpose of this small project was to get familiar with angular",
    image: todo,
    github: "https://github.com/Mayoengin/to-do-list",
  },  {
    title: "Energy estimator Calculator",
    description:
      "After conducting intensive research on profiling the energy consumption of CNN models on an STM-32 microcontroller, I developed a calculator that estimates the energy consumption of a CNN model.",
    image: energy,
    github: "https://github.com/Mayoengin/energy-estimator",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">My Portfolio</h2>
      <h3 className="projects-subheader">Awesome Projects</h3>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <img src={githubLogo} alt="GitHub" className="github-icon" />
              </a>
            </div>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
