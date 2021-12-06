import React from 'react';

class ImageButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="submit" style={{width: "35%"}}>
                <img src={this.props.imagePath} alt="This button is missing imagePath" style={{width: "90%"}} />
                {this.props.secondaryText && <div>{this.props.secondaryText}</div>}
            </button>
        )
    }
}

export default ImageButton;