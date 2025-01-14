import style from "./App.module.css";
import About from "./components/about/about.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Fotter from "./components/footer/footer.jsx";

function App() {
  return (
    <div className={style.App}>
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Fotter />
    </div>
  );
}

export default App;
