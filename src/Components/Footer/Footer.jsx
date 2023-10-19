import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (

        <footer className="mt-20 relative">
            <div className="w-full p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <Link to='/' className="flex items-center">
                    <img className="h-8 w-[118px] mr-3" src={logo} alt="Site Logo" />
                </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
                        <Link to='/'><li className="mr-4 hover:underline hover:text-[#0000ff] md:mr-6 ">About</li></Link>
                        <Link to='/'><li className="mr-4 hover:underline hover:text-[#0000ff] md:mr-6 ">Privacy Policy</li></Link>
                        <Link to='/'><li className="mr-4 hover:underline hover:text-[#0000ff] md:mr-6 ">Contact</li></Link>                        
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm  sm:text-center">© 2023 <Link to='/' className="hover:underline hover:text-[#0000ff]">CarHub</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer