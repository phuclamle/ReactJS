/* eslint-disable no-lone-blocks */
const initState = {
    searchText: '',
    recommended: 'All',
    price: '0,0',
    color: "All",
    category: "All"
}

const filtersReducer = (state = initState,action) =>{
    switch(action.type){
        // eslint-disable-next-line no-lone-blocks
        case 'filters/searchText':{
            return {
                ...state,
                searchText: action.payload
             }
               
            }
        
        case 'filters/searchRecommended':{
            return {
                ...state,
                recommended: action.payload
             }
        }; 

        case 'filters/searchCategory':{
            return {
                ...state,
                category: action.payload
             }
      }; 
      case 'filters/searchPrice':{
        return {
            ...state,
            price: action.payload
         }
    }; 

    case 'filters/searchColor':{
        return {
            ...state,
            color: action.payload
         }
  }; 

        break;

        default:{
            return state
        }

        break;
    }
}

export default filtersReducer