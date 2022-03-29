import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FSignUpForm } from './Components/farmer forms/FSignUpForm';
import { FLoginForm } from './Components/farmer forms/FLoginForm';
import {Navbar} from './Components/nav links/CNav';
import { MLoginForm } from './Components/merchant form/MLoginForm';
import { MSignUpForm } from './Components/merchant form/MSignUpForm';
import {Hero} from './Components/hero-section/CHero';
import { Dashboard } from './Components/Dashboard/Dashboard';

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
              <Route exact path="/flogin">
              <FLoginForm/>
              </Route>
              <Route exact path="/fsignup">
              <FSignUpForm/>
              </Route>
              <Route exact path="/msignup">
              <MSignUpForm/>
              </Route>
              <Route exact path="/mlogin">
              <MLoginForm/>
              </Route>
              <Route exact path="/dashboard">
              <Dashboard/>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}



export default App;
