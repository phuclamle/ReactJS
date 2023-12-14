import React, { useEffect, useState } from "react";
import { ComedyMovieSelector, HorrorMovieSelector, TopRateMovieSelector, TraditionalMovieSelector, TrendingMovieSelector, movieItemSelector, moviePaginationSelector } from "../../../redux-tookit/selectors";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, IMG_URL } from "../../../services/common";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import NavbarManagement from "../NavbarManagerment/NavbarManagement";
import Footer from "../../Footer/Footer";
import AdminLayout from "../../../layouts/AdminLayout";
import { addNewProductThunkAction, fetchMovieItembyIdThunkAction, fetchMoviePaginationThunkAction, removeMoviebyIdThunkAction, removeProductByIdThunkActon } from "../../../redux-tookit/slides/MovieManagementSlice";
import EditProductModel from "./EditMovie";
import EditMovie from "./EditMovie";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Swal from "sweetalert2"


const schema = yup.object({
  title: yup.string().required(),
  backdrop_path: yup.string().required(),
  popularity:yup.string().required(),
  language:yup.string().required(),
  overview: yup.string().required()
}) 


function MovieCategory({ type }) {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [direction, setDirection] = useState()
  const [jump, setJump] = useState(page)
  const [totalPage, setTotalPage] = useState(0)
  const [pageNumbers, setPageNumbers] = useState([])
  const [start, setStart] = useState(1)
  const [end, setEnd] = useState(3)
  const [movieNumber, setMovieNumber] = useState(0)
  const [selectProduct, setSelectProduct] = useState({})
  const [displayAddForm, setDisplayAddForm] = useState(false)
 

  useEffect(() => {
    dispatch(fetchMoviePaginationThunkAction({
      _type: type,
      _page: page,
      _limit: pageSize
    }))
    setPageNumbers(generatePageNumber(pagination.totalPage, start, end))
  }, [page, pageSize, start, end,type])
  
  
  let { movieList, pagination } = useSelector(moviePaginationSelector)
  
  const handleFirst = (e) => {
    e.preventDefault();
    setPage(1)
    setDirection('first')
  }
  const handleNext = (e) => {
    e.preventDefault()
    if (page < pagination.totalPage) {
      if (page >= 2) {
        setStart(page - 1)
        setEnd(page + 1)
      }
      setPage(page + 1)
      setDirection('next')
    }
  }
  const handlePrevious = (e) => {
    e.preventDefault()
    setPage(page - 1)
    setDirection('prev')
  }

  const handleLast = (e) => {
    e.preventDefault()
    setPage(pagination.totalPage)
    setDirection('last')
  }

  const handleChangePage = (e, pageNumber) => {
    e.preventDefault()
    if (pageNumber > page) {
      setDirection('next')
    }
    if (pageNumber < page) {
      setDirection('prev')
    }
    setPage(pageNumber)
  }


  const handleDeleteMovie = (movieItem) => {
    dispatch(removeMoviebyIdThunkAction({ type, movieItem }))

  }
  const handleSelectMovie = (movie) => {
    dispatch(fetchMovieItembyIdThunkAction({ type, movie }))
  }
  


  const { register, handleSubmit, reset, formState: { error }, setValue } = useForm({
    resolver: yupResolver(schema)
  })
  const handleAddNewProduct = (data) => {
    let newMovie = {
      ...data,
      vote_average: 0,
      vote_count: 0
    }
    console.log(newMovie);
    dispatch(addNewProductThunkAction({ type, newMovie }))
    reset()

  }

  let newName = type.replace(/([a-z])([A-Z])/g, '$1 $2');

  return (
    <>
      <AdminLayout>
        <div className="d-flex justify-content-end me-4"><button className="btn btn-sm btn-success" onClick={() => setDisplayAddForm(!displayAddForm)}>Add new Movie</button></div>

        {
          displayAddForm &&
          <form onSubmit={handleSubmit(handleAddNewProduct)}>
            <div className="mb-3">
              <label for="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" placeholder="title"
                {...register('title')}
              />
            </div>
            <div className="mb-3">
              <label for="popularity" className="form-label">Ảnh</label>
              <input type="text" className="form-control" id="popularity" placeholder="Ảnh"
                {...register('backdrop_path')}
              />
            </div>
            <div className="mb-3">
              <label for="img" className="form-label">popularity</label>
              <input type="text" className="form-control" id="popularity" placeholder="popularity"
                {...register('popularity')}
              />
            </div>
            <div className="mb-3">
              <label for="Languague" className="form-label">Languague</label>

              <select
                className="form-select form-select-sm"
                {...register('language')}
              >
                <option value="en">en</option>
                <option value="ja">ja</option>
                <option value="ko">ko</option>
                <option value="hi">hi</option>
              </select>

            </div>
            <div className="mb-3">
              <label for="Overview" className="form-label">Overview</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Overview"
                {...register('overview')}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        }
        <h1 className="text-primary" idSection="">{newName}</h1>
        <table className="table table-striped movie-table table-sm table-bordered">
          <thead>

            <tr>
              <th className="text-center">Title</th>
              <th>Rating</th>
              <th>Voting</th>
              <th>popularity</th>
              <th>Language</th>
              <th className="text-center">Overview</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              movieList.map((movie) => (
                <tr key={movie.id}>
                  <td className="align-middle">
                    <img style={{ width: '150px', height: "100%" }} src={`${IMG_URL}${movie.backdrop_path}`} alt="" />
                    <p className="ms-2">{movie.title}</p></td>
                  <td className="text-center">{movie.vote_average}</td>
                  <td className="text-center">{movie.vote_count}</td>
                  <td className="text-center">{movie.popularity}</td>
                  <td className="text-center">{movie.original_language}</td>
                  <td>{movie.overview}</td>
                  <td className="text-center pt-4">
                    <Link to={`/Admin/${type}/EditMovie`}> <FaEdit role="button" className="text-primary" onClick={() => handleSelectMovie(movie)} /></Link>
                    <MdDelete role="button" className="text-danger" onClick={() => handleDeleteMovie(movie)} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <nav className="d-flex justify-content-end me-5">
          <ul className="pagination">
            <li className="page-item">
              <a className={`page-link ${page <= 1 ? 'disabled' : ''}`} href="#" tabindex="-1" onClick={(e) => handleFirst(e)} >First</a>
            </li>
            <li className="page-item">
              <a className={`page-link ${page <= 1 ? 'disabled' : ''}`} href="#" tabindex="-1" onClick={(e) => handlePrevious(e)} >Previous</a>
            </li>
            {
              pageNumbers.map((item) => (
                <li key={item} className={`page-item ${item == page ? 'active' : ''}`}>
                  <a href="" className="page-link" onClick={(e) => handleChangePage(e, item)}>{item}</a>
                </li>
              ))
            }
            <li className="page-item">
              <a className={`page-link ${page >= pagination.totalPage ? 'disabled' : ''}`} href="#" onClick={(e) => handleNext(e)}>Next</a>
            </li>
            <li className="page-item">
              <a className={`page-link ${page >= pagination.totalPage ? 'disabled' : ''}`} href="#" onClick={(e) => handleLast(e)} >Last</a>
            </li>
          </ul>
        </nav>
      </AdminLayout>
    </>
  )

}

function generatePageNumber(number, start, end) {
  let pageNumbers = []
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
}

export default MovieCategory