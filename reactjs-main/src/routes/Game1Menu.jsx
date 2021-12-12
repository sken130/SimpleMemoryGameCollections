import React from 'react';
import ImageButton from '../CustomComponents/ImageButton.js';
import {
    useLocation,
    NavLink,
    Outlet,
    useSearchParams,
  } from 'react-router-dom';
import fruitsIcon from "../Images/buttons/fruits.png"

import './Game1Menu.css';

class Game1Menu extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Game1Menu-Main" style={{width: "100%"}}>
                <ImageButton
                style={{width: "35%"}}
                imagePath={fruitsIcon}
                secondaryText="Fruits"
                secondaryTextStyle={{fontSize: "2vw"}}></ImageButton>

                <div style={{position:"absolute", bottom:0, fontSize: "1vw"}}>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com</a>
                </div>
            </div>

        )
    }
}

export default Game1Menu;