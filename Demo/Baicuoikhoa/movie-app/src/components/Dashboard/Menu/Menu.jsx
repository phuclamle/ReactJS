import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
function Menu({navbar,setNavbar}){
    return(
       <>
        <div className={`sidebar ${navbar ? '':'none_sidebar'}`} >
        <div className="d-flex justify-content-end"> <IoMdClose role="button" className="fs-3 float-end" onClick={()=>setNavbar(false)}/></div>
            <NavLink to="/Admin/TraditionalMovie">
                TraditionalMovie
            </NavLink>
            <NavLink to="/Admin/TrendingMovie" onClick={()=>setNavbar(!navbar)}>
                Trending Movie
            </NavLink>
            <NavLink to="/Admin/TopRateMovie" onClick={()=>setNavbar(!navbar)}>
            TopRate Movie
            </NavLink>
            <NavLink to="/Admin/HorrorMovie" onClick={()=>setNavbar(!navbar)}>
            HorrorMovie
            </NavLink>
            <NavLink to="/Admin/ComedyMovie" onClick={()=>setNavbar(!navbar)}>
            ComedyMovie
            </NavLink>   
        </div>
       </>
    )
}

export default Menu