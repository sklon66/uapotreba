import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { selectLanguage } from "./redux/AppReducer/selectors.js";
import {
  Container,
} from 'reactstrap';


// components
import Text from "./components/Text/Text";


// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// services
import { getData } from "./api/apiData";
import { useData } from "./hooks/useData";
import Home from "./pages/Home";
import Region from "./pages/Region";
import City from "./pages/City";
import Header from "./components/Header";
import Legend from "./components/Legend";
import Footer from "./components/Footer";


const App = () => {
  const language = useSelector(selectLanguage);

  const dispatch = useDispatch();

  useEffect(() => {
      getData(dispatch);
  }, []);

  useData();

  return (
      <>
        <Header/>
        <Legend/>
        <Container style={{ marginTop: 36, marginBottom: 100 }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/region-:name" element={<Region />} />

                    <Route path="/city-:name" element={<City />} />
                </Routes>
            </Router>
        </Container>
        <Footer />
      </>
  );
};

export default App;
