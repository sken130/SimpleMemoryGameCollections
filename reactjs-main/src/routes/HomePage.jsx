// import logo from './logo.svg';
import image_IsFirstImageDifferentFromSecondImage from "../Images/buttons/IsFirstImageDifferentFromSecondImage.png"
import ImageButton from '../CustomComponents/ImageButton.js';
// import { CompoundButton } from '@fluentui/react/lib/Button';
// import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { useParams, useNavigate } from "react-router-dom";

// import './App.css';

function HomePage() {
  let navigate = useNavigate();

  return (
        <ImageButton
          style={{width: "35%"}}
          imagePath={image_IsFirstImageDifferentFromSecondImage}
          secondaryText="1. Is second image different from first image?"
          secondaryTextStyle={{fontSize: "2vw"}}
          onClick={() => {navigate("/game1")}}></ImageButton>
  );
}

export default HomePage;
