import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchresataurant = createAsyncThunk('restaurant/fetchresataurant',()=>{
   const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
   console.log(result);
   return result
})

const restaurantslce = createSlice({
    name:'restaurant',
    initialState:{
        loading:false,
        allrestaurant:[],
        searchrestaurant:[],
        error:''
    },
extraReducers:(builder)=>{
builder.addCase(fetchresataurant.pending,(state)=>{
    state.loading = true
})
builder.addCase(fetchresataurant.fulfilled,(state,action)=>{
    state.loading=false
    state.allrestaurant=action.payload
    state.searchrestaurant=action.payload
    state.error=''
})
builder.addCase(fetchresataurant.rejected,(state,action)=>{
    state.loading=false
    state.allrestaurant = ""
    state.error=action.error.message
})
},
reducers:{
    search :(state,action)=>{
      state.allrestaurant = state.searchrestaurant.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
    }
}
})
export const {search} =restaurantslce.actions
export default restaurantslce.reducer