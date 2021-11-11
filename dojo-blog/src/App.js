import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* All of our routes
          go inside Switch Component
          */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch> 
          {/*
          Switch component makes sure that
          only one route shows at any one time
          */}
        </div>
      </div>
    </Router>
  );
}

export default App;
