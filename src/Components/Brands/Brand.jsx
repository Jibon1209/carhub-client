import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { _id,image, name, brand: brnd } = brand;
    return (
        <div className='mt-20'>
            <Link to={`/brandDetails/${_id}`}>
                <div className="card  shadow-xl">
                    <figure><img className='w-full' src={image} alt="" /></figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title ">{name} - {brnd}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}
Brand.propTypes = {
    brand: PropTypes.object
}
export default Brand