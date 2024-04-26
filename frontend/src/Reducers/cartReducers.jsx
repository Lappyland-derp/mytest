import { CART_SAVE_SHIPPING_ADDRESS, CART_ADD_ITEM, CARD_REMOVE_ITEM } from "../Constants/cartConstants";

export const cartReducer = (state = { cartItems: [], shippingAddress: {} } ,action ) => {
    switch(action.type){
    case CART_ADD_ITEM:
            return {};
    case CARD_REMOVE_ITEM:
            return {};
    case CART_SAVE_SHIPPING_ADDRESS:
            return {
                
            };
    default:
        return state
    }
}