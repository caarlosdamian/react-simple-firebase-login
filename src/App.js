import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./sections/Home";
import Singup from "./components/Singup";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/singup" component={Singup} />
      </div>
    </Router>
  );
}

export default App;
