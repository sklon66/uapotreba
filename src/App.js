import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from "./pages/Home";
import Region from "./pages/Region";
import City from "./pages/City";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// services
import { getData } from "./api/apiData";

const App = () => {
  const dispatch = useDispatch();
  const isLoader = useSelector((state) => state.app.isLoader);

  useEffect(() => {
      getData(dispatch);
  }, []);


  return (
      <>
        <Header/>
        {(isLoader) ? <Loader /> : (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/region-:name" element={<Region />} />

                    <Route path="/city-:name" element={<City />} />
                </Routes>
            </Router>
            )
        }

        <Footer />
      </>
  );
};

export default App;
