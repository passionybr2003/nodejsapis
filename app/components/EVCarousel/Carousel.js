import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import EvergentLogo from 'images/Evergent-logo.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function EVCarousel(props) {
  return (
    <Carousel
      autoPlay={props.autoPlay}
      dynamicHeight={props.dynamicHeight}
      showIndicators={props.showIndicators}
      showArrows={props.showArrows}
    >
      {props.imagesList.map((eachImage) => (
        <div key={eachImage.imageName}>
          <img alt={props.defaultImage} src={eachImage.imageSource} />
          <p className="legend">{`${eachImage.imageName || 'Image Name'}`}</p>
        </div>
      ))}
    </Carousel>
  );
}

EVCarousel.defaultProps = {
  defaultImage: { EvergentLogo },
  autoPlay: false,
  dynamicHeight: true,
  showIndicators: false,
  showArrows: true,
};

EVCarousel.propTypes = {
  imagesList: PropTypes.array.isRequired,
  defaultImage: PropTypes.any,
  autoPlay: PropTypes.bool,
  dynamicHeight: PropTypes.bool,
  showIndicators: PropTypes.bool,
  showArrows: PropTypes.bool,
};

export default EVCarousel;
