import { Component} from 'react';
import { NavLink } from 'react-router-dom';
import SideMenu from "../SideMenu/SideMenu";
import "./ToolBar.css";

class Toolbar extends Component{

    render(){
        return(
            <header className="toolbar">
                <nav className="toolbar_navigator">
                    <div />
                    <div className="toggle-btn">
                        <SideMenu click={this.props.drawerToggleClickHandler} />
                    </div>
                    <div className="toolbar_logo">
                        <a href="/">Zolve</a>
                    </div>
                    <div className="spacer" />
                    <div className="toolbar_navigation-items">
                        <nav className="navbar">
                            <NavLink
                                exact
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/">Home</NavLink>
                            <NavLink
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/clipboard">Clipboard</NavLink>
                            <NavLink
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to="/selfie">Selfie</NavLink>
                        </nav>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Toolbar;

