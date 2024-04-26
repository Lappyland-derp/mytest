import {configureStore} from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import { productListReducer } from './Reducers/productsReducers'
import { userLoginReducer } from './Reducers/userReducers'
import { combineReducers } from '@reduxjs/toolkit'
import {logger} from 'redux-logger'

const reducer = combineReducers({
    productList: productListReducer,
    userLogin: userLoginReducer
})
const userInfoFromStorage = localStorage.getItem('userInfo ') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}

}

const middleware = {thunk}

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store