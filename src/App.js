import {Route,Routes,useLocation} from "react-router-dom"
import Main from "./components/Main";
import  Nav  from "./components/Nav";
import Characters from "./components/Characters";
import Details from "./components/Details";
import Login from "./components/Login";
//pathname = /
function App() {
  const location = useLocation()
  return (
    <div>
      <div className="portada"></div>
      {location.pathname !== "/" && <Nav/>}
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/home" element={<Main/>} />
    <Route path="/personajes/:pages" element={<Characters/>} />
    <Route path="/personajes/details/:type/:details" element={<Details/>} />
    <Route path="*" element={<Main/>} />
   </Routes>
    </div>
  );
}

export default App;
