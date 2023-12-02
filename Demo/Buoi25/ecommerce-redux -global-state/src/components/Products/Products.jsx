import React, { useContext } from "react";
import Product from "./Product";
import { ShoeContext } from "../../context/ShoeContext";
import Category from "../Sidebar/Category";

function Products(){
    const {state} = useContext(ShoeContext)
     const {productList,filters:{searchText,recommended,category,color,price}} = state
    const queryProducts = ()=>{
        let filterProductList = [...productList]
        if(searchText){
            filterProductList = filterProductList.filter((p)=> p.title.includes(searchText.toLowerCase()))
        }
        if(recommended !=="All"){
            filterProductList = filterProductList.filter((p)=>p.company.toLowerCase()===recommended.toLowerCase())
        }
        if(category !=="All"){
            filterProductList = filterProductList.filter((p)=>p.category.toLowerCase()===category.toLowerCase())
        }
        if(color !=="All"){
            filterProductList = filterProductList.filter((p)=>p.color.toLowerCase()===color.toLowerCase())
        }
        if(price !=='0,0'){
            const [min,max] = price.split(',')
           if(min != max){
            filterProductList = filterProductList.filter((p)=>p.newPrice > Number(min) &&  p.newPrice <= Number(max))
           }
        else{
            filterProductList = filterProductList.filter((p)=>p.newPrice > Number(min))
        }
    }
        return filterProductList
    }
    const remainProductList = queryProducts()
    console.log(state);
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    remainProductList?.map(product =>(
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;