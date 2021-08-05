
import { Link } from 'react-router-dom'
import Star from '../star/star'
const Card = (props) => {
    return (
        <Link to={`/detail/${props.slug}`} className="link-secondary nav-link p-0">
            <div className="card shadow-sm h-100 border-0">
                <img src={`http://192.168.43.152:9000/${props.image}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title text-medium">
                        {props.title}
                    </h6>
                    <div className="price">{props.price}</div>
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