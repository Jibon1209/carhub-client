import { useLoaderData } from "react-router-dom"
import Brand from "./Brand";

const Brands = () => {
    const brands = useLoaderData();
    const uniqueBrands = brands.reduce((acc, car) => {
        if (!acc[car.brand]) {
            acc[car.brand] = car;
        }
        return acc;
    }, {});

    const uniqueBrandData = Object.values(uniqueBrands);
    return (
        <div className="mt-20">
            <h1 className="text-3xl px-4 md:text-5xl font-bold  text-center">Brand</h1>
            <div className="px-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    uniqueBrandData.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
    )
}

export default Brands