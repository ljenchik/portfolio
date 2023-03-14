import "./ProjectGallery.css";
import Card from "../components/Card/Card";

const projects = [];


const ProjectGallery = () => {
  return (
    <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <Card />
    </div>
  );
}

export default ProjectGallery;
