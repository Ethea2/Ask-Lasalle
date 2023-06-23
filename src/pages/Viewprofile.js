import { useParams, Link } from "react-router-dom"
import useFetchUser from "../hooks/useFetchUser"
import useFetchFiltered from "../hooks/useFetchFiltered"
import Postcard from "../components/Postcard"
import Navbar from "../components/Navbar"

const Viewprofile = () => {
    const { username } = useParams()
    const {user, isLoading, errorLoading} = useFetchUser('http://localhost:8000/users', username)
    const { dataFiltered, isLoadingFiltered, errorLoadingFiltered } = useFetchFiltered('http://localhost:8000/posts', username)

    return (
        <>

        <div className="navbar">
            <Navbar/>
        </div>

        {errorLoading && <div>{errorLoading}</div>}
        {isLoading && <div>loading...</div>}

        {user &&
                <div className="user-info" class="w-3/4 m-auto mt-8 p-6">
                    <div className="user-info-content" class="w-full flex border border-green-500">
                        <div className="profile-pic" class="w-[150px] h-[150px] overflow-hidden border border-green-500 my-auto">
                            <img src={user.img} class="w-[150px] h-[150px] block object-cover"/>
                        </div>
                        <div className="user-details" class="w-full mx-4">
                            <div className="display-name" class="p-2">
                                <p class="text-4xl font-bold">{user.displayName}</p>
                            </div>
                            <div className="username" class="p-2">
                                <p class="text-d-lasalle font-semibold">@{user.user}</p>
                                
                            </div>
                            <div className="user-bio" class="p-2">
                                <p>{user.bio}</p>
                            </div>
                        </div>
                    </div>
                    {/* <hr class="w-full h-1 mt-6 bg-stone-700"/> */}
                </div>
        }

        <div className="user-nav" class="m-auto bg-slate-300">
            <div className="links" class="w-3/4 m-auto p-4 flex flex-row gap-4 justify-start">
                <a href="#">Posts</a>
                <a href="#">Bookmarks</a>
                <Link to="/createpost">Create Post</Link>
            </div>
            <Link to={"/viewprofile/" + username + "/edit" }className="w-3/4 m-auto p-4 flex flex-row gap-4 justify-start text-red-600">View Profile as a User</Link>
        </div>

        {dataFiltered && dataFiltered.map((data)=>{
            return (
                <div className="user-posts" class="w-3/4 m-auto mt-8 mb-8">
                    <div className="filtered">
                        <Postcard post={data} key={data.postid}></Postcard>
                    </div>
                </div>
                
            )
        })}
        </>
    )
}

export default Viewprofile;