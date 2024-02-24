import "./App.scss";
import Header from "./Components/01Header/Header";
import Profile from "./Components/02Profile/Profile";
import About from "./Components/03About/About";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Profile />
      <About />
    </div>
  );
}

export default App;
