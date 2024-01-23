import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./pages/animatedRoutes";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-PGMJGV7H'
}

TagManager.initialize(tagManagerArgs)

function App() {
  window.dataLayer.push({
    event: 'pageview'
  });
 
return (
  <Router>
    <AnimatedRoutes />
  </Router>
)
}

export default App
