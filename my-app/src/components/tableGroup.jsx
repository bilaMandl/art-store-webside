import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddOrEdit } from "./addOrEditGroup"
import { add_group } from "../redux/dataAction"
import { useNavigate } from "react-router-dom"

export const TableGroup = () => {
    let current = useSelector(v => v.UserReducer.current) 
    let n = useNavigate()
    useEffect(() => {
        if (current == "אורח")
            n("/home")
    }, [])
    let group = useSelector(e => e.ProductReducer.groupList)
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [objectToEdit, setObjectToEdit] = useState({})

    const edit = (obj) => {
        setShowEdit(true)
        setObjectToEdit(obj)
    }
    return <>
        <table className="table">
            <thead>
                <tr style={{ margin: "0px" }}>
                    <th>קוד קטגוריה</th>
                    <th>שם קטגוריה</th>
                    <th>עריכה</th>
                </tr>
            </thead>
            <tbody>
                {group.map((x, i) => (
                    <tr key={i}>
                        <td>{x.code}</td>
                        <td>{x.name}</td>
                        <td><button className="btn-info" style={{backgroundColor:"rgb(137 139 250)",borderColor:"rgb(137 139 250)",borderRadius:"5px",height:"32px",width:"90px"}} onClick={() => edit(x)}>🖊</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={() => setShowAdd(true)} className="btn-info" style={{backgroundColor:"rgb(137 139 250)",borderColor:"rgb(137 139 250)",borderRadius:"5px",height:"32px",width:"90px"}}>הוספת קטגוריה</button>
        {showAdd && <AddOrEdit set={setShowAdd}></AddOrEdit>}
        {showEdit && <AddOrEdit set={setShowEdit} objectToEdit={objectToEdit}></AddOrEdit>}
    </>
}