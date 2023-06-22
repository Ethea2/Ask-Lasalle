import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( 

        <div className="sidebar">

            <div className="new-post">
                <Link to="/createpost">
                    <button class="w-full p-2 mb-4 rounded-2xl bg-emerald-600 text-center hover:bg-emerald-700">Post something!</button>   
                </Link>        
            </div>

            <div className="organize" class="w-full bg-stone-400 rounded-2xl">
                <div className="heading" class="bg-emerald-900 w-full p-4 rounded-t-2xl">
                    <p class="text-white text-bold">Tags and Filters</p>
                </div>

                <div className="sort-dropdown" class="group p-4 pb-0 pt-4">
                    <button class="ease-in duration-75 block bg-emerald-700 p-2 rounded-2xl w-full">Sort by...</button>
                        <div className="filters" class="hidden mt-2 ease-in duration-75 group-hover:block hover:block bg-white rounded-2xl py-2">
                            <p class="block px-4 py-2 ease-in duration-75 hover:text-emerald-700 hover:font-bold">Upvotes</p>
                            <p class="block px-4 py-2 ease-in duration-75 hover:text-emerald-700 hover:font-bold">Comments</p>
                        </div>
                </div>

                <div className="tags" class="p-4 flex flex-col gap-4">
                    <div className="include-tags" class="bg-stone-300 rounded">
                        <h3 class="bg-stone-500 p-2 rounded-t">INCLUDE...</h3>
                        <div className="list" class="p-2">
                            <div className="college-list" class="group m-4">
                                <p class="block duration-75 ease-in group-hover:bg-stone-400 group-hover:px-2 group-hover:py-0.5 group-hover:rounded-lg group-hover:mb-1">College</p>
                                <div className="college-filters" class="hidden group-hover:block hover:block bg-white rounded-lg py-2 px-1.5 mt-2">
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Computer Studies</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Education</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Business</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Liberal Arts</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Economics</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Science</p>
                                    <p class="py-0.5 px-2 rounded-lg hover:text-emerald-700 hover:font-bold">Engineering</p>
                                </div>
                            </div>

                            <div className="college-list" class="group m-4">
                                <p class="block duration-75 ease-in group-hover:bg-stone-400 group-hover:px-2 group-hover:py-0.5 group-hover:rounded-lg group-hover:mb-1">Degree Program</p>
                                <div className="college-filters" class="hidden group-hover:block hover:block bg-white rounded-lg py-2 px-1.5 mt-2">
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BS CS-ST</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BS CS-CSE</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BS CS-NIS</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BSMSCS</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BSIT</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BSIS</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">BS IET-GD</p>
                                    <p class="py-0.5 px-2 rounded-lg hover:text-emerald-700 hover:font-bold">BS IET-AD</p>
                                </div>
                            </div>

                            <div className="college-list" class="group m-4">
                                <p class="block duration-75 ease-in group-hover:bg-stone-400 group-hover:px-2 group-hover:py-0.5 group-hover:rounded-lg group-hover:mb-1">University Processes</p>
                                <div className="college-filters" class="hidden group-hover:block hover:block bg-white rounded-lg py-2 px-1.5 mt-2">
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Enlistment</p>
                                    <p class="py-0.5 px-2 rounded-lg mb-2 hover:text-emerald-700 hover:font-bold">Pre-Enlistment</p>
                                    <p class="py-0.5 px-2 rounded-lg hover:text-emerald-700 hover:font-bold">Enrollment</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="select-buttons" class="flex justify-between">
                        <button class="bg-neutral-300 p-2 rounded ease-in duration-75 hover:bg-neutral-400">Clear</button>
                        <button class="bg-neutral-300 p-2 rounded ease-in duration-75 hover:bg-neutral-400">Sort & Filter</button>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Sidebar;