import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Filters } from "./components/Filters/Filters";
import { FILTER_CONFIG } from "./config/filter.config";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Filters config={FILTER_CONFIG} />} />
      </Routes>
    </div>
  );
}

export default App;
