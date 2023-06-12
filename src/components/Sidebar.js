const Sidebar = () => {
    return ( 

        <div className="sidebar">

            <div className="header">
                <h2>Tags and Filters</h2>
            </div>

            <div className="sort">
                    <button class="peer w-[200px] px-5 py-2 bg-green-600 hover:bg-green-700 text-white">Dropdown</button>
                
                <div class="hidden peer-hover:flex w-[200px] hover:flex flex-col bg-white drop-shadow-lg">
                    <a class="px-5 py-2 hover:bg-gray-200" href="#">Upvotes</a>
                    <a class="px-5 py-2 hover:bg-gray-200" href="#">Comments</a>
                </div>
            </div>

            <div className="tags">
                <div className="include">
                    <p>Include...</p>
                    <ul>
                        <li>Department</li>
                        <li>College</li>
                    </ul>
                </div>

            </div>

        </div>

     );
}
 
export default Sidebar;