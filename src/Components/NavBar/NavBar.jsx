import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/logo.svg';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'success!',
                    text: 'Sign out successfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error sign Out: ' + error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
    }

    const navLinks = <>
        <li><NavLink to='/' style={({ isActive }) => ({
            color: isActive ? "#0000ff" : "#110c01",
            background: 'none',
        })}>Home</NavLink></li>
        <li><NavLink to='/addproduct' style={({ isActive }) => ({
            color: isActive ? "#0000ff" : "#110c01",
            background: 'none',
        })}>Add Product</NavLink></li>
        <li><NavLink to='/mycart' style={({ isActive }) => ({
            color: isActive ? "#0000ff" : "#110c01",
            background: 'none',
        })}>My Cart</NavLink></li>
    </>
    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between p-4">
                <Link to='/' className="flex items-center">
                    <img className="h-8 w-[118px] mr-3" src={logo} alt="Site Logo" />
                </Link>
                <div className="flex items-center md:order-2">
                   {
                    user &&
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">                              
                                <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-3  menu menu-sm dropdown-content bg-gray-200 rounded-xl">
                        <li className="text-[#0000ff]">{user?.displayName}</li>
                        <li className="text-[#0000ff]">{user?.email}</li>
                    </ul>
                </div>
                   }
                    {
                    user ?
                        <button onClick={handleSignOut} className=" text-black font-bold hover:text-[#0000ff] ">Log Out</button>
                        :
                        <Link to='/signin'>
                            <button className=" text-black font-bold hover:text-[#0000ff] ">Sign In</button>
                        </Link>
                }
                    <div className="dropdown">
                        <div className=" md:hidden btn btn-ghost " onClick={() => setOpen(!open)}>
                            {
                                open === true ?
                                    <AiOutlineClose /> : <AiOutlineMenu />
                            }
                        </div>
                        <ul tabIndex={0} className={` menu menu-sm mt-3 text-base  absolute right-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:hidden  ${open ? '' : 'dropdown-content'}`}>
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="menu menu-horizontal font-bold px-1 ">
                        {navLinks}
                    </ul>
                </div>
            </div>            
        </nav>

    )
}

export default NavBar