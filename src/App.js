import "./App.scss";

import Header from "./Components/01Header/Header";
import Profile from "./Components/02Profile/Profile";
import About from "./Components/03About/About";
import Skills from "./Components/04Skills/Skills";
import Projects from "./Components/05MyProjects/Projects";
import Contact from "./Components/06Contact/Contact";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div class="credit">
        Created by <span id="name">Mr. Butanee</span>
      </div>
    </>
  );
}

export default App;
