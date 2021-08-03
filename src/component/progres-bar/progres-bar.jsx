const progresBar = (props) => (
    <div className="d-flex justify-content-between" style={{width: "18rem" }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-star-fill me-3 text-warning"
            viewBox="0 0 16 16"
        >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <h6 className="text-muted">{props.index || ''}</h6>
        <div className="progress w-100 me-3 ms-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${props.value}%` || `${0}%` }}
                aria-valuenow={ props.value || 0 }
                aria-valuemin={0}
                aria-valuemax={100}
            />
        </div>
        <h6 className="text-muted">{props.poin || 0}</h6>
    </div>
)

export default progresBar;