import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { change_current, update_user } from "../redux/dataAction"

export const LogIn = () => {//התחברות
    const [user, setuser] = useState({})
    let current = useSelector(x => x.UserReducer.current)
    const [errorPass, seterrorPass] = useState("")
    let usersList = useSelector(e => e.UserReducer.usersList)
    const dis = useDispatch()
    let navigate = useNavigate()
    const isExitUser = () => {
        let u = usersList.find(x => x.name == user.name)
        if (u == null)
            navigate("/sign")
        else {
            if (u.password != user.password)
                seterrorPass("סיסמתך שגויה")
            else {
                dis(change_current(u))
                seterrorPass("")
                navigate("/home")
            }
        }
    }
    return <div style={{ borderStyle: "solid", borderColor: "#0000ff75", borderWidth: "2px", borderRadius: "30px", width: "300px", height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} className="container">
            <p></p>
            <p></p>
            <h4>התחברות:</h4>
            <p></p>
            <p></p>
            <input type="text" placeholder="שם" className="form-control" style={{width:"65%"}} onBlur={e => setuser({ ...user, name: e.target.value })} />
            <input type="password" placeholder="סיסמא" className="form-control" style={{width:"65%"}} onBlur={e => setuser({ ...user, password: e.target.value })} />
            <p style={{color:"red"}}>{errorPass}</p><br></br>
            <button className="iridiscent" style={{marginLeft:"5%"}} onClick={() => isExitUser()}>אישור</button>
            <p></p>
            <p></p>
        </div>
}