import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import FormData from 'form-data'
import { connect } from 'react-redux'


const ModalCategory = (props) => {
    const [notif, setNotif] = useState('')
    const [category, setCategory] = useState([])
    const [form, setForm] = useState({ id: null })
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
        props.callback(notif)
        return () => {
            setNotif('')
        }
    }, [props, notif])


    const handleInput = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
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
        const formData = new FormData()
        formData.append("id", form.id)
        formData.append("name", form.name)
        formData.append("image", form.image)
        axios({
            method: (form.id) ? "put" : "post",
            url: 'http://192.168.43.152:9000/product/category',
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
            data: formData
        }).then((result) => {
            if (!result.data.isError) {
                toast.success(result.data.message)
                setNotif('save change')
                setForm({ id: null })
            }
            else {
                toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    const editCategory = (id, name, img) => {
        setForm({ id, name })
        setImg(`http://192.168.43.152:9000/${img}`)
    }


    const deleteCategory = (id) => {
        axios({
            method: 'delete',
            url: `http://192.168.43.152:9000/product/category/${id}`,
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
        }).then((result) => {
            if (!result.data.isError) {
                setNotif('category delete')
                return toast.success(result.data.message)
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            {/* Button trigger modal */}
            <button type="button"
                className="btn btn-primary mt-3 ms-3"
                data-bs-toggle="modal"
                data-bs-target="#modal-category"
            >
                Add new
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="modal-category"
                tabIndex={-1}
                aria-labelledby="modal-categoryLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bolder" id="exampleModalLabel">
                                Add new categories
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={form.name || ''}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="image"
                                            onChange={fileChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <img src={img} className="img-thumbnail" width={150} height={150} alt="..." />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            category.map((value) => (
                                                <tr>
                                                    <td>{value.name}</td>
                                                    <td>
                                                        <img src={`http://192.168.43.152:9000/${value.image}`} className="img-thumbnail" width={40} alt="..." />
                                                    </td>
                                                    <td>
                                                        <Link onClick={() => {deleteCategory(value.id)}} className="badge bg-danger nav-link link-light me-2">delete</Link>
                                                        <Link onClick={() => {editCategory(value.id, value.name, value.image)}} className="badge bg-primary px-3 nav-link link-light">edit</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
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

export default connect(mapStateToProps)(ModalCategory)