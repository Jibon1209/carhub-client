import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const BrandDetailsCard = ({ brand }) => {
    const {_id,brand:brnd,image,name,price,rating,type} = brand;
    return (
        <div className="card md:card-side shadow-xl">
            <figure className="items-stretch justify-stretch"><img className='w-full h-full' src={image} alt="Movie" /></figure>
            <div className="md:flex mt-2 md:mt-0 pr-4 items-center justify-between w-full">
                <div className='ml-4 xl:ml-10 md:mb-2' >
                    <p className='text-xl font-semibold'>Name: {name}</p>
                    <p className='text-xl font-semibold'>Brand Name: {brnd}</p>
                    <p className='text-xl font-semibold'>Type: {type}</p>
                    <p className='text-xl font-semibold'>Price: {price} BDT</p>
                    <p className='text-xl font-semibold flex'>Rating: <Rating rating={rating}></Rating> ({rating})</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="md:btn-group md:btn-group-vertical my-4 mx-auto justify-center items-center space-y-4">
                        <Link>
                        <button className="btn rounded-full text-white bg-blue-700 hover:bg-blue-800">Details</button>
                        </Link>
                        <Link to={`/updateproduct/${_id}`}>
                            <button className="btn rounded-full text-white bg-blue-700 hover:bg-blue-800">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
BrandDetailsCard.propTypes = {
    brand: PropTypes.object
}
export default BrandDetailsCard