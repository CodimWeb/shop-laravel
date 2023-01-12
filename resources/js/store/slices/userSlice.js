import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        // api.post('/api/auth/me').then((res) => {
        //     console.log(res)
        //     return res.data
        // })

        // const res = await api.post('/api/auth/me');
        const res = await api.get('/api/user');
        // const res = await api.get('/api/users');
        // const data = await res.json();
        return res.data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser(state, action) {
            console.log(state, action)
            state.user = action.payload
        },
        removeUser(state, action) {
            state.user = {}
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.user = action.payload
            console.log('payload', action.payload)
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
