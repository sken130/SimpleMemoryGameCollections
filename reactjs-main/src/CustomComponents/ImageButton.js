import React from 'react';

class ImageButton extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        
        return (
            <button type="submit" style={this.props.style} onClick={this.props.onClick}>
                <img src={this.props.imagePath} alt="This button is missing imagePath" style={{width: "90%"}} />
                {this.props.secondaryText && <div style={this.props.secondaryTextStyle}>{this.props.secondaryText}</div>}
            </button>
        )
    }
}


export default ImageButton;