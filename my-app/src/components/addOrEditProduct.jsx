import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_product, edit_product } from "../redux/dataAction"

export const AddOrEdit = ({ set, objectToEdit }) => {
    let code = useSelector(p => p.ProductReducer.code)
    let groupList = useSelector(e => e.ProductReducer.groupList)
    const [oubject, setOubject] = useState({ code: code })
    let dis = useDispatch()
    const whichFunctionDoing = (obj) => {
        if (objectToEdit == undefined) {
            dis(add_product(obj))
            set(false)
        }
        else {
            dis(edit_product(obj.code, obj))
            set(false)
        }
    }
    useEffect(() => {
        if (objectToEdit != undefined)
            setOubject(objectToEdit)
        else
            setOubject({ ...oubject, name: "שם", nameGroup: "שם קטגוריה", idGroup: "מספר קטגוריה", price: "מחיר", src: "ניתוב לתמונה", count: "כמות במלאי" })
    }, [])

    return <div style={{ margin: "10px" }}>
        <input type="text" placeholder={oubject.name} onBlur={(b) => setOubject({ ...oubject, name: b.target.value })} />
        <input type="text" list={"group"} placeholder={oubject.nameGroup} onBlur={(b) => setOubject({ ...oubject, nameGroup: b.target.value })} />
        <datalist id="group">
            {groupList.map((x, i) => <option>{x.name}</option>)}
        </datalist>
        <input type="number" placeholder={oubject.idGroup} onBlur={(b) => setOubject({ ...oubject, idGroup: b.target.value })} />
        <input type="number" placeholder={oubject.price} onBlur={(b) => setOubject({ ...oubject, price: parseInt(b.target.value) })} />
        <input type="text" placeholder={oubject.src} onBlur={(b) => setOubject({ ...oubject, src: b.target.value })} />
        <input type="number" placeholder={oubject.count} onBlur={(b) => setOubject({ ...oubject, count: parseInt(b.target.value) })} />
        <button className="btn" onClick={() => whichFunctionDoing(oubject)}>שמור</button>
    </div>
}