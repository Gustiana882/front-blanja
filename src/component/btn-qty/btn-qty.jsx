
const BtnQty = (props) => {
    return (
        <div className="d-flex align-items-center me-2">
            <button 
                className="btn btn-sm btn-secondary rounded-pill" 
                onClick={() => {
                    if (props.value <= 1){
                        return props.callback(props.id, props.value)
                    } else {
                        return props.callback(props.id, props.value-1)
                    }
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    className="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                </svg>

            </button>
            <div className="me-3 ms-3 fw-bolder">{props.value}</div>
            <button 
                className="btn btn-sm btn-light rounded-pill shadow-sm" 
                onClick={() => {
                    return props.callback(props.id, props.value+1)
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                </svg>
            </button>
        </div>
    )
}

export default BtnQty;