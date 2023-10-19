import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
import CarousalCard from "./CarousalCard";
import { useEffect, useState } from "react";

const LatestCar = ({ products }) => {
    console.log(products);
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(26);

    useEffect(() => {
        const updateCenterSlidePercentage = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setCenterSlidePercentage(80);
            } else if (screenWidth < 1024) {
                setCenterSlidePercentage(50);
            } else {
                setCenterSlidePercentage(26);
            }
        };
        updateCenterSlidePercentage();
        window.addEventListener('resize', updateCenterSlidePercentage);
        return () => {
            window.removeEventListener('resize', updateCenterSlidePercentage);
        };
    }, []);
    return (
        <div className="mt-20 px-4">
            <h1 className="text-2xl px-4 md:text-5xl font-bold  text-center">Latest Featured Cars</h1>
            <div className="mt-20">
                <Carousel autoPlay showIndicators={false} infiniteLoop selectedItem={1} autoFocus={true} centerSlidePercentage={centerSlidePercentage} centerMode={true} showThumbs={false}>
                    {
                        products.map(product => <CarousalCard key={product._id} product={product}></CarousalCard>)
                    }
                </Carousel>
            </div>
        </div>
    )
}
LatestCar.propTypes = {
    products: PropTypes.array
}
export default LatestCar