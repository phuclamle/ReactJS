import { useEffect, useRef, useState } from "react"
import React from "react";
import LogoMovie from '../../assets/images/movie_logo.png'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { SmoothHorizontalScrolling } from "../utils";
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieThunkAction } from "../../redux-tookit/slides/MovieSlice";
import { ComedyMovieSelector, HorrorMovieSelector, TopRateMovieSelector, TraditionalMovieSelector, TrendingMovieSelector, searchTextSelector } from "../../redux-tookit/selectors";
import { IMG_URL } from "../../services/common";
import ModalDetail from "./ModalDetail";

function TypeMovie({ name }) {
  let searchText = useSelector(searchTextSelector)
  const [showModal, setshowModal] = useState(false)
  const [modalDetail, setModalDetail] = useState({})
  let selector = ''
  let movies = []
  const dispatch = useDispatch()
  const sliderRef = useRef()
  const movieRef = useRef()
  let newName;


  useEffect(() => {
    dispatch(fetchMovieThunkAction(name))

  }, [])

  const handleShowDetail = (movie) => {
    setModalDetail(movie)
  }

  switch (name) {
    case 'TraditionalMovie':
      selector = TraditionalMovieSelector
      newName = 'Traditional Movie'
      break;
    case 'TrendingMovie':
      selector = TrendingMovieSelector
      newName = 'Trending Movie'
      break;
    case 'TopRateMovie':
      selector = TopRateMovieSelector
      newName = 'TopRate Movie'
      break;
    case 'HorrorMovie':
      selector = HorrorMovieSelector
      newName = 'Horror Movie'
      break;
    case 'ComedyMovie':
      selector = ComedyMovieSelector
      newName = 'Comedy Movie'
      break;
    default:
      break;
  }
  movies = useSelector(selector)

  const handleScrollRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft)
    }

  }

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft)
    }

  }
  if (searchText) {
    searchText = searchText.toLowerCase()
    movies = movies.filter((movie) => movie.title.toLowerCase().includes(searchText))
  }
  console.log(movies);
  return (
    movies.length > 0 ? (
      <div className="ContentsSection bg-black">
        <h1 className="heading">{newName}</h1>
        <div className="MoviesSlider" ref={sliderRef} style={{ gridTemplateColumns: `repeat(${movies.length}, 300px)` }}>
          <ModalDetail className="modal-detail" movie={modalDetail} setMovie={setModalDetail} />
          {

            movies.map((movie, index) => (
              <div key={index} className="movieItem" ref={movieRef} onClick={() => handleShowDetail(movie)}>
                <img src={`${IMG_URL}${movie.poster_path}`} alt="" />
              </div>
            ))
          }
        </div>
        <div className="btnLeft" >
          <FaChevronLeft onClick={handleScrollLeft} />
        </div>
        <div className="btnRight"  >
          <FaChevronRight onClick={handleScrollRight} />
        </div>
      </div>
    ) : (
      <div className="ContentsSection bg-black text-white fs-18">
         
      </div>
    )
  )
}


export default TypeMovie