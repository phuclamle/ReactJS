/*
    action: {
        type: feature/action
        payload
    }
*/

export const setSearchText = (payload) =>{
    return{
        type: 'filter/searchText',
        payload: payload
    }
}

export const setSearchREcommended = (payload) =>{
    return{
        type: 'filter/searchRecommended',
        payload: payload
    }
}

export const setSearchCategory = (payload) =>{
    return{
        type: 'filter/searchCategory',
        payload: payload
    }
}

export const setSearchColor = (payload) =>{
    return{
        type: 'filter/searchColor',
        payload: payload
    }
}

export const setSearchPrice = (payload) =>{
    return{
        type: 'filter/searchPrice',
        payload: payload
    }
}