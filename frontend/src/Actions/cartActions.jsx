import { CART_SAVE_SHIPPING_ADDRESS } from "../Constants/cartConstants";
export const saveShippingAddress = (data) => (dispatch, getState) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}