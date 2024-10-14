import "./styles/main.css";
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";
import vk from "./img/icons/vk.svg";
import instagram from "./img/icons/instagram.svg";
import twitter from "./img/icons/twitter.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import gitHub from "./img/icons/gitHub.svg";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div class="container">
          <div class="nav-row">
            <a href="./index.html" class="logo">
              <strong>Freelancer</strong> portfolio
            </a>

            <button class="dark-mode-btn">
              <img src={sun} alt="Light mode" class="dark-mode-btn__icon" />
              <img src={moon} alt="Dark mode" class="dark-mode-btn__icon" />
            </button>

            <ul class="nav-list">
              <li class="nav-list__item">
                <a
                  href="./index.html"
                  class="nav-list__link nav-list__link--active"
                >
                  Home
                </a>
              </li>
              <li class="nav-list__item">
                <a href="./projects.html" class="nav-list__link">
                  Projects
                </a>
              </li>
              <li class="nav-list__item">
                <a href="./contacts.html" class="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="header">
        <div class="header__wrapper">
          <h1 class="header__title">
            <strong>
              Hi, my name is <em>Roman</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div class="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="#!" class="btn">
            Download CV
          </a>
        </div>
      </header>

      <main className="section">
        <div class="container">
          <ul class="content-list">
            <li class="content-list__item">
              <h2 class="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div class="container">
          <div class="footer__wrapper">
            <ul class="social">
              <li class="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div class="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
