import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove_from_cart, update, update_count_less, update_count_more, update_less } from "../redux/dataAction"
import { Payment } from "./payment"
import { useNavigate } from "react-router-dom"

export const ShoppingCart = () => {
    const current = useSelector(e => e.UserReducer.current)
    const cart = current.shoppingCart.cart
    const [showPay, setshowPay] = useState(false)
    let dis = useDispatch()
    let n = useNavigate()
    useEffect(() => {
        if (current == "אורח")
            n("/home")
    }, [])
    const addToCount = (code, price) => {
        dis(update_count_more(code))
        dis(update(price))
    }
    const lessfromCount = (code, price, count) => {
        if (count - 1 == 0) {
            dis(remove_from_cart(code))
            dis(update_less(price))
        } else {
            dis(update_count_less(code))
            dis(update_less(price))
        }
    }
    return <div>
        <table className="table" dir="ltr">
            <thead>
                <tr>
                    <th>כמות</th>
                    <th>מחיר</th>
                    <th>קוד מוצר</th>
                    <th>שם מוצר</th>
                    <th>תמונה</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((x, i) => (
                    <tr key={i}>
                        <td style={{alignItems:"center"}}>
                            <button onClick={() => lessfromCount(x.code, x.price, x.count)} className="btn-info" style={{ backgroundColor: "rgb(137 139 250)", borderColor: "rgb(137 139 250)", borderRadius: "5px", height: "30px", margin: "2%", width: "30px" }}>-</button>
                            {x.count}
                            <button onClick={() => addToCount(x.code, x.price)} className="btn-info" style={{ backgroundColor: "rgb(137 139 250)", borderColor: "rgb(137 139 250)", borderRadius: "5px", height: "30px", width: "30px", margin: "2%" }}>+</button>
                        </td>
                        <td>{x.price * x.count}</td>
                        <td>{x.code}</td>
                        <td>{x.name}</td>
                        <td><img src={x.src} alt={x.name} style={{ width: "70px" }} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h3>מחיר סופי : {current.shoppingCart.finalPrice}</h3>
        <button className="iridiscent" onClick={() => setshowPay(true)}>לתשלום</button>
        {showPay && <Payment></Payment>}
    </div>
}