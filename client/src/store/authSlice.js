import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const studentSignup = createAsyncThunk('auth/studentSignup', async({role, email, fname, lname, password, school}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:6060/signup', {role, email, fname, lname, password, school})
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectedWithValue(err.message)
    }
})

export const practitionerSignup = createAsyncThunk('auth/practitionerSignup', async({role, email, fname, lname, password}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:6060/signup', {role, email, fname, lname, password})
        return res.data
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectedWithValue(err.message)
    }
})

export const login = createAsyncThunk('auth/login', async({role, email, password}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:6060/login', {role, email, password})
        return res.data
    } catch (err) {
        
        return thunkAPI.rejectedWithValue(err.response.data)
    }
})

const initialState = {
    user: '',
    isLoggedIn: false,
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = ''
            state.isLoggedIn = false
            state.loading = false
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(studentSignup.fulfilled, (state, action) => {
                state.user = action.payload.email
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            .addCase(studentSignup.pending, (state, action) => {
                state.loading = true
            })
            .addCase(studentSignup.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(practitionerSignup.fulfilled, (state, action) => {
                state.user = action.payload.email
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            .addCase(practitionerSignup.pending, (state, action) => {
                state.loading = true
            })
            .addCase(practitionerSignup.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })



            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.email
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            .addCase(login.pending, (state, action) => {
                state.loading = true
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer