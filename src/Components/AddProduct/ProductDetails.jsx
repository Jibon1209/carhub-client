import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Rating from "../Brands/Rating";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { BASE_URL } from "../../baseurl";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { _id, brand, image, name, price, rating, type, description } = useLoaderData();
    const currentUser = user.email;
    const handleAddToCart = () => {
        const userId = currentUser;
        const productId = _id;
        const productName = name;
        const productBrand = brand;
        const productType = type;
        const productPrice = price;
        const productImage = image;
        const addToCart = { userId, productId, productName, productBrand, productType, productPrice, productImage };
        console.log(addToCart);

        fetch(`${BASE_URL}/carts`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(addToCart)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                Swal.fire({
                  title: 'success!',
                  text: 'Product Added to your cart successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
              } 
              navigate(location?.state ? location.state : '/mycart');
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-20 px-4">
                <h1 className="text-3xl px-4 md:text-5xl font-bold  text-center">Product Details</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
                    <img className="rounded-xl" src={image} alt="" />
                    <div className="flex  justify-center items-center mt-4 lg:ml-20">
                        <div className="space-y-2">
                            <h1 className='text-xl font-semibold'>Name: {name} - {brand}</h1>
                            <h1 className='text-xl font-semibold'>Type: {type}</h1>
                            <h1 className='text-xl font-semibold'>Price: {price} BDT</h1>
                            <h1 className='text-xl font-semibold flex '>Rating: <Rating rating={rating}></Rating></h1>
                            <button onClick={handleAddToCart} className="btn text-white bg-blue-700 hover:bg-blue-800">Add to Cart</button>
                            <div>
                                <p className="text-lg"><span className="text-lg font-semibold">Description:</span> {description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails