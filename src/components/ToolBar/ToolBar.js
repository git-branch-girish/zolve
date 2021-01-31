import { NavLink } from 'react-router-dom'
import SideMenu from "../SideMenu/SideMenu";
import "./ToolBar.css";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigator">
            <div />
            <div className="toggle-btn">
                <SideMenu click={props.drawerToggleClickHandler} />
            </div>
            <div className="toolbar_logo">
                <a href="/">Zolve</a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            
                            >Home
                        </NavLink>                    
                    </li>
                    <li>
                        <NavLink
                            to="/clipboard"
                            
                            >
                            Clipboard
                        </NavLink> 
                        <a href="/clipboard"></a>
                    </li>
                    <li>
                        <NavLink 
                            to="/Selfie"
                            
                            >
                            Selfie
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
