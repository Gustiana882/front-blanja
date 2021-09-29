import Header from '../../../component/header/header'
import Sidebar from '../Sidebar/Sidebar'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Alert from '../../../component/alert/alert'
import { toast } from 'react-toastify';
import FormData from 'form-data'
import ModalCategory from './ModalCategory'
import Editor from '../../../component/text-editor/text-editor'
import { connect } from 'react-redux'

const Inventory = (props) => {
    const [load, setLoad] = useState(false)
    const [category, setCategory] = useState([])
    const [img, setImg] = useState('https://res.cloudinary.com/dhu2tfdji/image/upload/v1632887984/samples/image-not-found_lubthc.jpg')
    const [form, setform] = useState({
        category: '',
        description: "description",
        condition: "New",
        review: 20,
        star: 4,
    })

    const getCategory = () => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_DOMAIN}/product/category`,
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
        setLoad(false)
    }, [load])


    const handleInput = (event) => {
        const { name, value } = event.target
        setform({ ...form, [name]: value })
    }


    const handleClickJual = async () => {
        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("category", form.category)
        formData.append("price", form.price)
        formData.append("brand", form.brand)
        formData.append("condition", form.condition)
        formData.append("description", form.description)
        formData.append("star", form.star)
        formData.append("review", form.review)
        formData.append("image", form.image)
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_DOMAIN}/product`,
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
            data: formData
        }).then((result) => {
            if (result.data.isError) {
                toast.error(result.data.message)
            }
            else {
                toast.success(result.data.message)
                setform({
                    category: '',
                    description: "description",
                    condition: "New",
                    review: 20,
                    star: 4,
                });
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    const fileChange = (event) => {
        const file = event.target.files[0];
        if (file.type === "image/jpg"
            || file.type === "image/png"
            || file.type === "image/jpeg") {
            setform({ ...form, image: file })
            const reader = new FileReader()
            reader.onload = () => {
                setImg(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="d-flex" style={{ marginTop: '60px', backgroundColor: '#F1F1F1' }}>
            <Header propsHistory={props.history}/>
            <Sidebar />
            <Alert />
            <section className="vw-100">
                <div className="card m-4">
                    <h5 className="card-header bg-white my-3">Inventory</h5>
                    <div className="card-body">
                        <div className="mb-3 w-50">
                            <label className="form-label"> Name Of Goods </label>
                            <input type="text" name="name" className="form-control" onChange={handleInput} />
                        </div>

                    </div>
                </div>

                <div className="card m-4">
                    <h5 className="card-header bg-white my-3">Item Detailes</h5>
                    <div className="card-body">
                        <div className="mb-3 w-50">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Unit Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                onChange={handleInput}
                            />
                        </div>
                        <div className="d-flex">
                            <div className="mb-3 w-50">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Category
                                </label>
                                <select className="form-select" name="category" onChange={handleInput}>
                                    <option value={-1}>category</option>
                                    {category.map((val, i) => <option key={i} value={val.id}>{val.name}</option>)}
                                </select>
                            </div>
                            <div className="my-auto">
                                {/* <button className="btn btn-primary mt-3 ms-3">Add new</button> */}
                                <ModalCategory callback={setLoad}/>
                            </div>
                        </div>
                        
                        <div className="mb-3 w-50">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Brand
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="brand"
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-3 w-50">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Stock
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="stock"
                                onChange={() => { }}
                            />
                        </div>
                        <div className="d-flex">
                            <div className="form-check me-5">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="condition"
                                    value="New"
                                    onChange={handleInput}
                                    defaultChecked
                                />
                                <label className="form-check-label" htmlFor="condition1">
                                    New
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="condition"
                                    value="Secondhand"
                                    onChange={handleInput}
                                />
                                <label className="form-check-label" htmlFor="condition2">
                                    secondhand
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-4">
                    <h5 className="card-header bg-white my-3">Photo Of Goods</h5>
                    <div className="card-body">
                        <div className="mb-3 w-25">
                            <img src={img} className="img-thumbnail" alt="..." />
                        </div>
                        <div className="mb-3 w-50">
                            <label className="form-label">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                name="brand"
                                onChange={fileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="card m-4">
                    <h5 className="card-header bg-white my-3">Description</h5>
                    <div className="card-body">
                        <div className="card">
                            <div>
                                <Editor callback={(desc)=>setform({...form, description: desc})} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5 d-flex justify-content-end">
                    <button className="btn btn-danger rounded-pill px-5 me-4 fw-bolder" onClick={handleClickJual}>Jual</button>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Inventory)