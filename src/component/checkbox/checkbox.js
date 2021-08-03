const Checkbox = (props) => {
    return (
        <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckChecked"
            checked={`${props.checked}`}
            onChange={(e) => props.callback(props.id)}
        />
    )
}

export default Checkbox