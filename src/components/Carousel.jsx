import React, { useState } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Carousel = ({ moviesData }) => {
  const [current, setCurrent] = useState(3);
  const length = moviesData.length;

  const nextSlide = () => {
    setCurrent(current === length - 3 ? 0 : current + 3);
  };
  const prevSlide = () => {
    setCurrent(current === length - 3 ? 0 : current - 3);
  };
  return (
    <div className="carousel">
      <button
        className="arrow"
        disabled={current < 6 ? true : false}
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </button>

      <section className="slider">
        {moviesData.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.id}
          >
            {index + 1 === current && (
              <div className="slider-item">
                <img
                  src={slide.poster}
                  alt="travel image"
                  className="slider-item__image"
                />
                <p className="slider-item__info">
                  {slide.plot.substr(0, 50)}...
                </p>
              </div>
            )}
            {index + 2 === current && (
              <div className="slider-item">
                <img
                  src={slide.poster}
                  alt="travel image"
                  className="slider-item__image"
                />
                <p className="slider-item__info">
                  {slide.plot.substr(0, 50)}...
                </p>
              </div>
            )}
            {index + 3 === current && (
              <div className="slider-item">
                <img
                  src={slide.poster}
                  alt="travel image"
                  className="slider-item__image"
                />
                <p className="slider-item__info">
                  {slide.plot.substr(0, 50)}...
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
      <button className="arrow">
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={nextSlide}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};
export default Carousel;
