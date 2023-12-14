import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { movieItemSelector } from "../../../redux-tookit/selectors"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { editProductThunkAction } from "../../../redux-tookit/slides/MovieManagementSlice"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { IMG_URL } from "../../../services/common"


const schema = yup.object({
    title: yup.string().required('Vui lòng điền tiêu đề'),
    rating: yup.string().required('Không được bỏ trống'),
    voting: yup.string().required('Không được bỏ trống'),
    popularity:yup.string().required('Không được bỏ trống'),
    language:yup.string().required('Không được bỏ trống'),
    backdrop_path: yup.string().required('Vui lòng nhập đúng link ảnh'),
    overview: yup.string().required('Không được bỏ trống')
}) 


function EditMovie({ type }) {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    const dispatch = useDispatch()
    const MovieItem = useSelector(movieItemSelector)
    
    useEffect(() => {
        async function getMovieById() {
            setValue('title', MovieItem.title)
            setValue('rating', MovieItem.vote_average)
            setValue('voting', MovieItem.vote_count)
            setValue('popularity', MovieItem.popularity)
            setValue('language', MovieItem.original_language)
            setValue('overview', MovieItem.overview)
            setValue('backdrop_path',`${MovieItem.backdrop_path}`)
        }
        getMovieById()
    },[MovieItem])

    const handleEditMovie = (data) => {
        let editMovie = {
            ...MovieItem,
            ...data
        }
        dispatch(editProductThunkAction({type, editMovie}))
        reset()
        toast.success('Movie updated success')
    }
    return (
        <>
            <div className="navbarManager d-flex align-items-center mb-3" style={{ width: "100%", height: "100px" }}>
                <Link className="text-decoration-none text-white" to={`/Admin/${type}`}>Quay lại</Link>
            </div>
            <h3 className="text-primary">Sửa thông tin phim</h3>
            <form onSubmit={handleSubmit(handleEditMovie)} className="ms-3 me-3">
                <div className="mb-3 form-group">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className={`form-control form-control-lg ${errors?.title?.message ? 'is-invalid' : ''}`}  id="title" placeholder="title" {...register("title")} />
                      <span className="invalid-feedback ">{errors?.title?.message}</span>
                </div>

                <div className="mb-3">
                    <label for="Rating" className="form-label">Rating</label>
                    <input type="text" className={`form-control form-control-lg ${errors?.rating?.message ? 'is-invalid' : ''}`} id="Rating" placeholder="Rating"
                        {...register("rating")}
                    />
                      <span className="invalid-feedback">{errors?.rating?.message}</span>

                </div>
                <div className="mb-3">
                <label for="img" className="form-label">Ảnh</label> <br />
                    <img src={`${IMG_URL}${MovieItem.backdrop_path}`} style={{width:'200px',height:'200px'}} alt="" className="mb-3" />
                    <input type="text" className={`form-control form-control-lg ${errors?.backdrop_path?.message ? 'is-invalid' : ''}`} id="img" placeholder="Nhập vào link ảnh"
                        {...register("backdrop_path")}
                    />
                      <span className="invalid-feedback">{errors?.backdrop_path?.message}</span>

                </div>
                <div className="mb-3">
                    <label for="Voting" className="form-label">Voting</label>
                    <input type="text" className={`form-control form-control-lg ${errors?.voting?.message ? 'is-invalid' : ''}`} id="Voting" placeholder="Voting"
                        {...register('voting')}
                    />
                      <span className="invalid-feedback">{errors?.voting?.message}</span>

                </div>
                <div className="mb-3">
                    <label for="popularity" className="form-label">popularity</label>
                    <input type="text" className={`form-control form-control-lg ${errors?.popularity?.message ? 'is-invalid' : ''}`} id="popularity" placeholder="poplularity"
                        {...register('popularity')}
                    />
                      <span className="invalid-feedback">{errors?.popularity?.message}</span>

                </div>
                <div className="mb-3">
                    <label for="Languague" className="form-label">Languague</label>

                    <select
                        className="form-select form-select-lg"
                        {...register('language')}
                    >
                        <option value="en">en</option>
                        <option value="ja">ja</option>
                        <option value="ko">ko</option>
                        <option value="hi">hi</option>
                    </select>

                </div>
                <div className="mb-3 d-flex">
                    <label for="Overview" className="form-label me-2">Overview</label> 
                    <textarea className={`form-control form-control-lg ${errors?.overview?.message ? 'is-invalid' : ''}`} name="" id="" cols="50" rows="10" placeholder="Overview"
                        {...register('overview')}
                    />
                      <span className="invalid-feedback">{errors?.overview?.message}</span>
                </div>
                <div className="ms-3">
                <button type="submit" className="btn btn-primary me-2">Sửa</button> 
                <button type="button" className="btn btn-danger" onClick={()=>reset()}>Reset</button> 
                </div>
            </form>
        </>
    )
}

export default EditMovie