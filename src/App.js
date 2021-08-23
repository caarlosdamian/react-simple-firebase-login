import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./sections/Home";
import Singup from "./components/Singup";
import { AuthProvider } from "./Auth";
import PrivateRoutes from "./routes/privateRoutes/PrivateRoutes";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoutes exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/singup" component={Singup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
