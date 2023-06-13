import { Link } from "react-router-dom";

export const Signup = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-d-lasalle">
            <div className="mb-7">
                <span className="text-8xl text-white">Ask</span>
                <span className="text-8xl text-l-lasalle">Lasalle</span>
            </div>
            <div className="bg-lasalle-white w-1/4 h-1/2 rounded-lg">
                <div className="mt-10 w-full flex flex-row justify-center">
                    <div className="w-2/3">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-left text-gray-900">Username</label>
                        <input type="text" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                </div>
                <div className="mt-3 w-full flex flex-row justify-center">
                    <div className="w-2/3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-gray-900">Email</label>
                        <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                </div>
                <div className="mt-3 w-full flex flex-row justify-center">
                    <div className="w-2/3">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-left text-gray-900">Password</label>
                        <input type="password" name="password" id="password" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                </div>
                <div className="mt-3 w-full flex flex-row justify-center">
                    <div className="w-2/3">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-left text-gray-900">Confirm Password</label>
                        <input type="password" name="password" id="password" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/homepage" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-emerald-600 border-2 border-emerald-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span class="absolute left-0 block w-full h-0 transition-all bg-emerald-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative">Create Account</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;