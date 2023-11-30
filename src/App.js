import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes} from "react-router-dom"
import NavBar from './componentes/NavBar'
import Home from "./Screens/Home"
import Contact from "./Screens/Contact"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
        <NavBar />
      <Routes>
          <Route />
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App
