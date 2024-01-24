import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sample from "./pages/Sample";
import Users from "./pages/UserAdd";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* PAGES HERE */}
          <Route path="/" element={<Sample />} />
          <Route path="/sample" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
