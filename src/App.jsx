import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path="/" element = {
              <>
              <Home />
              <Services />
              <Subscribe />
              </>
            }/>

            <Route path="/contact" element = {<Contact />}/>
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App

