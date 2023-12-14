import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { date } from "yup"
export const MovieManagementSlice  = createSlice(
    {
        name: 'MovieManagement',
        initialState: {
            status: 'idle',
            data: {
                movieList: [],
                pagination: {
                    totalPage:0,
                    currentPage: 0,
                    pageSize: 0
                },
                
            },
            movieItem: {}
        },reducers:{

        },
        extraReducers:(buider)=> {
           buider
           .addCase(fetchMoviePaginationThunkAction.pending,(state,action)=>{
            state.status = 'loading'
           })
           .addCase(fetchMoviePaginationThunkAction.fulfilled,(state,action)=>{
                state.status = 'idle'
                state.data = action.payload
           })
           .addCase(removeMoviebyIdThunkAction.pending,(state,action)=>{
                state.status = 'loading'
           })
           .addCase(removeMoviebyIdThunkAction.fulfilled,(state,action)=>{    
                state.data.movieList = state.data.movieList.filter((movie)=>movie.id !== action.payload?.id)
           })
           .addCase(fetchMovieItembyIdThunkAction.pending,(state,action)=>{
                state.status = 'loading'
           }).addCase(fetchMovieItembyIdThunkAction.fulfilled,(state,action)=>{
                state.movieItem = action.payload
            }).addCase(editProductThunkAction.pending,(state,action)=>{
                
            })
            .addCase(editProductThunkAction.fulfilled,(state,action)=>{
                state.status = 'idle'
                console.log(5);
                state.data.movieList = state.data.movieList.map((movie) => {
                    if (movie.id === action.payload.id) {
                        return action.payload
                    }
                    return movie;
                })
        }).addCase(addNewProductThunkAction.pending,(state,action)=>{

        })
        .addCase(addNewProductThunkAction.fulfilled,(state,action)=>{

            state.data?.movieList.unshift(action.payload)
        })
        }
    })
export const fetchMoviePaginationThunkAction = createAsyncThunk(
    'manageMovie/fetchMoviePaginationThunkAction',
    async(paginate) =>{
        const {_type,_page,_limit} = paginate
        let movieListRes = await fetch(`https://json-server-api-phuclamle.vercel.app/${_type}`)
        let movieList = await movieListRes.json()
        let pagination = {
            totalPage: Math.ceil(Number(movieList.length)/Number(_limit)),
            currentPage: _page,
            pageSize: _limit
        }
        let moviePaginationRes = await fetch (`https://json-server-api-phuclamle.vercel.app/${_type}?_page=${_page}&_limit=${_limit}`)
        let movies = await moviePaginationRes.json()
        let data = {
            movieList: movies,
            pagination: pagination
        }
         return data
    }
)

export const removeMoviebyIdThunkAction = createAsyncThunk(
    'manageMoveList/removeMoviebyIdThunkAction',
    async(movie)=>{
        const {type,movieItem} = movie
       let removeResult = await fetch(`https://json-server-api-phuclamle.vercel.app/${type}/${movieItem.id}`,{
       method: "DELETE"
        })
        await removeResult.json()
        return movieItem
})

export const fetchMovieItembyIdThunkAction = createAsyncThunk(
        'manageMovieList/fetchMovieItembyIdThunkAction',
        async(TypeMovie) =>{
            const {type,movie} = TypeMovie
            let MovieRes = await fetch(`https://json-server-api-phuclamle.vercel.app/${type}/${movie.id}`,)
            let data = await MovieRes.json()
            return data
        }
)

export const editProductThunkAction = createAsyncThunk(
    'manageProduct/editProductThunkAction',
    async (TypeMovie)=>{
        const {type,editMovie} = TypeMovie
        console.log(editMovie);
        let editMovieRes = await fetch(`https://json-server-api-phuclamle.vercel.app/${type}/${editMovie.id}`,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editMovie)
        })
        let editProduct = await editMovieRes.json()
        console.log(editProduct);
        return editProduct
    }
)

export const addNewProductThunkAction = createAsyncThunk('manageProduct/addNewProductThunkAction',async (TypeMovie)=>{

    const {type,newMovie} = TypeMovie
    let newMovieRes = await fetch(`https://json-server-api-phuclamle.vercel.app/${type}`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newMovie)
    })
    let data = await newMovieRes.json()
    return data
})


 