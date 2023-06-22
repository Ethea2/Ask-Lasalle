import { Link } from 'react-router-dom'

const Comment = ({ post }) => {
    return (
        <>
            <div className="postcard" class="h-44 bg-lasalle-white flex rounded-2xl mx-4 mb-4">
                <div className="votes" class="w-1/6 flex flex-col rounded-2xl">
                    <div className="upvote-div" class="flex place-content-center items-center w-full h-1/2 bg-green-upvote rounded-tl-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bg-inherit" width="30px" height="30px" viewBox="0 0 512 512" version="1.1">
                            <title>triangle-filled</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="drop" fill="#000000" transform="translate(32.000000, 42.666667)">
                                    <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="downvote-div" class="rotate-180 flex place-content-center items-center w-full h-1/2 bg-red-downvote rounded-tr-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bg-inherit" width="30px" height="30px" viewBox="0 0 512 512" version="1.1">
                            <title>triangle-filled</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="drop" fill="#000000" transform="translate(32.000000, 42.666667)">
                                    <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="post-container" class="w-full p-4 flex flex-col justify-between">
                    
                    <div className="user-info "class="w-full p-2 h-1/4 flex gap-2">
                        <div className="rounded-full w-7 h-7 overflow-hidden">
                            <img src={post.img}
                                class="block object-cover"></img>
                        </div>
                        <div className="user-details" class="">
                            <Link to={'/viewprofile/' + post.user}>
                                    <p>Posted by <span className="text-d-lasalle font-bold">@{post.user}</span></p>
                            </Link>
                        </div>
                        
                    </div>

                    <hr class="bg-neutral-500 m-2 mt-4 h-0.5"></hr>

                    <div className="post-content" class="h-3/5 p-2 flex flex-col justify-between overflow-hidden">
                        <div className="post-preview" class="h-2/4">
                            <Link to={'/viewpost/' + post.postid} class="text-2xl font-bold">
                                <p>{post.title}</p>
                            </Link>
                        </div>
                        <div className="interaction-options" class="h-1/4 flex gap-4">
                            
                            <div className="comments" class="w-max flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path d="M13,11H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-4H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm2-5H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" /></svg>
                                {post.comments} replies
                            </div>

                            <div className="bookmark" class="w-max flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.9999 21C17.8278 20.9996 17.6587 20.9549 17.5089 20.87L11.8359 17.663L6.5129 20.863C6.36079 20.9539 6.18725 21.0028 6.01005 21.0046C5.83285 21.0064 5.65836 20.961 5.50443 20.8732C5.3505 20.7854 5.22267 20.6583 5.13402 20.5049C5.04537 20.3514 4.99908 20.1772 4.9999 20V5.334C4.9832 4.73305 5.20536 4.14997 5.61772 3.7125C6.03008 3.27503 6.59901 3.01882 7.1999 3H16.7999C17.4007 3.01908 17.9695 3.27537 18.3818 3.71278C18.7941 4.1502 19.0163 4.73312 18.9999 5.334V20C18.9999 20.2652 18.8945 20.5196 18.707 20.7071C18.5195 20.8946 18.2651 21 17.9999 21ZM11.8209 15.506C11.9933 15.5059 12.1628 15.5503 12.3129 15.635L16.9999 18.286V5.334C16.9999 5.134 16.8799 5 16.7999 5H7.1999C7.1199 5 6.9999 5.133 6.9999 5.334V18.234L11.3059 15.648C11.4615 15.5548 11.6395 15.5058 11.8209 15.506Z" fill="black" />
                                </svg>
                                Bookmark
                            </div>
                            <div className="share" class="w-max flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z" fill="#000" /></svg>
                                Share
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment;