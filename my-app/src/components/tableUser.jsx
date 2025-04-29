import { useSelector } from "react-redux"

export const TableUser = () => {
    let userList = useSelector(e => e.UserReducer.usersList)
    return <>
        <table className="table">
     <thead></thead>
            <tbody>
                {userList.map((x, i) => (
                    <tr key={i}>
                        <td>{x.password}</td>
                        <td>{x.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>}