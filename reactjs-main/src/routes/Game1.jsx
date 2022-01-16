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
    constructor(props) {
        super(props);
        this.state = {isStarted: false};
    }

    startNewGame() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        var imageFileNames = [];

        for (let i = 0; i < 20; i++) {
            imageFileNames.push(`fruit${getRandomInt(5) + 1}.png`);
        }

        this.setState({
            isStarted: true,
            imageFileNames: imageFileNames,
            currentImagePosition: 0
        }, () => {this.loadCurrentImage()})

    }

    loadCurrentImage() {
        console.log(`loadCurrentImage - this.state.imageFileNames: ${this.state.imageFileNames}`)
        let imageName = this.state.imageFileNames[this.state.currentImagePosition];
        console.log(`loadCurrentImage - imageName: ${imageName}`)
        import(`../Images/fruits/${imageName}`).then(image => {
            this.setState({
                loadedImage: image
            });
        });
    }

    giveAnswerAndNextImage() {
        this.setState({
            currentImagePosition: this.state.currentImagePosition + 1
        }, () => {this.loadCurrentImage()})
    }

    render() {
        var loadedImage = this.state.loadedImage;
        // console.log(`loadedImage ${loadedImage}`);
        var imageDiv = loadedImage ? <img src={loadedImage.default}></img> : null;

        if (this.state.isStarted) {
            return (
                <div className="Game1-Main" style={{width: "100%"}}>
                    {imageDiv}
                    <div>
                        <button style={{marginLeft: "10%", marginRight: "10%"}} onClick={()=>{this.giveAnswerAndNextImage()}}>Same</button>
                        <button style={{marginLeft: "10%", marginRight: "10%"}} onClick={()=>{this.giveAnswerAndNextImage()}}>Different</button>
                    </div>
                    
                </div>
            )            
        } else {
            return (
                <button style={{marginLeft: "10%", marginRight: "10%"}} onClick={()=>{
                    this.startNewGame()
                }}>Start</button>
            );
        }


    }
}

export default Game1;