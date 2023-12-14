import React, { useState } from "react";
import Movie_logo from '../../assets/images/movie_logo.png'
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import {  useScrollY } from "../hooks/useScroolY";
import { useDispatch } from "react-redux";
import filterSlice from "../../redux-tookit/slides/FilterSlice";
function Navbar() {
    const dispatch = useDispatch()
    const scrollY = useScrollY()

    return (
        
        <div className={`container-fluid nav d-flex ${scrollY>50 ? 'bg-black':'transparent'}`} style={{height:'80px'}}>
            
                <img sizes={20} className="col-md-1 logo" src={Movie_logo} alt="" />
            

            <div className="col-md-9 d-flex align-items-center p-3 gap-2 nav-search">
                <CiSearch className="iconSearch" />
                <input type="text" onInput={(e)=>dispatch(filterSlice.actions.setSearchText(e.target.value))} placeholder="Tìm kiếm tên diễn viên, bộ phim" />
            </div>

              <div className="col-md-2 d-flex justify-content-end align-items-center">
                <Link to={'/Admin/TraditionalMovie'}>
                    <RxAvatar size={30}/>
                </Link>
            </div> 
        </div>
    )
}

export default Navbar