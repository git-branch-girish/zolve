import React, { Component } from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect } from "react-router-dom";
import Toolbar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideMenu/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import "./index.css";

//Pages
import Home from './pages/Home/Home';
import Clipboard from './pages/Clipboard/Clipboard';
import Selfie from './pages/Selfie/Selfie';
import PageNotFound from './pages/404/PageNotFound';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/clipboard" component={Clipboard}/>
                <Route path="/selfie" component={Selfie}/>
                <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" component={PageNotFound}/>
              </Switch>
            
          </main>
        </Router >
      </div>
    );
  }
}

export default App;