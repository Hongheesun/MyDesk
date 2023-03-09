import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Note from "./component/OpenNote/OpenNote";
function App() {
  return (
    <BrowserRouter basename="/MyDesk">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
