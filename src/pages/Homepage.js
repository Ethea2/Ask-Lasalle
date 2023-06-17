import Navbar from "../components/Navbar";
import Postcard from "../components/Postcard";
import Sidebar from "../components/Sidebar";

const Homepage = () => {

    const posts = [
        {
            postid: 1,
            title: "Where can I find agno?",
            comments: 30,
            user: "nathan",
            img: "https://www.shutterstock.com/image-illustration/cybernetic-visions-reloaded-3d-illustration-600w-1555158278.jpg"
        },
        {
            postid: 2,
            title: "Why does lasalle have bidet?",
            comments: 50,
            user: "patty",
            img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/323044217_594634382671516_7065407932327472719_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGnmu13q1N7RVAwPri2U23_EaVpWHtd0LARpWlYe13QsGq2Sqi4hyi4xJSBhCnvnIY&_nc_ohc=-PhjMCGNlyYAX_5-S6j&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfAQjLNtIkKiSaVpihUB5iOL-ncJSHL8xzMTehgS6d1OuA&oe=64933C2C"
        },
        {
            postid: 3,
            title: "Why are there so many vapers in lasalle?",
            comments: 24,
            user: "matt",
            img: "https://www.codespeedy.com/wp-content/uploads/2020/01/low.jpg"
        },
        {
            postid: 4,
            title: "How old are you?",
            comments: 32,
            user: "jex",
            img: "https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg"
        },
        {
            postid: 5,
            title: "Ilang taon na po yung Sam sa GT?",
            comments: 241,
            user: "andee",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
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