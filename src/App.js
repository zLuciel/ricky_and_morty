import {Route,Routes} from "react-router-dom"
import Main from "./components/Main";
import  Nav  from "./components/Nav";
import Characters from "./components/Characters";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <div className="portada"></div>
      <Nav/>
   <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/personajes/:pages" element={<Characters/>} />
    <Route path="/personajes/details/:details" element={<Details/>} />
   </Routes>
    </div>
  );
}

export default App;
