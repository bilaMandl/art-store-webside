import { produce } from "immer"
export const InitialState = {
    usersList: [
        { name: "מנהל", password: 3686, shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" },
        { name: "בלי", password: 3686, shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" },
        {
            name: "beli",
            password: 7412,
            shoppingCart: {
                finalPrice: 359, cart: [
                    { code: 1, name: "מרקר", price: 59, src: "art/marker.jpg", count: 5 },
                    { code: 23, name: "צבעי שמן", price: 20, src: "art/hatGlue.jpg", count: 1 },
                    { code: 24, name: "צבעי גואש", price: 12, src: "art/hatGlue.jpg", count: 2 }]
            },
            lestShopping: [{
                code: 1, cart: [
                    { code: 12, name: "צבעי מים", count: 5 },
                    { code: 11, name: "קנבס 15*15", count: 4 },
                    { code: 10, name: "מכחולים", count: 1 }
                ], status: "send", price: 212, date: "2024-02-30",
                code: 2, cart: [
                    { code: 7, name: "לורדים מחיקים", count: 16 },
                    { code: 1, name: "לוח מחיק", count: 1 }
                ], status: "get", price: 190, date: "2024-05-09"
            }],
            codeCart: 3,
            vizaCard: "3333"
        },
        { name: "מלי", password: 11, shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" },
        { name: "חני", password: 8521, shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" },
        { name: "ריקי", password: 9874, shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" },
        { name: "איידי", password: 9632, shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" }
    ],
    current: { name: "אורח", password: "----", shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" },
    manager: { name: "מנהל", password: "3686" }
}
export const UserReducer = produce((state, action) => {
    switch (action.type) {
        case "ADD_NEW_USER": state.usersList.push(action.payload);
            break;
        case "CHANGE_CURRENT": state.current = action.payload;
            break;
        case "ADD_TO_CART": {
            state.current.shoppingCart.cart.push(action.payload);
            state.usersList.find(x => x.name == state.current.name).shoppingCart.cart.push(action.payload);
            break;
        }
        case "REMOVE_FROM_CART": {
            let cart = state.current.shoppingCart.cart
            for (let index = 0; index < cart.length; index++) {
                if (cart[index].code == action.payload) {
                    cart.splice(index, 1)

                }
            }
            break;
        }
        case "UPDATE_FINAL_PRICE": {
            state.current.shoppingCart.finalPrice += action.payload;
            break;
        }
        case "UPDATE_FINAL_PRICE_LESS": {
            state.current.shoppingCart.finalPrice -= action.payload;
            break;
        }
        case "UPDATE_COUNT_MORE": {
            let newCount = state.current.shoppingCart.cart.find(x => x.code == action.payload).count + 1
            state.current.shoppingCart.cart.find(x => x.code == action.payload).count = newCount
            state.usersList.find(x => x.name == state.current.name).shoppingCart.cart.find(x => x.code == action.payload).count = newCount
            break;
        }
        case "UPDATE_COUNT_LESS": {
            state.current.shoppingCart.cart.find(x => x.code == action.payload).count -= 1
            state.usersList.find(x => x.name == state.current.name).shoppingCart.cart.find(x => x.code == action.payload).count -= 1
            break;
        }
        case "SAVE_VIZA_CARD": {
            state.usersList.find(e => e.name == state.current.name).vizaCard = action.payload
            state.current = state.usersList.find(e => e.name == state.current.name)
            break
        }
        case "ADD_CART_TO_SHPPING": {
            state.usersList.find(e => e.name == state.current.name).lestShopping.push(action.payload)
            state.usersList.find(e => e.name == state.current.name).shoppingCart.finalPrice = 0
            state.usersList.find(e => e.name == state.current.name).shoppingCart.cart = []
            state.usersList.find(e => e.name == state.current.name).codeCart += 1
            state.current = state.usersList.find(e => e.name == state.current.name)
            break;
        }
        case "CHANGE_STATUS": {
            state.usersList.find(e => e.name == state.current.name).lestShopping.find(e => e.code == action.payload).status = 'get'
            state.current.lestShopping.find(e => e.code == action.payload).status = 'get'
            break;
        }
        default:
            break;
    }
}, InitialState)