import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sample from "./pages/Sample";
import Users from "./pages/UserAdd";
import List from "./pages/UserList";
import Detail from "./pages/UserDetail";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
