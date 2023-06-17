import { useParams } from "react-router-dom"
import useFetchUser from "../hooks/useFetchUser"

const Viewprofile = () => {
    const { username } = useParams()
    const {user, isLoading, errorLoading} = useFetchUser('http://localhost:8000/users', username)
    return (
        <>
        {errorLoading && <div>{errorLoading}</div>}
        {isLoading && <div>loading...</div>}
        {user &&
                <div className="text-9xl">
                    <div>
                        {user.user}
                    </div>
                    <div>
                        {user.posts}
                    </div>
                </div>
            }
        </>
    )
}

export default Viewprofile;