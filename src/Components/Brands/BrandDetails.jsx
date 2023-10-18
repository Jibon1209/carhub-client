import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const BrandDetails = () => {
    const brands = useLoaderData();
    console.log(brands);
  return (
    <div>
        <NavBar></NavBar>

        <Footer></Footer>
    </div>
  )
}

export default BrandDetails