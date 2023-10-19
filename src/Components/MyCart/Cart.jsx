import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../baseurl';

const Cart = ({ cart, carts, setCarts }) => {

    const { _id, productBrand, productImage, productName, productPrice, productType } = cart;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${BASE_URL}/carts/${id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                              )

                              const remaining = carts.filter(crt => crt._id !== _id);
                              setCarts(remaining);
                        }
                    })

            }
        })
    }

    return (

        <tbody>
                <tr>
                    <th></th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={productImage} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{productName}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="font-bold">{productBrand}</div>
                    </td>
                    <td> <div className="font-bold">{productType}</div></td>
                    <td> <div className="font-bold">{productPrice}</div></td>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn text-white  bg-blue-700 hover:bg-blue-800 btn-xs">Delete</button>
                    </th>
                </tr>
            </tbody>  
    )
}

Cart.propTypes = {
    cart: PropTypes.object,
    carts: PropTypes.array,
    setCarts: PropTypes.func

}
export default Cart