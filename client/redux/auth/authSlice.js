import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: { token: null, user: null },
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload
            state.token = token
        },
        setUser: (state, action) => {
            const { user } = action.payload
            state.user = user
        },
        logOut: (state) => {
            state.token = null
        }
    }
})

export const { setCredentials, setUser, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = state => state.auth.token 

export const selectCurrentUser = state => state.auth.user