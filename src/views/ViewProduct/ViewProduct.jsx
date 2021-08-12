import Header from "../../component/header/header"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Card from '../../component/card/card'


const ViewProduct = (props) => {
    const GetQueryParam = key => new URLSearchParams(useLocation().search).get(key)
    const product = GetQueryParam('p')
    const name = GetQueryParam('name')
    const category = GetQueryParam('category')
    const price = GetQueryParam('price')
    const [searchResult, setsearchResult] = useState([])

    const searchProduct = () => {
        if (props.history.location.pathname === '/filter') {
            Axios({
                method: 'get',
                url: `${process.env.REACT_APP_DOMAIN}/product/filter?name=${name}&category=${category}&price${price}`
            }).then(result => setsearchResult(result.data.data))
        } else {
            Axios({
                method: 'get',
                url: `${process.env.REACT_APP_DOMAIN}/product/search?p=${product}`
            }).then(result => setsearchResult(result.data.data))
        }
    }


    useEffect(() => {
        searchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])


    return (
        <div>
            <Header propsHistory={props.history} />
            <div className="container container-detail">
                <nav className="breadcrumb-detail col-12 col-md-12 col-lg-8 ms-auto me-auto" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/" className="link-breadcrumd-detail">Home</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/" className="link-breadcrumd-detail">Product</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/" className="link-breadcrumd-detail">Search</Link>
                        </li>
                    </ol>
                </nav>
                <div className="">
                    <h4 className="fw-bold">Seacrh result : ' {product} '</h4>
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
                    {searchResult.map((val, i) =>
                        <div className="col py-3" key={i}>
                            <Card
                                title={val.name}
                                price={val.price}
                                brand={val.brand}
                                review={val.review}
                                image={val.image}
                                slug={`${val.name.replace(/ /, '-')}-${val.id}`} />
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default ViewProduct