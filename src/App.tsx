import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Note from "./component/OpenNote/OpenNote";
// import Message from "./component/Message/Message";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/note" element={<Note />} />
        {/* <Route path="/message" element={<Message />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
