import { useParams } from "react-router-dom";
import useFetchPost from "../hooks/useFetchPost";
import Comment from "../components/Comment";

const Viewpost = () => {
    const { postid } = useParams()
    const { postcomments } = useParams()
    const { data, isLoading, errorLoading } = useFetchPost('http://localhost:8000/posts', postid)
    const { commentData, commentLoading, commentError} = useFetchPost('http://localhost:8000/posts', postcomments)
    
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

            {commentError && <div>{commentError}</div>}
            {commentLoading && <div>loading...</div>}
            {commentData && commentData.map((data)=>{
            return (
                <div className="user-posts" class="w-3/4 m-auto mt-8 mb-8">
                    <div className="filtered">
                        <Comment post={data} key={data.commentid}></Comment>
                    </div>
                </div>
                
            )
        })}

        </>
    )
}

export default Viewpost;
