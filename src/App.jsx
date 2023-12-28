import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header";
import AnimatedRoutes from "./pages/animatedRoutes";



function App() {
 
return (
  <Router>
    <AnimatedRoutes />
  </Router>
)
}

export default App
