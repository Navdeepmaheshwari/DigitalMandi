import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpForm } from './Components/farmer forms/FSignUpForm';
import { LoginForm } from './Components/farmer forms/FLoginForm';
import {Navbar} from './Components/nav links/CNav';
import {Hero} from './Components/hero-section/CHero';

function App() {
  return (
    <div>
          <Router>
          <Navbar />
          {/* <Alert/> */}
          <div className="container">
            <Switch>
              <Route exact path="/">
                 <Hero/>
              </Route>
              <Route exact path="/about">
                
              </Route>
              <Route exact path="/login">
              <LoginForm/>
              </Route>
              <Route exact path="/signup">
              <SignUpForm/>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}



export default App;
