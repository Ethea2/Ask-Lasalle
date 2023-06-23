import { Link } from 'react-router-dom'

const Onboarding = () => {
    return (
        <>
            <div className="heading" class="w-8/12 py-6 rounded-2xl m-auto my-10 bg-dark-navy">
                <p class="text-center font-black text-9xl">
                    <span className="text-light-blue-gray">Ask</span>
                    <span className="lasalle-logo" class="text-dark-green">Lasalle</span>
                </p>
                
                <p class="mt-6 text-lg text-center font-semibold text-white">The all in one place where Lasallians can ask their questions.</p>
            </div>
                    <div className="input-email" class="mb-2 w-8/12 m-auto bg-dark-navy p-4 rounded-2xl border-2 border-teal">
                        <label htmlFor="email" className="block text-sm font-medium text-left text-teal mb-2">Your email</label>
                        <input type="email" name="email" id="email" className="bg-lasalle-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@dlsu.edu.ph" required="" />
                    </div>
                    <div className="input-password" class="mt-2 w-8/12 m-auto bg-dark-navy p-4 rounded-2xl border-2 border-teal">
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
                 
            
        </>

    )
}

export default Onboarding;