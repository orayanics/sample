import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sample from "./pages/Sample";
import Users from "./pages/UserAdd";
import List from "./pages/UserList";
import Detail from "./pages/UserDetail";
import Update from "./pages/UserUpdate";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* PAGES HERE */}
          <Route path="/" element={<Sample />} />
          <Route path="/list" element={<List />} />
          <Route path="/sample" element={<Users />} />
          <Route path="/list/:id" element={<Detail />} />
          <Route path="/list/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
