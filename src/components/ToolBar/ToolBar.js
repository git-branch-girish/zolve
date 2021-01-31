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
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/clipboard">Clipboard</a>
                    </li>
                    <li>
                        <a href="/selfie">Selfie</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
