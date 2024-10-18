import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGithub = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="GitHub Icon" />
      GitHub repo
    </a>
  );
};

export default BtnGithub;
