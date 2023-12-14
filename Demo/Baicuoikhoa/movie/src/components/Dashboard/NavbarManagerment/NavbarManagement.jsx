import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
 
function NavbarManagement(){
    return(
        <>
        <div className=" navbarManager d-flex justify-content-between p-3 align-items-center" style={{height:'70px'}}> 
            <div className="">
                <Link className="text-white text-decoration-none" to={'/'}>
                    Quay lại trang chủ
                </Link>
            </div>
            <div> 
                    {/* <RxAvatar className="text-primary" size={30}/> */}
            </div>
        </div>
        </>
         
    )
}

export default NavbarManagement