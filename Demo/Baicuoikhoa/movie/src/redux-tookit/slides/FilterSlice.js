import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: ''
    },
    reducers:{
    setSearchText: (state,action) =>{
        state.searchText = action.payload
    }
    }
})
export default filterSlice

