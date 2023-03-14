import "./ProjectGallery.css";
import Card from "../components/Card/Card";

const projects = [
  {
    title: "My Mars Mission",
    image: "./images/my-mars-mission.png",
    description:
      "A website for teenagers about Mars, which displays images of Mars from the NASA API. It has a multiple answer quiz, and creates and updates the user’s account, which stores and creates tickets to Mars",
    technologies:
      "JavaScript, React, Node.js, PostgreSQL, CSS, SQL, Bcrypt, Rest Api, Font Awesome",
    github: "https://github.com/ljenchik/my-mars-mission",
    live: "https://ljenchik.github.io/my-mars-mission",
  },
  {
    title: "Weather Dashbpoard",
    image: "./images/weather.png",
    description:
      ">A weather forecast application which displays current weather and 5-day forecast of the chosen city",
    technologies: "JavaScript, Open Weather API",
    github: "https://github.com/ljenchik/weather-dashboard",
    live: "https://ljenchik.github.io/weather-dashboard/",
  },
  {
    title: "Space Exploring",
    image: "./images/space-exploring.png",
    description:
      "Welcome to Space Exploring! It's a website about space for children and teenagers. The website allows users to explore interesting facts about the solar system, view space images taken by Mars rovers, and score in the solar system quiz",
    technologies:
      "JavaScript,Bootstrap, CSS, jQuery, Font Awesome, NASA Open API, The Solar System OpenData",
    github: "https://github.com/ljenchik/space-exploring",
    live: "https://ljenchik.github.io/space-exploring/",
  },
  {
    title: "School Departments",
    image: "./images/school-departments.jpeg",
    description:
      "This application displays a list of school departments, the number of employees and the average salary for each of these departments. It displays a list of employees, searches employees born on a specific date or in the period between two given dates as well as adds, edits or deletes departments and employees",
    technologies: "Typescript, Node.js, React, PostgreSQL, Bootstrap, CSS, SQL",
    github: "https://github.com/ljenchik/school-departments-ts",
    live: "",
  },
];

const ProjectGallery = () => {
  return (
    <><h1 className="projects-title">Projects</h1><div className="projects-container">
      {projects.map((project) => (
        <Card
          title={project.title}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          live={project.live} />
      ))}
    </div></>
  );
};

export default ProjectGallery;
