import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:"",
    email:"",
}

export const userSlice = createSlice({
    name:'user_info',
    initialState,
    reducers:{
        setUserInfo:(state,action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },
        unSetUserInfo:(state,action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },
    }
})

export const { setUserInfo,unSetUserInfo } = userSlice.actions
export default userSlice.reducer