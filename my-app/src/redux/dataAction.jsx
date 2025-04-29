import { type } from "@testing-library/user-event/dist/type"

export const adduser = (user) => {
    return { type: "ADD_NEW_USER", payload: user }
}
export const change_current = (user) => {
    return { type: "CHANGE_CURRENT", payload: user }
}
export const add_to_cart = (product) => {
    return { type: "ADD_TO_CART", payload: product }
}
export const remove_from_cart = (code) => {
    return { type: "REMOVE_FROM_CART", payload: code }
}
export const update = (price) => {
    return { type: "UPDATE_FINAL_PRICE", payload: price }
}
export const update_less = (price) => {
    return { type: "UPDATE_FINAL_PRICE_LESS", payload: price }
}
export const update_count_more = (code) => {
    return { type: "UPDATE_COUNT_MORE", payload: code }
}
export const update_count_less = (code) => {
    return { type: "UPDATE_COUNT_LESS", payload: code }
}

export const save_viza_card = (vizaCard) => {
    return { type: "SAVE_VIZA_CARD", payload: vizaCard }
}
export const add_cart_to_shopping = (cart) => {
    return { type: "ADD_CART_TO_SHPPING", payload: cart }
}
export const add_group = (group) => {
    return { type: "ADD_GROUP", payload:  group}
}
export const edit_group = (code,name) => {
    return { type: "EDIT_GROUP", payload: {code,name} }
}
export const add_product = (product) => {
    console.log("2")
    return { type: "ADD_PRODUCT", payload:  product}
}
export const edit_product = (code,product) => {
    return { type: "EDIT_PRODUCT", payload: {code,product} }
}
export const remove_product=(code)=>{
    return {type:"REMOVE_PRODUCT",payload:code}
}
export const change_status=(name)=>{
    return {type:"CHANGE_STATUS",payload:name}
}