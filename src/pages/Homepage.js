import Navbar from "../components/Navbar";
import Postcard from "../components/Postcard";
import Sidebar from "../components/Sidebar";

const Homepage = () => {

    const post = {
        postid: 1,
        title: "Where can I find agno?",
        comments: 30
    }
    return ( 

        <div className="homepage">
            <div className="nav">
                <Navbar />
            </div>

            
            <div className="side" class="mt-14 ml-14 mb-14">
                <Sidebar />
            </div>
            
            <div>
                <Postcard post={post}></Postcard>
            </div>
            
        </div>
     );
}
 
export default Homepage;