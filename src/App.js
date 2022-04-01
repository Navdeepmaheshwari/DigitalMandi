import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpForm } from "./Components/Login_SignUp_Forms/SignUpForm";
import { LoginForm } from "./Components/Login_SignUp_Forms/LoginForm";
import { Navbar } from "./Components/nav links/CNav";

import { Hero } from "./Components/hero-section/CHero";
import { FDashboard } from "./Components/Dashboard/FDashboard";
import { MDashboard } from "./Components/Dashboard/MDashboard";
import Addnote from "./Components/AddCrops";
import CropState from "./Context/Crops/CropState";
import { Card } from "./Components/card/Ccard";
import Notes from "./Components/Crops";
import { Header } from "./Components/Header";
import Realdashboard from "./Components/Realdash";

function App() {
  return (
    <div>
      <CropState>
        <Router>
          <Navbar />
          {/* <Alert/> */}
          <div className="scrollbar scrollbar-black bordered-black square thin">
            <div className="force-overflow"></div>
            <Switch>
              <Route exact path="/">
                <Hero />
              </Route>
              <Route exact path="/about"></Route>
              <Route exact path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/signup">
                <SignUpForm />
              </Route>
              <Route exact path="/fdashboard">
                <Header/>
                 <Realdashboard/>
              </Route>
              <Route exact path="/current">
                <Header/>
                <Notes/>
              </Route>
              <Route exact path="/mdashboard">
                <MDashboard />
              </Route>
              <Route exact path="/addcrop">
                <Header/>
                <Addnote />
              </Route>
            </Switch>
          </div>
        </Router>
      </CropState>
    </div>
  );
}

export default App;
