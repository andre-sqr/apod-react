import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <div className="container" >
    <div className="stars" ></div>
    <div className="stars2" ></div>
  </div> 
      <Header />
      <Section />
    </div>
  );
}

export default App;
