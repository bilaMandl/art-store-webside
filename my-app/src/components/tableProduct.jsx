import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddOrEdit } from "./addOrEditProduct"
import { remove_product } from "../redux/dataAction"
import { useNavigate } from "react-router-dom"

export const TableProduct = () => {
    let products = useSelector(e => e.ProductReducer.productList)
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [objectToEdit, setObjectToEdit] = useState({})
    let d = useDispatch()
    let current = useSelector(v => v.UserReducer.current)
    let n = useNavigate()
    useEffect(() => {
        if (current == "אורח")
            n("/home")
    }, [])
    const edit = (obj) => {
        setShowEdit(true)
        setObjectToEdit(obj)
    }
    const remove = (code) => {
        d(remove_product(code))
    }

    return <>
        <table className="table">
            <thead>
                <tr  >
                    <th>קוד מוצר</th>
                    <th>שם המוצר</th>
                    <th>קוד קטגוריה</th>
                    <th>שם קטגוריה</th>
                    <th>מחיר</th>
                    <th>כמות במלאי</th>
                    <th>עריכה/מחיקה</th>
                </tr>
            </thead>
            <tbody>
                {products.map((x, i) => (
                    <tr key={i}>
                        <td>{x.code}</td>
                        <td>{x.name}</td>
                        <td>{x.idGroup}</td>
                        <td>{x.nameGroup}</td>
                        <td>{x.price}</td>
                        <td>{x.count}</td>
                        <td style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <button className="btn-info" style={{margin:"2%", color:"black", backgroundColor: "rgb(176 164 226)", borderColor: "rgb(176 164 226)", borderRadius: "5px", height: "32px", width: "32px" }} onClick={() => edit(x)}>🖊</button>
                            <button className="btn-info" style={{margin:"2%", color:"black",backgroundColor: "rgb(241 209 193)", borderColor: "rgb(241 209 193)", borderRadius: "5px", height: "32px", width: "32px" }} onClick={() => remove(x.code)}>🗑</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="btn-info" style={{margin:"2%", color:"black", backgroundColor: "rgb(133 135 251)", borderColor: "rgb(133 135 251)", borderRadius: "5px", height: "32px", width: "90px" }} onClick={() => setShowAdd(true)}>הוספת מוצר</button>
        {showAdd && <AddOrEdit set={setShowAdd}></AddOrEdit>}
        {showEdit && <AddOrEdit set={setShowEdit} objectToEdit={objectToEdit}></AddOrEdit>}
    </>
}