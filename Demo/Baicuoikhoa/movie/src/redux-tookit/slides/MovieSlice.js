import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { API_URL } from '../../services/common'

const MovieSlice = createSlice({
    name: 'movieList',
    initialState:{
        status:'idle',
        TraditionalMovie: [],
        TrendingMovie: [],
        TopRateMovie: [],
        HorrorMovie: [],
        ComedyMovie: []
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchMovieThunkAction.pending,(state,action)=>{
            state.status = 'loading'
        }).addCase(fetchMovieThunkAction.fulfilled,(state,action)=>{
            state.status = 'idle'
            const {type,data} = action.payload
            switch(type){
                case 'TraditionalMovie':
                    state.TraditionalMovie = data;
                    break;
                  case 'TrendingMovie':
                    state.TrendingMovie = data;
                    break;
                  case 'TopRateMovie':
                    state.TopRateMovie = data;
                    break;
                  case 'HorrorMovie':
                    state.HorrorMovie = data;
                    break;
                  case 'ComedyMovie':
                    state.ComedyMovie = data;
                    break;
                  default:
                    break;
            }
        })
        
    }
})

export const fetchMovieThunkAction = createAsyncThunk('movieList/fetchMovieThunkAction', async(type)=>{
    let MovieListRes = await fetch(`${API_URL}/${type}`)
    let data = await MovieListRes.json()
    return {type,data}
})

export default MovieSlice
