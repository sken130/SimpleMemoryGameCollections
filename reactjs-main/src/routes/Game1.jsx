import React from 'react';
import ImageButton from '../CustomComponents/ImageButton.js';
import {
    useLocation,
    NavLink,
    Outlet,
    useSearchParams,
  } from 'react-router-dom';
import fruitsIcon from "../Images/buttons/fruits.png"

class Game1 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Game1-Main" style={{width: "100%"}}>
                Game 1 start
            </div>

        )
    }
}

export default Game1;