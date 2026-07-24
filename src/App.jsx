import { useState, useEffect } from "react";
import 'remixicon/fonts/remixicon.css'
// import Navbar from "./components/Navbar/Navbar";

import Home from "./components/pages/Home/Home";
import Work from "./components/pages/Work/Work";
import About from "./components/pages/About/About";
import Resume from "./components/pages/Resume/Resume";
import Contact from "./components/pages/Contact/Contact";


import Loader from "./components/Loader/Loader";

import { Routes, Route } from "react-router-dom";
  
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loader time

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      
      
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;