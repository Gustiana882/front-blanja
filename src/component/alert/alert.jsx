import './alert.css'


const Alert = (props) => {
    let display = props.message || false
    return (
        <div className={(display) ? "alert-style d-flex" : "alert-style d-none"}>
            <div className={`text-center alert alert-${props.type}`}>
                <h6 className="fw-bold">{props.message}</h6>
                <button 
                className="btn btn-light btn-sm px-4" 
                onClick={()=>{props.close(false)}}>close</button>
            </div>
        </div>
    )
}

export default Alert;