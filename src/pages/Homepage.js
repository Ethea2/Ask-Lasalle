import Navbar from "../components/Navbar";
import Postcard from "../components/Postcard";
import Sidebar from "../components/Sidebar";

const Homepage = () => {

    const posts = [
        {
            postid: 1,
            title: "Where can I find agno?",
            comments: 30,
            user: "nathan"
        },
        {
            postid: 2,
            title: "Why does lasalle have bidet?",
            comments: 50,
            user: "patty"
        },
        {
            postid: 3,
            title: "Why are there so many vapers in lasalle?",
            comments: 24,
            user: "matt"
        },
        {
            postid: 4,
            title: "How old are you?",
            comments: 32,
            user: "jex"
        },
        {
            postid: 5,
            title: "Ilang taon na po yung Sam sa GT?",
            comments: 241,
            user: "andee"
        }
    ]
    return (
        <>

            <div className="nav">
                <Navbar />
            </div>
            <div className="homepage flex">
                <div className="w-80 m-14">
                    <Sidebar />
                </div>

                <div className="flex-col w-2/3 mt-14">
                    {
                        posts.map((post) => {
                            return (
                                <Postcard post={post} key={post.postid}></Postcard>
                            )
                        })
                    }
                </div>


            </div>
        </>

    );
}

export default Homepage;