/* eslint-disable no-lone-blocks */
const initstate = [

]

const productReducer = (state= initstate,action) =>{
    switch(action.type){
        case 'productList/fetchProducts':{
            return [...action.payload]
        };

        break;

        default:{
            return state
        }

        break;
    }
}

export default productReducer