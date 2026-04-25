
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
