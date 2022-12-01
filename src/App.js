import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black h-screen">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
