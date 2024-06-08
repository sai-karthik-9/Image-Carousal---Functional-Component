import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [Img, setImg] = useState(0);

    return (
      <div className="carouselContainer">
        <div className="inner" style={{ backgroundImage: `url(${images[Img].img})` }}>
          <div className="leftArrow" onClick={() => {Img > 0 && setImg(Img - 1);}}>
            <ArrowBackIosIcon style={{ fontSize: 20 }} />
          </div>
          <div className="container">
            <h1>{images[Img].title}</h1>
            <p>{images[Img].subtitle}</p>
          </div>
          <div className="rightArrow" onClick={() => {Img < images.length - 1 && setImg(Img + 1);}}>
            <ArrowForwardIosIcon style={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
    )
}

export default Carousel;