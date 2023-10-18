import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { BASE_URL } from "../../baseurl";

const SignIn = () => {
    const { signIn,googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email, password)
            .then((result) => {
                const user ={
                    email,
                    lastLoggedAt: result.user.metadata?.lastSignInTime
                }
                fetch(`${BASE_URL}/users`,{
                    method: 'PATCH',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Sign in successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                if (error.code !== "auth/invalid-login-credential") {  
                    Swal.fire({
                        title: 'Error!',
                        text: 'The password or email you entered does not match.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })            
                  }
                  else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error sign In: ' + error.message,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })                   
                  }                
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const name = result.user?.displayName;
                const email = result.user.email;
                const photo = result.user?.photoURL
                const createAt = result.user.metadata?.creationTime;
                const userinfo = { name, email, photo, createdAt: createAt };
                fetch(`${BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userinfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'success!',
                                text: 'Sign Up successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                        }

                    })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error sign Out: ' + error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
    }
    return (
        <div className="w-full min-h-screen flex justify-center items-center ">
            <div className="relative w-[380px] h-[420px] rounded-lg shadow-xl overflow-hidden">
                <div className=" rounded-lg z-10 p-5">
                    <form onSubmit={handleSignIn}>
                        <h2 className="text-4xl font-bold text-center mb-6">Sign In</h2>
                        <div className="relative z-0 w-full mb-6 ">
                            <input type="email" name="email" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 ">
                            <input type="password" name="password" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                        <button onClick={handleGoogleSignIn} className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FcGoogle className="w-6 h-6 inline mr-2"></FcGoogle> Sign in with Google</button>
                    </form>
                    <div className="text-center text-gray-400">
                        <p className="text-center mt-4">Do not have an account <Link className="text-[#0000ff] font-bold" to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn