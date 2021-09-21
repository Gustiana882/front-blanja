
import { Link } from 'react-router-dom'
import Star from '../star/star'
import Rupiah from '../../helper/rupiah'
import './card.css'
const Card = (props) => {
    return (
        <Link to={`/detail/${props.slug}`} className="link-secondary nav-link p-0 h-100">
            <div className="card shadow-sm h-100 border-0">
                <img src={props.image} className="card-img-top h-100 p-3" style={{maxHeight: '200px'}} alt="..." />
                <div className="card-body">
                    <h6 className="card-title text-medium fw-bolder">
                        {props.title}
                    </h6>
                    <div className="price">{Rupiah(props.price)}</div>
                    <small className="brand text-secondary">{props.brand}</small>
                    <div className="d-flex align-items-center">
                        <div className="star">
                            <Star review={props.review}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;