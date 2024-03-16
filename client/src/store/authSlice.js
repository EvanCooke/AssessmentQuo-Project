import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const studentSignup = createAsyncThunk('auth/studentSignup', async({role, email, fname, lname, password, school}) => {
    try {
        const res = await axios.post('http://localhost:6060/signup', {role, email, fname, lname, password, school})
        return res.data
    } catch (err) {
        console.log(err)
    }
})

export const practitionerSignup = createAsyncThunk('auth/practitionerSignup', async({role, email, fname, lname, password}) => {
    try {
        const res = await axios.post('http://localhost:6060/signup', {role, email, fname, lname, password})
        return res.data
    } catch (err) {
        console.log(err)
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
                state.error = 'An error occurred. Awkward...'
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
                state.error = 'An error occurred. Awkward...'
            })
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer