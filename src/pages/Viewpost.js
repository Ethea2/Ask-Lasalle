import { useParams } from "react-router-dom";
import useFetchPost from "../hooks/useFetchPost";
const Viewpost = () => {
    const { postid } = useParams()
    const { data, isLoading, errorLoading } = useFetchPost('http://localhost:8000/posts', postid)
    
    return (
        <>
            {errorLoading && <div>{errorLoading}</div>}
            {isLoading && <div>loading...</div>}
            {data &&
                <div className="text-9xl">
                    <div>
                        {data.title}
                    </div>
                    <div>
                        {data.postid}
                    </div>
                    <div>
                        {data.comments}
                    </div>
                    <div>
                        @{data.user}
                    </div>
                </div>
            }
        </>
    )
}

export default Viewpost;
