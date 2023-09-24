import './styles/base.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

