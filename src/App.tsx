import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import WesteType from "./features/waste type/wasteType";
import SelectSkip from "./features/select skip/selectSkip";
import PermitCheck from "./features/permit check/permitCheck";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/weste-type" />} />
        {/* Step 1 */}
        <Route path="/weste-type" element={<WesteType />} />
        {/* Step 2 */}
        <Route path="/select-skip" element={<SelectSkip />} />
        {/* Step 3 */}
        <Route path="/permit-check" element={<PermitCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
