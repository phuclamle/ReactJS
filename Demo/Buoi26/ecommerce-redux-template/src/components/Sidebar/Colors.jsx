import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchColor } from "../reducer/actions";

const colors = [
    "All", "Black", "Blue", "Red", "Green", 'White'
]
function Colors() {
    const currentcolor = useSelector((state)=>state.filters.color)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Colors</h5>
            <div className="form-group">
                {
                    colors.map((color,index) => (
                        <div key={color} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="color"
                            id={`color_${index}`}
                                onChange={(e)=>dispatch(setSearchColor(e.target.value))}
                                value={color}
                                defaultChecked={color === 'All'}
                                style={color === currentcolor ? { backgroundImage: 'linear-gradient(to right, red, green)' } : color !== 'White' ? { backgroundColor: color } : {}}
                            />
                            <label className="form-check-label"
                            htmlFor={`color_${index}`}
                            >{color}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Colors;