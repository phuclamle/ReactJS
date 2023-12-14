import React from "react";
import { IMG_URL } from "../../services/common";
import { IoCloseSharp } from "react-icons/io5";


export default function ModalDetail({ movie,setMovie }) {
    const handleCloseDetail = ()=>{
        setMovie({})
    }
    return (
        <>
            <div className="modal fade show" style={{ display: `${movie.id ? 'block' : 'none'}` }} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg detail-model">
                    <div className="modal-content ">
                        <div className="modal-header d-flex justify-content-end">
                            <IoCloseSharp className="text-white" role="button" onClick={handleCloseDetail}/>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                          <div className="col-md-7">
                                <h4 style={{color:'white'}}>{ movie.title}</h4>
                                <span style={{color:'white'}} className="me-4 text-success"  >Rating:{movie.vote_average}</span>
                                <span className="text-warning" style={{color:'white'}}>Popularity:{movie.popularity}</span>
                                <div className="text-danger">Voting: {movie.vote_count}</div>
                                <div className="text-secondary">Language: {movie.original_language}</div>
                                <div style={{color:'white'}}>
                                    Overview:
                                    <p style={{color:'white'}}>{movie.overview}</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <img className="img-info" src={`${IMG_URL}${movie.backdrop_path}`} alt="" />
                            </div>
                          </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
