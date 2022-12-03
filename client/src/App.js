import AppDetails from "./config";
import { AppRoutes } from "./config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";

// Components
import Landing from "./components/pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.app.landing} element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
