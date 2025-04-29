import { Route, Routes } from "react-router-dom"
import { HomePage } from "./homePage"
import { LogIn } from "./logIn"
import { Details } from "./details"
import { SignUp } from "./signUp"
import { ShoppingCart } from "./shoppingCart"
import { Payment } from "./payment"
import { TableGroup } from "./tableGroup"
import { TableProduct } from "./tableProduct"
import { PersonalArea } from "./personalArea"
import { TableUser } from "./tableUser"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="00" element={<TableUser></TableUser>}></Route>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="home" element={<HomePage></HomePage>}>
                <Route path="details" element={<Details></Details>}></Route>
            </Route>
            <Route path="log" element={<LogIn></LogIn>}></Route>
            <Route path="sign" element={<SignUp></SignUp>}></Route>
            <Route path="cart" element={<ShoppingCart></ShoppingCart>}></Route>
            <Route path="pay" element={<Payment></Payment>}></Route>
            <Route path="group" element={<TableGroup></TableGroup>}></Route>
            <Route path="product" element={<TableProduct></TableProduct>}></Route>
            <Route path="area" element={<PersonalArea></PersonalArea>}></Route>
        </Routes>
    </>
}