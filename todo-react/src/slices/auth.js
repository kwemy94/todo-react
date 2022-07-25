import {createSlice} from '@reduxjs/toolkit'

const us = JSON.parse(sessionStorage.getItem('currentUser'))
const initialState = us? {isLogin: true, user: us}:{
    isLogin: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log(action);
            let lu = action.payload
            var user = (JSON.parse(localStorage.getItem('UserData')) || []).find(u=>{
                
                return u.email == lu.email && u.password == lu.password
            })
            if (user) {
                state.user = user;
                state.isLogin = true
                sessionStorage.setItem('currentUser', JSON.stringify(user));
            } else{
                state.user = null;
                state.isLogin = false
            }
        },
        
        logout: (state, action) => {
           
                state.user = null;
                state.isLogin = false
                sessionStorage.removeItem('currentUser');
            
        }
    }
})

const {reducer, actions} = authSlice ;
export const {login} = actions
export default reducer;