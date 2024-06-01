import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./../pages/NotFound/NotFound";
import Home from "./../pages/Home/Home";
import About from "./../pages/About/About";
import Accomodation from "../pages/Accomodation/Accomodation";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/annonce/:annonceId" element={<Accomodation />} />
        <Route exact path="/Apropos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
