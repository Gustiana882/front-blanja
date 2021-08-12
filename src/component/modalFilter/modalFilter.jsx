import { useState, useEffect } from 'react'
import axios from 'axios'
import './modalFilter.css'


const ModalFilter = (props) => {

    const [formFilter, setformFilter] = useState({
        name: 'ASC',
        category: 'All',
        price: '',
    })
    const [category, setCategory] = useState([])

    const handleClick = () => {
        props.propsHistory.push(`/filter?name=${formFilter.name}&category=${formFilter.category}&price=${formFilter.price}`)
    }


    const getCategory = () => {
        axios({
            method: 'get',
            url: 'http://192.168.43.152:9000/product/category',
        }).then((result) => setCategory(result.data.data))
          .catch((error) => console.log(error))
    }


    useEffect(() => {
        getCategory()
        console.log('useEffect')
    }, [])


    const handleChange = element => {
        const name = element.target.name 
        const value = element.target.value
        setformFilter({...formFilter, ...{ [name]: value }})
    }


    return (
        <div className="me-auto">
            {/* <button
                className="btn btn-outline-secondary btn-sm rounded px-1 pt-1 mx-4"
                data-bs-toggle="modal"
                data-bs-target="#modalFilter"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-funnel"
                    viewBox="0 0 16 16"
                >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                </svg>

            </button> */}
            {/* Modal */}
            <div
                className="modal fade"
                id="modalFilter"
                tabIndex={-1}
                aria-labelledby="modalFilterLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="d-flex">
                                <button
                                    type="button"
                                    className="btn-close m-1"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                                <h5 className="modal-title m-1 text-medium" id="exampleModalLabel">
                                    Filter
                                </h5>
                            </div>
                        </div>
                        <div className="modal-body modal-filter">
                            
                            <div className="m-4 size">
                                <h5 className="text-medium">Sizes</h5>
                                <div className="d-flex">
                                    <div className="form-check p-0 m-0">
                                        <input
                                            className
                                            type="checkbox"
                                            name="name"
                                            id="exampleRadios1"
                                            value="ASC"
                                            defaultChecked
                                            onChange={handleChange}
                                        />
                                        <span>A-Z</span>
                                    </div>
                                    <div className="form-check p-0 m-0">
                                        <input
                                            className
                                            type="checkbox"
                                            name="name"
                                            id="exampleRadios2"
                                            value="DESC"
                                            onChange={handleChange}
                                        />
                                        <span>Z-A</span>
                                    </div>
                                    <div className="form-check p-0 m-0">
                                        <input
                                            className
                                            type="checkbox"
                                            name="price"
                                            id="exampleRadios2"
                                            value="DESC"
                                            onChange={handleChange}
                                        />
                                        <span>0 - 1.000.000</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="m-4 form-check-category">
                                <h5 className="text-medium">Category</h5>
                                <div className="d-flex flex-wrap">
                                    <div className="form-check p-0 m-0">
                                        <input
                                            type="checkbox"
                                            name="category"
                                            id="exampleRadios1"
                                            value="All"
                                            defaultChecked
                                            onChange={handleChange}
                                        />
                                        <span>All</span>
                                    </div>
                                    {category.map((value) => 
                                        <div className="form-check p-0 m-0">
                                            <input
                                                type="checkbox"
                                                name="category"
                                                id="exampleRadios2"
                                                value={value.name}
                                                onChange={handleChange}
                                            />
                                            <span>{value.name}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-around">
                            <button
                                type="button"
                                className="col-5 btn btn-outline-secondary rounded-pill px-4"
                                data-bs-dismiss="modal"
                            >
                                Discard
                            </button>
                            <button
                                type="button"
                                className="col-5 btn btn-danger rounded-pill px-4"
                                data-bs-dismiss="modal"
                                onClick={handleClick}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalFilter