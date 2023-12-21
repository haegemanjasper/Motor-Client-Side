import React from "react";
import Slider from "react-slick";
import bannerImage from "../../images/banner.jpg";
import bannerImage3 from "../../images/banner3.jpg";
import bannerImage4 from "../../images/banner4.jpg";
import bannerImage5 from "../../images/banner5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/extra.css";

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
  };

  const images = [bannerImage4, bannerImage3, bannerImage5, bannerImage];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
