import React from "react";
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { setSearchText } from "../reducer/actions";

function Navbar(){
    const dispatch = useDispatch()
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
            <form className="w-50">
                <input type="search" placeholder="Enter your search shoes" className="form-control form-control-sm"
                onInput={(e)=>dispatch(setSearchText(e.target.value))}
                />
            </form>
            <div className="">
                <FaShoppingCart size={20} className="me-2" role="button"/>
                <FaUser size={20} role="button"/>
            </div>
        </div>
    )
}

export default Navbar;