import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonPage";
import NavBar from "./components/UI/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
