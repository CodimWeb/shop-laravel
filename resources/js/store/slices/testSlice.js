import {createSlice} from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        data: []
    },
    reducers: {
        addData(state, action) {
            console.log(state)
            console.log(action)
            state.data.push(action.payload)
        },
        removeData(state, action) {},
        reverseData(state, action) {
            console.log('reverse')
            state.data =  state.data.reverse();
        }
    }
})

export const {addData, removeData, reverseData} = testSlice.actions
export default testSlice.reducer
