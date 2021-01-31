import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect } from "react-router-dom";
import "./index.css";
import Toolbar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideMenu/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
//Pages
import Home from './pages/Home/Home';
import Clipboard from './pages/Clipboard/Clipboard';
import Selfie from './pages/Selfie/Selfie';
import PageNotFound from './pages/404/PageNotFound';

class App extends React.Component {
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
              <Route exact path="/clipboard" component={Clipboard}/>
              <Route exact path="/selfie" component={Selfie}/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/404" component={PageNotFound} />
              <Redirect to="/404" component={PageNotFound}/>
            </Switch>
          
        </main>
        </Router >
      </div>
      
    );
  }
}

export default App;