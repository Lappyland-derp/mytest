import {configureStore} from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import { creatorListReducer } from './Reducers/creatorsReducers'
import { userLoginReducer } from './Reducers/userReducers'
import { combineReducers } from '@reduxjs/toolkit'
import {logger} from 'redux-logger'

const reducer = combineReducers({
    creatorList: creatorListReducer,
    userLogin: userLoginReducer
})
const userInfoFromStorage = localStorage.getItem('userInfo ') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

//const cartItemsFromStorage = 

const initialState = {
    cart:  {/*cartItems: cartItemsFromStorage*/ shippingAddress: shippingAddressFromStorage},
    userLogin: {userInfo: userInfoFromStorage}

}

const middleware = {thunk}

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store