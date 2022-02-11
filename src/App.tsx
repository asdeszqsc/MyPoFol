import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import * as Pages from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="contents_position">
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/blog/*" element={<Pages.Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
