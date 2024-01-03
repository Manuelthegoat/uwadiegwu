import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Routing from "./Routes";

function App() {
  return (
    <>
      <main>
        <Sidebar />
        <Routing />
      </main>
    </>
  );
}

export default App;
