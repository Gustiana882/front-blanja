import Header from '../../../component/header/header';
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import cookie from '../../../helper/cookie'

const Profile = () => {

    const [profile, setProfile] = useState([{
        name: '',
        email: '',
        phone: '',
    }])
    
    const getProfile = () => {
        axios({
            method: 'get',
            url: 'http://192.168.43.152:9000/profile',
            headers: {
                'token': cookie.getCookie().token,
                'content-type': 'multipart/form-data',
            },
        }).then((result) => {
            if (!result.data.isError) {
                return setProfile(result.data.data)
            } else {
                return toast.error(result.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(()=>{
        getProfile()
    }, [])

    console.log(profile)
    return (
        <div className="d-flex" style={{ marginTop: '60px', backgroundColor: '#F1F1F1' }}>
            <Header />
            <Sidebar />
            <section className="vw-100">
                <div className="card m-4">
                    <div className="card-header bg-white my-3">
                        <h5>My Profile Store</h5>
                        <p><small>Manage your profile information</small></p>
                    </div>
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label htmlFor="store-name" className="col-sm-4 col-form-label">
                                Store Name
                            </label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="store-name" value={profile[0].name} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-7">
                                <input type="email" disabled className="form-control" id="email" value={profile[0].email} />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="phone-number" className="col-sm-4 col-form-label" >
                                Phone Number
                            </label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="phone-number" value={profile[0].phone} />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="description" className="col-sm-4 col-form-label">
                                Store Description
                            </label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="description" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger rounded-pill px-5">Save</button>
                        </div>



                    </div>
                </div>
            </section>

        </div>
    )
}


export default Profile;