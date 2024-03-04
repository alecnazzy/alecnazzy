import "./App.css";
import Navbar from "./components/ui/navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/ui/footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
