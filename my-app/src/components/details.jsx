
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { add_to_cart, update, update_count_more } from "../redux/dataAction"

export const Details = ({ thisPro, init }) => {
    let navi = useNavigate()
    let items = useSelector(p => p.ProductReducer.productList)
    let groups = useSelector(w => w.ProductReducer.groupList)
    const [group, setGroup] = useState("כל הקטגוריות")

    useEffect(() => {
        console.log(thisPro.nameGroup)
        setGroup(thisPro.nameGroup)
    }, [init])
    let dis = useDispatch()
    let current = useSelector(x => x.UserReducer.current)
    let cart = current.shoppingCart.cart
    const add = (item) => {
        console.log("add")
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
        <img src={thisPro.src} alt={thisPro.name} style={{ margin: "1%", borderColor: "rgb(137 139 250)", borderStyle: "solid", borderWidth: "1px", borderRadius: "30px", width: "250px" }} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "250px", alignItems: "center" }}>
            <h4>{thisPro.name}</h4>
        </div>
        <h5 style={{ color: "rgb(137 139 250)" }}>מחיר לתשלום :₪{thisPro.price}</h5>
        <h5>מתוך קטגורית :{thisPro.nameGroup}</h5>
        <button className="btn-info" style={{ backgroundColor: "rgb(198 180 216)", color: "black", borderColor: "rgb(198 180 216)", borderRadius: "5px", height: "32px", width: "90px" }} onClick={() => add(thisPro)}>הוסף לסל</button>
        <div>
            <p>פרטים דומים:</p>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {items.map((x, i) => <div>{
                    (group == x.nameGroup || group == "כל הקטגוריות") &&
                    <div key={i} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <img src={x.src} alt={x.name} style={{ width: "100px", marginRight: "20px" }} />
                    </div>
                }</div>

                )}
            </div>
        </div>
    </div>
} 