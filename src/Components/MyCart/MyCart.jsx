import { useLoaderData } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Cart from "./Cart";

const MyCart = () => {
  const loadedCard = useLoaderData();  
  const { user } = useContext(AuthContext);
  const currentUser = user.email;
  const filteredCarts = loadedCard.filter(loaded => loaded.userId === currentUser);
  const [carts, setCarts] = useState(filteredCarts);
  return (
    <div>
      <NavBar></NavBar>
      <div className="overflow-x-auto">
        <table className="table  ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          {
            carts.map(cart => <Cart key={cart._id} cart={cart} carts={carts} setCarts={setCarts} ></Cart>)
          }
        </table>

      </div>
    </div>
  )
}

export default MyCart