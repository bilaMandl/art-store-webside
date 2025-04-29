import { useState } from "react"
import { useDispatch } from "react-redux"
import { adduser, change_current } from "../redux/dataAction"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {//הרשמה
    const [newUser, setnewUser] = useState({ shoppingCart: { finalPrice: 0, cart: [] }, lestShopping: [], codeCart: 1, vizaCard: "" })
    const dis = useDispatch()
    let navigate = useNavigate()
    const save = () => {
        dis(adduser(newUser))
        dis(change_current(newUser))
        navigate("/home")
    }
    return <div style={{ borderStyle: "solid", borderColor: "#0000ff75", borderWidth: "2px", borderRadius: "30px", width: "300px", height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} className="container">
        <p></p>
        <p></p>
        <h4>הרשמה:</h4>
        <p></p>
        <input className="form-control" style={{width:"65%"}} type="text" placeholder="שם" onBlur={e => setnewUser({ ...newUser, name: e.target.value })} />
        <input className="form-control"  style={{width:"65%"}} type="password" placeholder="סיסמא" onBlur={e => setnewUser({ ...newUser, password: e.target.value })} />
        <label><input type="checkbox" /> אני מסכים\ה למדיניות האתר </label>
        <p></p>
        <button className="iridiscent" style={{marginLeft:"5%"}} onClick={() => save()}>אישור</button>
        <p></p>
        <p></p>
    </div>
}   