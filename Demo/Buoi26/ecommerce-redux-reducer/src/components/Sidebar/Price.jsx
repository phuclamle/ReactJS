import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchPrice } from "../reducer/actions";

const prices = [
    {
        value:' 0, 0',
        name: "All"
    },
    {
        value: '0, 50',
        name: "$0-$50"
    },
    {
        value: '50, 100',
        name: "$50-$100"
    },
    {
        value: ' 100, 150',
        name: "$100-$50"
    },
    {
        value: '150,150',
        name: "Over $150"
    },

]
function Price() {
    const currentPrice = useSelector((state)=>state.filters.price)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Price</h5>
            <div className="form-group">
                {
                    prices.map((price,index) => (
                        <div key={price.value} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="price"
                            id={`price_${index}`}
                                value={price.value}
                                defaultChecked={price.value === '0,0'}
                                onChange={(e)=>dispatch(setSearchPrice(price.value))}
                            />
                            <label className={`form-check-label ${price.value === currentPrice ? 'text-decoration-underline fw-bolder':''}`}
                            htmlFor={`price_${index}`}
                            role="button"
                            >{price.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Price;