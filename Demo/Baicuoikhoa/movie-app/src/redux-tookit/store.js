import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./slides/MovieSlice";
import filterSlice from "./slides/FilterSlice";
import { MovieManagementSlice } from "./slides/MovieManagementSlice";


const store = configureStore({
    reducer: {
        MovieList: MovieSlice.reducer,
        filters : filterSlice.reducer,
        MovieManagement: MovieManagementSlice.reducer
    }
})

export default store