import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const Nav = () => {
    let current = useSelector(p => p.UserReducer.current)
    let manager = useSelector(p => p.UserReducer.manager)
    return <>
        <nav className="navbar navbar-inverse" style={{ background: "linear-gradient(to right, peachpuff,  #0000ff75)" }}>
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                    {manager.name == current.name && <li><Link to={'group'} style={{ color: "black" }}>טבלת קטגוריות</Link></li>}
                    {manager.name == current.name && <li><Link to={'product'} style={{ color: "black" }}>טבלת מוצרים</Link></li>}
                    {manager.name == current.name && <li><Link to={'00'} style={{ color: "black" }}>טבלת משתמשים</Link></li>}
                    <li><Link to={'home'} style={{ color: "black" }}>דף הבית</Link></li>
                    <li><a href="#" style={{ color: "black" }}>Art Materials</a></li>
                </ul>
                <ul className="nav navbar-nav ">
                    <li><Link to={'log'} style={{ color: "black" }}>התחברות</Link></li>
                    <li><Link to={'sign'} style={{ color: "black" }}>הרשמה</Link></li>
                    {manager.name == current.name && <li><a href="#" style={{ color: "black" }}>מנהל</a></li>}
                    {current.name != "אורח" && manager.name != current.name && <li><a href="#" style={{ color: "black" }}>{current.name}</a></li>}
                    {current.name != "אורח" && manager.name != current.name && current.name != manager.name && <li><Link to={'area'} style={{ color: "black" }}>אזור אישי</Link></li>}
                    {current.name != "אורח" && manager.name != current.name && <li><Link to={'cart'} style={{ color: "black" }}>סל קניות</Link></li>}
                </ul>
            </div>
        </nav>
        <div style={{alignItems:"center"}}> 
            <img src="logo.png" alt="logo" style={{width:"200px",marginRight:"42%"}}/>

        </div>
    </>
}