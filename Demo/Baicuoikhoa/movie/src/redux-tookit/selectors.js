import { createSelector } from "@reduxjs/toolkit"

export const TrendingMovieSelector = (state) => state.MovieList.TrendingMovie
export const TraditionalMovieSelector = (state) => state.MovieList.TraditionalMovie
export const TopRateMovieSelector = (state) => state.MovieList.TopRateMovie
export const HorrorMovieSelector = (state) => state.MovieList.HorrorMovie
export const ComedyMovieSelector = (state) => state.MovieList.ComedyMovie
export const searchTextSelector = (state) => state.filters.searchText
export const moviePaginationSelector = (state)=>state.MovieManagement.data
export const movieItemSelector = (state)=>state.MovieManagement.movieItem

 