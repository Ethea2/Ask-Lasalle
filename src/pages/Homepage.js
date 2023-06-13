import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
    return ( 

        <div className="homepage">
            <div className="nav">
                <Navbar />
            </div>

            <div className="side" class="mt-14 ml-14 mb-14">
                <Sidebar />
            </div>
            
            
        </div>
     );
}
 
export default Homepage;