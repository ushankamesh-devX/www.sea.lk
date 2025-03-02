import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App bg-black">
      {/* <div className="App bg-gradient-to-br from-black via-gray-950 to-black animated-rainbow-bg h-screen"> */}
      <div className=" absolute top-0 left-0 right-0 opacity-50">

      <section className="wrapper ">
        <div className="hero"></div>
        <div className="content">
          <input type="checkbox" id="switch" checked></input>
        </div>
      </section>
      </div>
      <Navbar/>
      <Landing/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
