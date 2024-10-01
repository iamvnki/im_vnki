import { Header } from "./assets/componet/Header"
import { BrowserRouter, Routes, Route,} from "react-router-dom"
import { About } from "./assets/componet/About"
import { Project } from "./assets/componet/Project"
import { Contact } from "./assets/componet/Contact"
import { Footer } from "./assets/footer"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="About" element={ <About/>} />
      <Route path="Project" element={ <Project/>} />
      <Route path="Contact" element={ <Contact/>} />
    </Routes>
    </BrowserRouter>
    <Footer />
    
    </>
  )
}

export default App
