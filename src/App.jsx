import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Booklist from "./components/Booklist";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNavBar firstText="Home" secondText="About" thirdtText="Browse" />
      <Welcome />
      {/* <AllTheBooks /> */}
      <Booklist books={fantasy} />
    </>
  );
}

export default App;
