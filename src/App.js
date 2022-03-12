import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// services
import { getData } from "./api/apiData";
import { useData } from "./hooks/useData";
import Home from "./pages/Home";
import Region from "./pages/Region";
import City from "./pages/City";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      getData(dispatch);
  }, []);

  useData();

  return (
      <>
        <Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/region-:name" element={<Region />} />

                <Route path="/city-:name" element={<City />} />
            </Routes>
        </Router>
        <Footer />
      </>
  );
};

export default App;
