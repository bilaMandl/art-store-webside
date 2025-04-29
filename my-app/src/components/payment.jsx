import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_to_shopping, save_viza_card } from "../redux/dataAction";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [viza, setViza] = useState("");
    const [fullCard, setFullcard] = useState({})
    const [whichCard, setwhichCard] = useState("")
    const [newCard, setNewCard] = useState()
    let savedCard = useSelector(e => e.UserReducer.current.vizaCard)
    let codeCart = useSelector(e => e.UserReducer.current.codeCart)
    let cart = useSelector(e => e.UserReducer.current.shoppingCart.cart)
    let finalPrice = useSelector(e => e.UserReducer.current.shoppingCart.finalPrice)
    let navi = useNavigate()
    const dis = useDispatch()
    useEffect(() => {
        if (savedCard == "")
            setwhichCard("another")
    }, [savedCard])
    const vizaNamber = (fullNum) => {
        setFullcard({ ...fullCard, numCard: fullNum })
        let num = fullNum.substring(12)
        setViza(num)
    }


    const addCart = () => {
        const currentDate = new Date().toISOString().split('T')[0];
        let buying = { code: codeCart, cart: cart, status: "send", price: finalPrice, date: currentDate.toString() }
        dis(add_cart_to_shopping(buying))
        navi("/area")
    }
    const buy = () => {
        if (whichCard == "saved") {
            addCart()
        }
        else {
            if (isChecked)
                dis(save_viza_card(viza))
            addCart()
        }


    }
    return <div>{savedCard !== "" ? <div>
        <input type="radio" value={"saved"} checked={whichCard === "saved"} onChange={(e) => setwhichCard(e.target.value)} /><label>אשראי שמור:  </label>
        <div className="card" dir="ltr">
            <div className="cardglow"></div>
            <div className="cardborder"></div>
            <div className="cardbg"></div>
            <div className="logo"></div>
            <div className="numbers">**** **** **** {savedCard}</div>
            <div className="visalogo"></div>
        </div>
        <svg height="0" width="0">
            <defs>
                <clipPath id="svgPath" clipPathUnits="objectBoundingBox"
                    transform="scale(0.001 0.001)">
                    <path d="m651.19.5c-70.93,0-134.32,36.77-134.32,104.69,0,77.9,112.42,83.28,112.42,122.42,0,16.48-18.88,31.23-51.14,31.23-45.77,0-79.98-20.61-79.98-20.61l-14.64,68.55s39.41,17.41,91.73,17.41c77.55,0,138.58-38.57,138.58-107.66,0-82.32-112.89-87.54-112.89-123.86,0-12.91,15.5-27.05,47.66-27.05,36.29,0,65.89,14.99,65.89,14.99l14.33-66.2S696.61.5,651.18.5h0ZM2.22,5.5L.5,15.49s29.84,5.46,56.72,16.36c34.61,12.49,37.07,19.77,42.9,42.35l63.51,244.83h85.14L379.93,5.5h-84.94l-84.28,213.17-34.39-180.7c-3.15-20.68-19.13-32.48-38.68-32.48,0,0-135.41,0-135.41,0Zm411.87,0l-66.63,313.53h81L494.85,5.5h-80.76Zm451.76,0c-19.53,0-29.88,10.46-37.47,28.73l-118.67,284.8h84.94l16.43-47.47h103.48l9.99,47.47h74.95L934.12,5.5h-68.27Zm11.05,84.71l25.18,117.65h-67.45l42.28-117.65h0Z" />
                </clipPath>
            </defs>
        </svg><br />
        <input type="radio" value={"another"} checked={whichCard === "another"} onChange={(e) => setwhichCard(e.target.value)} /><label>אשראי אחר</label><br />
        {whichCard === "saved" && <button onClick={() => buy()} className="btn-info" style={{ backgroundColor: "#c7b5d8", borderColor: "#c7b5d8", borderRadius: "5px", height: "32px", width: "90px" }}>אישור</button>}
    </div> : newCard}
        {whichCard === "another" ? <div>
            <input className="form-control" type="text" style={{ width: "16%" }} placeholder="מספר אשראי" maxlength="16" size={16} onBlur={(e) => vizaNamber(e.target.value)} />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <input className="form-control" style={{ width: "7%" }} type="text" list="year" placeholder="yy" width={"30px"} size={2} onBlur={(t) => setFullcard({ ...fullCard, year: t.target.value })} />
                <datalist id="year">
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                </datalist>
                <input className="form-control" style={{ width: "7%" }} type="text" list="manth" placeholder="mm" width={"30px"} size={2} onBlur={(t) => setFullcard({ ...fullCard, manth: t.target.value })} />
                <datalist id="manth">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </datalist>
                <input className="form-control" style={{ width: "8%" }} type="text" placeholder="cvv" maxlength={3} size={3} onBlur={(t) => setFullcard({ ...fullCard, cvv: t.target.value })} /><br />
            </div>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <label> לשמור את פרטי האשראי לקניות הבאות?</label>
            <br />
            {whichCard === "another" && <button onClick={() => buy()} className="btn-info" style={{ backgroundColor: "#c7b5d8", borderColor: "#c7b5d8", borderRadius: "5px", height: "32px", width: "90px" }}>אישור</button>}
        </div> : <div></div>}
    </div>
}