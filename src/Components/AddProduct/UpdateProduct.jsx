import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar"
import { BASE_URL } from "../../baseurl";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id,brand,image,name,price,rating,type,description} = product;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const brand = form.get('brand');
        const type = form.get('type');
        const price = form.get('price');
        const description = form.get('description');
        const rating = form.get('rating');
        const image = form.get('image');
        const updateProduct = { name, brand, type, price, description, rating, image };
        console.log(name, brand, type, price, description, rating, image);

        fetch(`${BASE_URL}/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Product Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }

        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-20 px-4">
                <form onSubmit={handleUpdateProduct} >
                    <h2 className="text-4xl text-center font-bold mb-10">Update Product</h2>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 md:mr-4">
                            <label className="label ">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 md:mr-4">
                            <label className="label ">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 md:mr-4">
                            <label className="label ">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label ">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update" className="btn btn-block text-white bg-blue-700 hover:bg-blue-800" />
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct