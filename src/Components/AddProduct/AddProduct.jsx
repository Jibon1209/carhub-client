import Swal from "sweetalert2";
import { BASE_URL } from "../../baseurl";
import NavBar from "../NavBar/NavBar"

const AddProduct = () => {

  const resetForm = () => {
    document.getElementById('productForm').reset();
  };
  
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const brand = form.get('brand');
    const type = form.get('type');
    const price = form.get('price');
    const description = form.get('description');
    const rating = form.get('rating');
    const image = form.get('image');
    const newProduct = { name, brand, type, price, description, rating, image };

    fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          resetForm();
        } 
      })
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-20 px-4">
        <form onSubmit={handleAddProduct} id="productForm">
          <h2 className="text-4xl text-center font-bold mb-10">Add Product</h2>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 md:mr-4">
              <label className="label ">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label ">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 md:mr-4">
              <label className="label ">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label ">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 md:mr-4">
              <label className="label ">
                <span className="label-text">Short description</span>
              </label>
              <label className="input-group">
                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label ">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control md:w-full">
              <label className="label ">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Product" className="btn btn-block text-white bg-blue-700 hover:bg-blue-800" />
        </form>
      </div>
    </div>
  )
}

export default AddProduct