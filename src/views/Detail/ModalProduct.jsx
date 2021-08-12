import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import TextEditor from '../../component/text-editor/text-editor'
import FormData from 'form-data'
import { connect } from 'react-redux'

const ModalProduct = (props) => {

    const [category, setCategory] = useState([])
    const [form, setForm] = useState({})
    const [img, setImg] = useState("http://192.168.43.152:9000/public/images/blank.jpg")

    const getCategory = () => {
        axios({
            method: 'get',
            url: 'http://192.168.43.152:9000/product/category',
        }).then((result) => {
            if (!result.data.isError) {
                return setCategory(result.data.data)
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getCategory()
    }, [props])

    const handleInput = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }


    const openModal = () => {
        setForm({ ...form, ...props.productData, ...{ category: props.productData.categories.id } })
        setImg(`http://localhost:9000/${props.productData.image}`)
    }


    const editDescription = (value) => {
        setForm({ ...form, ...{ description: value } })
    }


    const fileChange = (event) => {
        const file = event.target.files[0];
        if (file.type === "image/jpg"
            || file.type === "image/png"
            || file.type === "image/jpeg") {
            setForm({ ...form, image: file })
            const reader = new FileReader()
            reader.onload = () => {
                setImg(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }


    const saveChange = () => {

        const formdata = new FormData()
        formdata.append("id", form.id)
        formdata.append("name", form.name)
        formdata.append("category", form.category)
        formdata.append("price", form.price)
        formdata.append("brand", form.brand)
        formdata.append("condition", form.condition)
        formdata.append("description", form.description)
        formdata.append("image", form.image)

        axios({
            method: "put",
            url: 'http://192.168.43.152:9000/product',
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
            data: formdata
        }).then((result) => {
            if (!result.data.isError) {
                toast.success(result.data.message)
                setForm({})
            }
            else {
                toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    console.log(props.productData.id_user)
    return (
        <div>
            {/* Button trigger modal */}
            {(props.user.data.roles === 'seller' && props.user.data.email === props.productData.id_user)?
                <Link
                    type="button"
                    className="btn btn-sm rounded-pill px-4 btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-${props.productData.id}`}
                    onClick={openModal}
                    >
                    edit
                </Link>
            : ''}
            {/* Modal */}
            <div
                className="modal fade "
                id={`modal-${props.productData.id}`}
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Product
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="row modal-body">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={form.name}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Category
                                    </label>
                                    <select className="form-select" name="category" onChange={handleInput}>
                                        <option value={-1}>category</option>
                                        {category.map((val) =>

                                            (<option value={val.id} selected={(form.category === val.id) ? "selected" : ""}>{val.name}</option>)

                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="brand"
                                        value={form.brand}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Condition
                                    </label>
                                    <select className="form-select" name="condition" value={form.condition} onChange={handleInput}>
                                        <option value="New">New</option>
                                        <option value="Secondhand">Secondhand</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="price"
                                        value={form.price}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="image"
                                        onChange={fileChange}
                                    />
                                </div>

                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <img src={img} className="img-thumbnail" width={150} height={150} alt="..." />
                                </div>
                            </div>
                            <div className="col-12 border my-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Description
                                </label>
                                <TextEditor callback={editDescription} val={props.productData.description} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={saveChange}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(ModalProduct)