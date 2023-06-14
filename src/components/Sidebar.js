const Sidebar = () => {
    return ( 

        <div className="sidebar" class="w-1/5 bg-stone-400 rounded-2xl">

            <div className="heading" class="bg-emerald-900 w-full p-4 rounded-t-2xl">
                <p class="text-white text-bold">Tags and Filters</p>
            </div>

            <div className="sort-dropdown" class="p-4">
                <button class="peer block bg-emerald-700 p-2 rounded-lg w-full hover:rounded-b-none">Sort by...</button>
                <div className="filters" class="hidden peer-hover:block hover:block bg-white rounded-b-lg py-2">
                    <p class="block px-4 py-2 hover:bg-slate-200">Upvotes</p>
                    <p class="block px-4 py-2 hover:bg-slate-200">Comments</p>
                </div>
            </div>

            <div className="tags" class="p-4 flex flex-col gap-4">
                <div className="include-tags" class="bg-stone-300 rounded">
                    <h3 class="bg-stone-500 p-2 rounded-t">INCLUDE...</h3>
                    <div className="list" class="p-2">

                        <div className="college-list">
                            <p class="peer block">College</p>
                            <div className="college-filters" class="hidden peer-hover:block hover:block bg-white rounded-lg py-2 px-1.5">
                                <p>Computer Studies</p>
                                <p>Education</p>
                                <p>Business</p>
                                <p>Liberal Arts</p>
                                <p>Economics</p>
                                <p>Science</p>
                                <p>Engineering</p>
                            </div>
                        </div>
                        
                        <div className="dept-list">
                            <p class="peer block">Department</p>
                            <div className="dept-filters" class="hidden peer-hover:block hover:block bg-white rounded-lg py-2 px-1.5">
                                <p>Department 1</p>
                                <p>Department 2</p>
                                <p>Department 3</p>
                            </div>
                        </div>
                        
                        <p>Degree Program</p>
                        <p>University Processes</p>
                        <p>Type of Concern</p>
                    </div>
                </div>

                <div className="exclude-tags" class="bg-stone-300 rounded">
                    <h3 class="bg-stone-500 p-2 rounded-t">EXCLUDE...</h3>
                    <div className="list" class="p-2">
                    <div className="college-list">
                            <p class="peer block">College</p>
                            <div className="college-filters" class="hidden peer-hover:block hover:block bg-white rounded-lg py-2 px-1.5">
                                <p>Computer Studies</p>
                                <p>Education</p>
                                <p>Business</p>
                                <p>Liberal Arts</p>
                                <p>Economics</p>
                                <p>Science</p>
                                <p>Engineering</p>
                            </div>
                        </div>

                        <p>Department</p>
                        <p>Degree Program</p>
                        <p>University Processes</p>
                        <p>Type of Concern</p>
                    </div>
                </div>

                <div className="select-buttons" class="flex justify-between">
                    <button class="bg-neutral-300 p-2 rounded">Clear</button>
                    <button class="bg-neutral-300 p-2 rounded">Sort & Filter</button>
                </div>
            </div>
        </div>

     );
}
 
export default Sidebar;