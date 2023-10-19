import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
import PropTypes from 'prop-types';

const Rating = ({rating}) => {

    const ratingStar = Array.from({length: 5},(e,index)=>{
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    rating >= index + 1 ? 
                    <FaStar /> : rating >= number ?
                     <FaStarHalfAlt/> : <AiOutlineStar/>
                }
            </span>
        )
    })
  return (
    <div className='flex justify-center items-center ml-2 text-orange-400'>
        {ratingStar}
    </div>
  )
}
Rating.propTypes = {
    rating: PropTypes.string
}
export default Rating