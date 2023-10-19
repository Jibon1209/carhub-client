import { useLoaderData } from "react-router-dom"
import Banner from "../Banner/Banner"
import Brands from "../Brands/Brands"
import Footer from "../Footer/Footer"
import LatestCar from "../LatestCar/LatestCar"
import NavBar from "../NavBar/NavBar"
import ContactUs from "../ContactUs/ContactUs"


const Home = () => {
  const products = useLoaderData()
    
  return (
    <div>
        
        <NavBar></NavBar>
        <Banner></Banner>
        <LatestCar products={products}></LatestCar>
        <Brands></Brands>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
  )
}

export default Home