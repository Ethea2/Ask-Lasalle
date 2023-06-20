import { useParams } from "react-router-dom";
import useFetchPost from "../hooks/useFetchPost";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";

const Viewpost = () => {
    const { postid } = useParams()
    const { data, isLoading, errorLoading } = useFetchPost('http://localhost:8000/posts', postid)
    const [comments, setComments] = useState()
    useEffect(() => {
        if (isLoading === false) {

            setComments(data.postcomments)
        }
    }, [isLoading])
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
            <div className="flex gap-4 flex-col">

                {
                    comments && comments.map((comment) => {
                        return (
                            <div>
                                <ol>
                                    <li>{comment.user}</li>
                                    <li>{comment.comment}</li>
                                    <li>{comment.commentid}</li>
                                </ol>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Viewpost;
