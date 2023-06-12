import { Link } from 'react-router-dom'

const Onboarding = () => {
    return (
        <div>
            <div className="w-screen h-screen flex items-center justify-center bg-d-lasalle">
                <div className="w-1/3 text-center">
                    <span className="text-9xl text-white">Ask</span>
                    <span className="text-9xl text-l-lasalle">Lasalle</span>
                    <p className="text-xl m-5 font-bold">The all in one place where Lasallians can ask their questions.</p>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-lasalle-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@dlsu.edu.ph" required="" />
                    </div>
                    <div className="mt-3 mb-10">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-lasalle-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    <div className="flex justify-center">
                        <Link to="/homepage" className="relative inline-flex items-center justify-start py-3 pl-12 pr-14 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-14 hover:pr-12 bg-lasalle-white group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-l-lasalle group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-d-lasalle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-d-lasalle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">Sign-in</span>
                        </Link>
                    </div>
                    <div className="mt-12 sticky bottom-0">Don't have an account? <span className="font-bold text-sky-600"><Link to="/signup">Sign-up</Link></span> now!</div>
                </div>  
            </div>
        </div>

    )
}

export default Onboarding;