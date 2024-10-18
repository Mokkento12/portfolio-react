import "./style.css";

const Project = ({ project }) => {
  return (
    <li className="project">
      <a href={project.gitHubLink}>
        <img src={project.img} alt="Project img" className="project__img" />
        <h3 className="project__title">{project.title}</h3>
      </a>
    </li>
  );
};

export default Project;
