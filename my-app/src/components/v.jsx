export const V = () => {
    return <>
        <div style={{ marginRight: "20%" }}>
            <div className="circle-container" >
                <svg className="circle" width="100" height="100" >
                    <circle cx="35" cy="35" r="32" stroke="black" stroke-width="3" fill="none" />
                </svg>
                <svg className="checkmark" width="100" height="100">
                    <polyline points="10,40 30,60 70,20" stroke="black" stroke-width="3" fill="none" />
                </svg>
            </div>
        </div>
    </>
}
