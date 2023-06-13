const Sidebar = () => {
    return ( 

        <div className="sidebar" class="w-1/5 bg-stone-400 rounded-2xl">

            <div className="heading" class="bg-emerald-900 w-full p-4 rounded-t-2xl">
                <p class="text-white text-bold">Tags and Filters</p>
            </div>

            <div className="sort-dropdown" class="p-4">
                <button class="bg-emerald-700 p-2 rounded">Hello World!</button>
            </div>

            <div className="tags" class="p-4 flex flex-col gap-4">
                <div className="include-tags" class="bg-stone-300 rounded">
                    <h3 class="bg-stone-500 p-2 rounded-t">INCLUDE...</h3>
                    <div className="list" class="p-2">
                        <p>College</p>
                        <p>Department</p>
                        <p>Degree Program</p>
                        <p>University Processes</p>
                        <p>Type of Concern</p>
                    </div>
                </div>

                <div className="exclude-tags" class="bg-stone-300 rounded">
                    <h3 class="bg-stone-500 p-2 rounded-t">EXCLUDE...</h3>
                    <div className="list" class="p-2">
                        <p>College</p>
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