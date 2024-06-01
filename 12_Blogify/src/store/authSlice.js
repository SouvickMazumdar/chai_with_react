import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState={
    status:false,
    userData: null
}
// const dispatch=useDispatch();
const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
            // dispatch(state.userData);
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
export const{login,logout}=authSlice.actions;
export default authSlice.reducer;



// In your Redux slice (authSlice.js)

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     userData: JSON.parse(localStorage.getItem('userData')) || null,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         login: (state, action) => {
//              state.status=true;
//             state.userData = action.payload.userData;
//             localStorage.setItem('userData', JSON.stringify(state.userData));
//         },
//         logout: (state) => {
//             state.status=false;
//             state.userData = null;
//             localStorage.removeItem('userData');
//         },
//     },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

