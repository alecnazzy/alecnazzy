import "./App.css";
import Navbar from "./components/UI/navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/UI/footer";
import Skills from "./components/Skills";
import Photos from "./components/Photos";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <Projects />
      <Photos />
      <Footer />
    </div>
  );
}
