import React from "react";
import Project from "../Project";

const Portfolio = () => {
  const project = [
    {
      //name of projects with the class of 'recent',
      title: "Reel Search",
      stack: "Server-Side API's",
      image_url: "https://i.imgur.com/YYHZGPR.png",
      image_alt: "Preview of Reel Search Project",
      github_link: "https://github.com/JamesXalis/Reel_Search",
      deployed_link: "https://jamesxalis.github.io/Reel_Search/index.html",
    },
    {
      //name of projects with the class of 'recent',
      title: "Horiseon",
      stack: "Front-End/HTML/CSS",
      image_url: "https://i.imgur.com/ObtDNrn.png",
      image_alt: "Preview of Horiseon Project",
      github_link: "https://github.com/MychaelC/code-refactor",
      deployed_link: "https://mychaelc.github.io/code-refactor/",
    },
    {
      //name of projects with the class of 'recent',
      title: "Weather Dashboard",
      stack: "JavaScript/Server-side API",
      image_url: "https://i.imgur.com/iIJjEv1.png",
      image_alt: "Preview of Weather Dashboard Project",
      github_link: "https://github.com/MychaelC/weather-dash",
      deployed_link: "https://mychaelc.github.io/weather-dash/",
    },
    {
      //name of projects with the class of 'recent',
      title: "Code Quiz Project",
      stack: "Front-End/JavaScript",
      image_url: "https://i.imgur.com/EtFa6b0.png",
      image_alt: "Preview of Code Quiz Project",
      github_link: "https://github.com/MychaelC/code-quiz",
      deployed_link: "https://mychaelc.github.io/code-quiz/",
    },
    {
      //name of projects with the class of 'recent',
      title: "Day Planner",
      stack: "3rd Party API/jQuery",
      image_url: "https://i.imgur.com/7les7UM.png",
      image_alt: "Preview of Day Planner Project",
      github_link: "https://github.com/MychaelC/day-planner",
      deployed_link: "https://mychaelc.github.io/day-planner/",
    },
    {
      //name of projects with the class of 'recent',
      title: "Pro README Generator",
      stack: "Node.js/Inquirer",
      image_url: "https://i.imgur.com/xmkZQYi.png",
      image_alt: "Preview of Readme Generator Project",
      github_link: "https://github.com/MychaelC/Professional-README-Generator",
      deployed_link:
        "https://drive.google.com/file/d/1nLeSkCwbCb7MAn9rCKAt_rKWTOi5dUYz/view",
    },
    {
      //name of projects with the class of 'recent',
      title: "Note Taker",
      stack: "Express.js",
      image_url: "https://i.imgur.com/c3OxwmC.png",
      image_alt: "Preview of Note Taker Project",
      github_link: "https://github.com/MychaelC/note-taker",
      deployed_link: "https://enigmatic-harbor-66176.herokuapp.com/",
    },
    {
      //name of projects with the class of 'recent',
      title: "Bootcamp Fitness",
      stack: "MVC/Handlebars.js",
      image_url: "https://i.imgur.com/dipUbkl.png",
      image_alt: "Preview of Bootcamp Fitness Project",
      github_link: "https://github.com/daniel-valean/bootcamp-fitness",
      deployed_link: "https://blooming-forest-36438.herokuapp.com/login",
    },
    {
      //name of projects with the class of 'recent',
      title: "Text Editor",
      stack: "PWA Progressive Web Application",
      image_url: "https://i.imgur.com/kX9zBrv.png",
      image_alt: "Preview of Text Editor Project",
      github_link: "https://github.com/MychaelC/text-editor-pwa",
      deployed_link: "https://guarded-crag-04701.herokuapp.com/",
    },
    {
      title: "Menthol",
      stack: " MERN Application",
      image_url: "https://i.imgur.com/sqUl7Al.png",
      image_alt: "Preview of Menthol Project",
      github_link: "https://github.com/FunnyLookingFish/Menthol",
      deployed_link: "https://mentholfinance.herokuapp.com/",
    },
  ];

  return (
    <div id="portfolio">
      <h1 id="main-section-header">My Portfolio</h1>
      <hr id="main-section-hr" />
      <div id="portfolio-wrapper">
        {project.map((item, id) => {
          return (
            <Project
              key={id}
              title={item.title}
              stack={item.stack}
              image_url={item.image_url}
              image_alt={item.image_alt}
              github_link={item.github_link}
              deployed_link={item.deployed_link}
              nameOfClass={item.nameOfClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
