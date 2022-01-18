import React from 'react';
import ImageButton from '../CustomComponents/ImageButton.js';
import {
    useLocation,
    NavLink,
    Outlet,
    useSearchParams,
  } from 'react-router-dom';
import fruitsIcon from "../Images/buttons/fruits.png"

const ANS_SAME = "SAME";
const ANS_DIFFERENT = "DIFFERENT";

class Game1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStarted: false, isComplete: false};
    }

    startNewGame() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        var imageFileNames = [];

        var noOfImagesToShow = 21;
        for (let i = 0; i < noOfImagesToShow; i++) {
            imageFileNames.push(`fruit${getRandomInt(5) + 1}.png`);
        }

        this.answers = [];
        this.setState({
            isStarted: true,
            imageFileNames: imageFileNames,
            currentImagePosition: 0
        }, async () => {
            await this.loadImageByPosition(0);
            setTimeout(() => {
                this.loadImageByPosition(1);
            }, 3000)
        })

    }

    loadImageByPosition(imagePosition) {
        return new Promise(resolve => {
            console.log(`loadImageByPosition - imagePosition: ${imagePosition}`)
            let imageName = this.state.imageFileNames[imagePosition];
            console.log(`loadImageByPosition - imageName: ${imageName}`)
            import(`../Images/fruits/${imageName}`).then(image => {
                this.setState({
                    currentImagePosition: imagePosition,
                    loadedImage: image
                }, () => { resolve('resolved'); });
            });
        });
    }

    giveAnswerAndNextImage(answerStr) {
        let oldPosition = this.state.currentImagePosition;
        let nextPosition = this.state.currentImagePosition + 1;
        this.answers.push({oldPosition: oldPosition, nextPosition: nextPosition, answerStr: answerStr});

        if (this.state.imageFileNames[nextPosition]) {
            this.loadImageByPosition(nextPosition);
        } else {
            this.setState({
                isComplete: true
            })
        }
    }

    render() {
        var loadedImage = this.state.loadedImage;
        // console.log(`loadedImage ${loadedImage}`);
        var imageDiv = loadedImage ? <img src={loadedImage.default}></img> : null;

        if (this.state.isStarted) {
            if (this.state.isComplete) {
                console.log(`this.answers`, this.answers);
                return (
                    <div className="Game1-Main" style={{width: "100%"}}>
                        <div>
                            Game complete!
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="Game1-Main" style={{width: "100%"}}>
                        {imageDiv}

                        {this.state.currentImagePosition > 0 ? 
                            <div>
                                Is this image the same as the previous image?
                                <button style={{marginLeft: "10%", marginRight: "10%"}} onClick={()=>{this.giveAnswerAndNextImage(ANS_SAME)}}>Same</button>
                                <button style={{marginLeft: "10%", marginRight: "10%"}} onClick={()=>{this.giveAnswerAndNextImage(ANS_DIFFERENT)}}>Different</button>
                            </div>
                            :
                            <div>
                                Remember this image
                            </div>
                        }
                        
                    </div>
                )
            }          
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