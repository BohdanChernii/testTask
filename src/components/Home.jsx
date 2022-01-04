import React, { useState } from 'react';
import Modal from './Modal.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { faThumbsDown, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.scss';
import './carousel.scss';
import moviesData from '../imdb.json';
import Carousel from './Carousel';
import Header from './Header.jsx';
import { user, loginUser } from './user.js';
const Home = () => {
  const [arr, setArr] = useState(moviesData.slice(0, 20));
  const [active, setActive] = useState(false);
  const [movieIndex, setMovieIndex] = useState(0);
  const fetchMoreData = () => {
    const nextPage = moviesData.slice(arr.length, arr.length + 20);
    setTimeout(() => {
      setArr([...arr, ...nextPage]);
    }, 1500);
  };

  return (
    <>
      <Header />
      {window.innerWidth < 768 ? null : <Carousel moviesData={moviesData} />}

      <InfiniteScroll
        style={{ width: '100%' }}
        dataLength={arr.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="movies">
          <div className="movies-list">
            {arr.map((item, index) => (
              <div
                className="movies-list__item movie "
                key={item.id}
                onClick={() => {
                  setMovieIndex(index);
                }}
              >
                <img
                  src={item.poster}
                  alt={item.title}
                  className="movie-image"
                />
                <div className="movie-rating">
                  {item.imdbrating <= 7 ? (
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{ color: 'red' }}
                    ></FontAwesomeIcon>
                  ) : null}
                </div>
                <p className="movie-name">{item.title}</p>

                <button
                  className="getMoreInformation"
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                </button>

                <p className="movie-info">
                  Genre:{item.genre} | Director: {item.director} | Year:
                  {item.year}
                </p>
                {user.password === loginUser.password &&
                  user.email === loginUser.email && (
                    <Modal active={active} setActive={setActive}>
                      <h2>Information about this movie:</h2>
                      <hr />
                      <p className="modal-content__plot">{item.plot}</p>
                      <p className="modal-content__writer">
                        WRITER:{item.writer}
                      </p>
                      <p className="modal-content__actors">
                        ACTORS:{item.actors}
                      </p>
                      <hr />
                      <p className="modal-content__imdbRating">
                        RATING:{item.imdbrating}
                      </p>
                    </Modal>
                  )}
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default Home;
