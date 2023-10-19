import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bacImage1 from '../../assets/bmw1.jpg';
import bacImage2 from '../../assets/m_bmw2.jpg';
import bacImage3 from '../../assets/m_bmw3.jpg';
import BrandDetailsCard from "./BrandDetailsCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../baseurl";


const BrandDetails = () => {
    const {brand} = useLoaderData();
    const [brands, setBrands] = useState([]);
    

    useEffect(()=>{
        fetch(`${BASE_URL}/products`)
        .then(res => res.json())
        .then(data => {
            const remaining = data.filter(br => br.brand === brand);
            setBrands(remaining);
        })
    },[])
  return (
    <div>
        <NavBar></NavBar>
        <div className="mt-10">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className="h-[400px] md:h-[700px] hero "
                    style={{
                        backgroundImage: `url(${bacImage1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}>
                    <div className="hero-content flex flex-col justify-center items-center text-center text-white h-full relative">
                        <h1 data-aos="flip-left" className="mb-5 text-2xl md:text-3xl font-bold">Drive the future with style</h1>
                    </div>
                </div>
                <div className="h-[400px] md:h-[700px] hero" style={{
                    backgroundImage: `url(${bacImage2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}>
                    <div className="hero-content flex flex-col justify-center items-center text-center text-white h-full relative">
                        <h1 data-aos="flip-left" className="mb-5 text-2xl md:text-3xl font-bold">Safety meets sophistication.</h1>
                    </div>
                </div>
                <div className="h-[400px] md:h-[700px] hero" style={{
                    backgroundImage: `url(${bacImage3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}>
                    <div className="hero-content flex flex-col justify-center items-center text-center text-white h-full relative">
                        <h1 data-aos="flip-left" className="mb-5 text-2xl md:text-3xl font-bold">Experience luxury in every mile.</h1>
                    </div>
                </div>
            </Carousel>
        </div>
        <div className="mt-20">
            <h1 className="text-3xl px-4 md:text-5xl font-bold  text-center">Brand</h1>
            {
                brands.length === 0 ? (
                    <p className="text-center mt-4 font-bold">No products found for this brand.</p>
                ) :(
                    <div className="px-4 grid gap-6 grid-cols-1 xl:grid-cols-2 my-20 ">
                {
                    brands.map(brand => <BrandDetailsCard key={brand._id} brand={brand}></BrandDetailsCard>)
                }
            </div>
                )
            }
        </div>
        <Footer></Footer>
    </div>
  )
}

export default BrandDetails