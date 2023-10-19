import PropTypes from 'prop-types';

const CarousalCard = ({ product }) => {
    const {image, name,brand,type} = product
    return (
        <div className='flex justify-center items-center mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image}/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions flex-col justify-start">
                    <div className="font-semibold">Brand: {brand}</div>
                    <div className="font-semibold">Type: {type}</div>
                </div>
            </div>
        </div>
        </div>
    )
}
CarousalCard.propTypes = {
    product: PropTypes.object
}
export default CarousalCard