import img from '../../assets/hero.png';
import bgimg from '../../assets/hero-bg.png';

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 ">
      <div className="flex-1 px-6 lg:px-16 ">
        <h1 className="text-3xl lg:text-5xl font-extrabold">
          Find, Your dream car—quick and super easy!
        </h1>

        <p className="text-xl text-black font-light mt-5">
          Streamline your car experience with our effortless booking
          process.
        </p>
      </div>
      <div className=" flex flex-1 px-6 lg:px-16 justify-end items-end w-full">
        <div className="relative w-full">
            <img src={img} alt="" />
        </div>
        <div className="absolute  -z-10 xl:w-[590px] xl:h-[390px] object-fill  bg-repeat-round overflow-hidden"        
        style={{
            backgroundImage: `url(${bgimg})`
        }}></div>
      </div>
    </div>
  )
}

export default Banner