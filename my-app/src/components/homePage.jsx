import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { add_to_cart, update, update_count, update_count_more } from "../redux/dataAction"
import { useState } from "react"
import { Details } from "./details"

export const HomePage = () => {
    let items = useSelector(p => p.ProductReducer.productList)
    let groups = useSelector(w => w.ProductReducer.groupList)
    const [group, setGroup] = useState("כל הקטגוריות")
    const [showDetails, setShowDetails] = useState(false)
    const [init, setInit] = useState()
    const [itemToDet, setItemToDet] = useState(true)
    let navi = useNavigate()
    let dis = useDispatch()
    let current = useSelector(x => x.UserReducer.current)
    let cart = current.shoppingCart.cart
    const det = (item) => {
        setInit(!init)
        setShowDetails(true)
        setItemToDet(item)
    }
    const add = (item) => {
        let product = { name: item.name, code: item.code, price: item.price, src: item.src, count: 1 }
        if (current.name == "אורח")
            navi("/sign")
        else {
            if (cart.find(e => e.code == item.code))
                dis(update_count_more(item.code))
            else
                dis(add_to_cart(product))
            dis(update(item.price))
            navi("/cart")
        }


    }
    return <div>
        <div>
            <input type="text" list="group" placeholder="בחר קטגוריה" onBlur={(e) => setGroup(e.target.value)} />
            <datalist id="group">
                {groups.map((x, i) => (<option key={i}>
                    {x.name}
                </option>))}
                <option>כל הקטגוריות</option>
            </datalist>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
            {items.map((x, i) => <div>
                {(group == x.nameGroup || group == "כל הקטגוריות") && <div key={i} style={{ marginTop: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "370px", width: "250px", borderColor: "black", borderStyle: "solid", borderWidth: "1px" }}>
                    <div style={{ width: "100%", height: "70%", alignItems: "center" }}>
                        <img src={x.src} alt={x.name} style={{ width: "200px", marginRight: "20px" }} onClick={() => det(x)} />
                    </div>
                    <h5>{x.name}</h5>
                    <button onClick={() => add(x)}>הוסף לסל</button>
                </div>}
            </div>
            )}
        </div>
        <div style={{margin:"2%"}}>
            {showDetails && <Details thisPro={itemToDet} init={init}></Details>}
        </div>
        <Outlet></Outlet>
    </div>

}