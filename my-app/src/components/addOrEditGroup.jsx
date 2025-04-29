import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_group, edit_group } from "../redux/dataAction"

export const AddOrEdit = ({ set, objectToEdit }) => {
    let codeGroup = useSelector(p => p.ProductReducer.codeGroup)
    const [oubject, setOubject] = useState({ code: codeGroup })
    let dis = useDispatch()
    const whichFunctionDoing = (obj) => {
        if (objectToEdit == undefined) {
            dis(add_group(obj))
            set(false)
        }
        else {
            dis(edit_group(obj.code, obj.name))
            set(false)
        }
    }
    useEffect(() => {
        
        if (objectToEdit != undefined)
            setOubject(objectToEdit)
        else
            setOubject({ ...oubject, name: "name" })
    }, [])

    return <div style={{ margin: "10px" }}>
        <input type="text" placeholder={oubject.name} onBlur={(b) => setOubject({ ...oubject, name: b.target.value })} />
        <button className="btn" onClick={() => whichFunctionDoing(oubject)}>save</button>
    </div>
}