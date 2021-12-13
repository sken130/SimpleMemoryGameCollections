import React from 'react';
import ImageButton from '../CustomComponents/ImageButton.js';
import { useParams, useNavigate, Outlet } from "react-router-dom";

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
                secondaryTextStyle={{fontSize: "2vw"}}
                onClick={() => {this.props.navigate("game1Start");}}>
                </ImageButton>

                <div style={{position:"absolute", bottom:0, fontSize: "1vw"}}>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com</a>
                </div>
            </div>

        )
    }
}

export default Game1Menu;
const WrappedGame1Menu = props => {
    const navigate = useNavigate();
  
    return <Game1Menu navigate={navigate}/>
  }

export {Game1Menu, WrappedGame1Menu};
