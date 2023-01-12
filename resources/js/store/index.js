import {configureStore} from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
    reducer: {
        test: testSlice,
        user: userSlice,
    }
})
