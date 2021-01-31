import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
    let drawerClasses = ["side-drawer"];

    if (props.show) {
        drawerClasses = ["side-drawer", "open"];
    }
    return (
        <nav className={drawerClasses.join(" ")}>
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
        </nav>
    );
};
export default sideDrawer;
