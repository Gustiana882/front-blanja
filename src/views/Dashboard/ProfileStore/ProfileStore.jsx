/* eslint-disable react-hooks/exhaustive-deps */
import Header from '../../../component/header/header';
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import './profile.css'
import FormData from 'form-data'
import { bindActionCreators } from 'redux'
import ActionsUser from '../../../stores/action/userAction'


const ProfileStore = (props) => {

    const [imageProfile, setimageProfile] = useState('')
    const [formProfile, setformProfile] = useState({
        name: '',
        email: '',
        phone: '',
        store: '',
        address: '',
        image: '',
    })

    const getProfile = () => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_DOMAIN}/profile/${props.user.data.roles}`,
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            },
        }).then((result) => {
            if (!result.data.isError) {
                setimageProfile(`${process.env.REACT_APP_DOMAIN}/${result.data.data[0].image}`)
                props.UserSet({
                    address : result.data.data[0].address,
                    email   : result.data.data[0].email,
                    image   : result.data.data[0].image,
                    name    : result.data.data[0].name,
                    phone   : result.data.data[0].phone,
                    roles   : result.data.data[0].roles,
                })
                return setformProfile(result.data.data[0])
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setformProfile({ ...formProfile, ...{ [name]: value } })
    }

    // console.log(formProfile)

    const fileChange = (event) => {
        const file = event.target.files[0];
        if (file.type === "image/jpg"
            || file.type === "image/png"
            || file.type === "image/jpeg") {
            setformProfile({ ...formProfile, image: file })
            const reader = new FileReader()
            reader.onload = () => {
                setimageProfile(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        getProfile()

    }, [])


    const handleSave = () => {
        let formData = new FormData()
        formData.append('name', formProfile.name)
        formData.append('email', formProfile.email)
        formData.append('phone', formProfile.phone)
        formData.append('store', formProfile.store)
        formData.append('address', formProfile.address)
        formData.append('image', formProfile.image)
        axios({
            method: "put",
            url: `${process.env.REACT_APP_DOMAIN}/profile/${props.user.data.roles}/edit-profile`,
            data: formData,
            headers: {
                'token': props.user.token,
                'content-type': 'multipart/form-data',
            }
        }).then(res => {
            toast.success(res.data.message)
            getProfile()
        }).catch(error => toast.error(error.message))
    }



    return (
        <div className="d-flex container-profile">
            <Header propsHistory={props.history} />
            <Sidebar />
            <section className="vw-100">
                <div className="card m-4">
                    <div className="card-header bg-white my-3">
                        <h5 className="fw-bolder">My Profile Store</h5>
                        <p className="text-muted"><small>Manage your profile information</small></p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="mb-3 row">
                                    <label htmlFor="store-name" className="col-sm-4 col-form-label">
                                        <p className="text-muted"><small>Store Name</small></p>
                                    </label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" name="store" onChange={handleChange} value={formProfile.store} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="email" className="col-sm-4 col-form-label">
                                        <p className="text-muted"><small>Email</small></p>
                                    </label>
                                    <div className="col-sm-7">
                                        <input type="email" disabled className="form-control" value={formProfile.email} />
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <label htmlFor="phone-number" className="col-sm-4 col-form-label" >
                                        <p className="text-muted"><small>Phone number</small></p>
                                    </label>
                                    <div className="col-sm-7">
                                        <input type="number" className="form-control" name="phone" onChange={handleChange} value={formProfile.phone} />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="phone-number" className="col-sm-4 col-form-label" >
                                        <p className="text-muted"><small>Description</small></p>
                                    </label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" name="description" onChange={handleChange} value={formProfile.description || "description"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card border-0">
                                    <div className="rouded-pill mx-auto" style={{ width: '8rem' }}>
                                        <img src={imageProfile} className="img-fluid rounded-pill" alt="" />
                                    </div>
                                    <div className="d-flex justify-content-center my-3">
                                        <input id="input-img-profile" type="file" style={{ display: 'none' }} onChange={fileChange} />
                                        <button className="btn btn-outline-secondary rounded-pill btn-sm px-4" onClick={() => document.getElementById('input-img-profile').click()}>Select image</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger rounded-pill px-5" onClick={handleSave}>Save</button>
                        </div>
                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        UserSet: bindActionCreators(ActionsUser.UserSet, dispatch),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStore);