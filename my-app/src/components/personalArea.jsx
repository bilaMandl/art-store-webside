import { useDispatch, useSelector } from "react-redux"
import { Car } from "./car"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { V } from "./v"
import { change_status } from "../redux/dataAction"

export const PersonalArea = () => {
    let current = useSelector(v => v.UserReducer.current)
    let n = useNavigate()
    let dis =useDispatch()
    useEffect(() => {
        if (current == "אורח")
            n("/home")
    }, [])
    const f_status = (x) => {
        dis(change_status(x.code))
    }
    let lestShopping = useSelector(v => v.UserReducer.current.lestShopping)
    return <div>
        <table className="table">
            <thead>
                <tr style={{ margin: "0px" }}>
                    <th>קוד קניה</th>
                    <th>מחיר קניה</th>
                    <th>תאריך הקניה</th>
                    <th>פריטים</th>
                    <th>סטטוס</th>
                </tr>
            </thead>
            <tbody>
                {lestShopping.map((x, i) => (
                    <tr key={i}>
                        <td>{x.code}</td>
                        <td>{x.price}</td>
                        <td>{x.date}</td>
                        <td>
                            {x.cart.map((y) =>
                                <p>שם:{y.name} כמות:{y.count}</p>
                            )}
                        </td>
                        {x.status != undefined && <td>{x.status == 'send' ? <Car></Car> : <V></V>}</td>}
                        {x.status != undefined && <td>{x.status == 'send' ? "המשלוח בדרך" : "נמסר בהצלחה"}
                            <td>{x.status == 'send' && <button className="iridiscent" style={{ marginRight: "15%"}} onClick={() => f_status(x)}>הגיע!</button>}</td>
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}