import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Mylinks from "./components/mylinks/Mylinks"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Works/>
       <Mylinks/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
