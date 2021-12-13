import React from 'react';
import ImageButton from './CustomComponents/ImageButton.js';
import { useParams, useNavigate, Outlet } from "react-router-dom";

import homeIcon from "./Images/buttons/home.png"

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ImageButton
                style={{maxWidth: "10%", float: "left"}}
                imagePath={homeIcon}
                secondaryText="Home"
                secondaryTextStyle={{fontSize: "0.7vw"}}
                onClick={() => {this.props.navigate("home");}}
                ></ImageButton>

                <div style={{float: "right", fontSize: "0.2vw", "line-height": "8vw"}}>
                    Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </nav>
        )
    }
}

const WrappedNavigationBar = props => {
    const navigate = useNavigate();
  
    return <NavigationBar navigate={navigate}/>
  }

export default WrappedNavigationBar;
export {NavigationBar, WrappedNavigationBar};
