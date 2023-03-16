import "./ProjectGallery.css";
import Card from "../components/Card/Card";

const projects = [
  {
    title: "My Mars Mission",
    image: "./images/my-mars-mission.png",
    description:
      "A website for teenagers about Mars, which displays images of Mars from the NASA API. "
      + "It has a multiple answer quiz, and creates and updates the user’s account, which stores and creates tickets to Mars",
    technologies:
      "JavaScript, React, Node.js, PostgreSQL, CSS, SQL, Bcrypt, Rest Api, Font Awesome",
    github: "https://github.com/ljenchik/my-mars-mission",
    live: "https://ljenchik.github.io/my-mars-mission"
  },
  {
    title: "Weather Dashbpoard",
    image: "./images/weather-dashboard.png",
    description:
      "A weather forecast application which displays current weather and 5-day forecast of the chosen city",
    technologies: "JavaScript, Open Weather API",
    github: "https://github.com/ljenchik/weather-dashboard",
    live: "https://ljenchik.github.io/weather-dashboard/",
  },
  {
    title: "Space Exploring",
    image: "./images/space-exploring.png",
    description:
      "Space Exploring is a website about space for children and teenagers." +
      " It allows users to explore interesting facts about the solar system, " + 
      "view space images taken by Mars rovers, and score in the solar system quiz",
    technologies:
      "JavaScript,Bootstrap, CSS, jQuery, Font Awesome, NASA Open API, The Solar System OpenData",
    github: "https://github.com/ljenchik/space-exploring",
    live: "https://ljenchik.github.io/space-exploring/",
  },
  {
    title: "School Departments",
    image: "./images/school-departments.png",
    description:
      "This application displays a list of school departments, the number of employees " +
      "and the average salary for each of these departments. It displays a list of employees, "+
      "searches employees born on a specific date or in the period between two given dates",
    technologies: "Typescript, Node.js, React, PostgreSQL, Bootstrap, CSS, SQL",
    github: "https://github.com/ljenchik/school-departments-ts",
    live: "",
  },
  {
    title: "Whale Spotting",
    image: "./images/whale-spotting.png",
    description:
      "A website which encourages people to go on whale watching trips and track whales; TechSwitch Bootcamp team work",
    technologies: "React with TypeScript, PostgreSQL, CSS, Bootstrap",
    github: "https://github.com/techswitch-learners/whale-spotting-2022-apr",
    live: "",
  },
  {
    title: "Quiz",
    image: "./images/quiz.png",
    description:
      "This is a multiple choices quiz about JavaScript. "+
      "When a user clicks on a start button a timer starts and the first question appears. "+
      "Only one of the available answers is correct. If the answer clicked was incorrect then 10 seconds are subtracted from the timer.",
      technologies: "JavaScript",
      github: "https://github.com/ljenchik/quiz",
      live: "https://ljenchik.github.io/quiz/",
  },
  {
    title: "Bus Board",
    image: "./images/bus-board.png",
    description:
      "A console application which finds the two nearest bus stops by a given postcode and shows the next five buses due at each stop as well as displays instructions of how to get to the nearest stop",
      technologies: "Node.js, TFL API, Postman",
      github: "https://github.com/ljenchik/BusBoard",
      live: "",
  },
  {
    title: "Chessington",
    image: "./images/chessington.png",
    description:
      "A chess-based test-driven development exercise",
      technologies: "JavaScript",
      github: "https://github.com/ljenchik/Chessington",
      live: "",
  },
  {
    title: "Work Day Scheduler",
    image: "./images/work-day-scheduler.png",
    description:
      "A simple calendar application that allows a user to save events for each hour of one day. " + 
      "This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery",
      technologies: "JavaScript, HTML, CSS, jQuery",
      github: "https://github.com/ljenchik/work-day-scheduler",
      live: "https://ljenchik.github.io/work-day-scheduler/",
  },
  {
    title: "Team Profile Generator",
    image: "./images/team-profile-generator.png",
    description:
      "A Node.js command-line application which takes in information about employees on a software engineering team using the Inquirer package, then generates an HTML webpage that displays summaries for each person",
      technologies: "Node.js, Inquirer package",
      github: "https://github.com/ljenchik/team-profile-generator",
      live: "",
  },
  {
    title: "Readme Generator",
    image: "./images/readme-generator.png",
    description:
      "A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package",
      technologies: "Node.js, Inquirer package",
      github: "https://github.com/ljenchik/readme-generator",
      live: "",
  }
];

const ProjectGallery = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Project Gallery</h1><div className="projects-container">
      {projects.map((project) => (
        <Card
          title={project.title}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          live={project.live} />
      ))}
    </div></div>
  );
};

export default ProjectGallery;
