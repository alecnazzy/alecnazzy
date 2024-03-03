import "./App.css";
import Navbar from "./components/UI/navbar";
import Profile from "./components/Profile/profile";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
