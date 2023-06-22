import { useParams } from "react-router-dom";
import useFetchPost from "../hooks/useFetchPost";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';

const Viewpost = () => {
    const { postid } = useParams()
    const { data, isLoading, errorLoading } = useFetchPost('http://localhost:8000/posts', postid)
    return (
        <>
            <div className="nav">
                <Navbar />
            </div>

            <div className="flex">
                <div className="w-80 m-14">
                    <Sidebar />
                </div>

                
                {errorLoading && <div>{errorLoading}</div>}
                {isLoading && <div>loading...</div>}
                <div className="w-2/3">
                {data &&
                    <div className="w-full bg-lasalle-white flex my-14 rounded-2xl">
                        <div className="flex flex-col bg-inherit w-auto rounded-2xl">
                            <div className="flex place-content-center items-center w-full h-1/2 bg-green-upvote rounded-tl-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="bg-inherit px-1" width="40px" height="30px" viewBox="0 0 512 512" version="1.1">
                                    <title>triangle-filled</title>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="drop" fill="#000000" transform="translate(32.000000, 42.666667)">
                                            <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="rotate-180 flex place-content-center items-center w-full h-1/2 bg-red-downvote rounded-tr-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="bg-inherit px-1" width="40px" height="30px" viewBox="0 0 512 512" version="1.1">
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
                        <div>
                            <div className="flex pl-6 pt-5 w-full"> {/*poster div */}
                                <div className="rounded-full w-9 h-9 overflow-hidden ">
                                    <img src="https://www.shutterstock.com/image-illustration/cybernetic-visions-reloaded-3d-illustration-600w-1555158278.jpg"
                                        className="object-cover"></img>
                                </div>
                                
                                <div className="ml-4 ">
                                <Link to={'/viewprofile/' + data.user}>
                                    <div>
                                        <p>Posted by <span className="text-d-lasalle font-bold ">@{data.user}</span></p>
                                    </div>
                                </Link>
                                    <div className="text-stone-400 ">
                                        <p>1 day ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 pt-6 pb-2 font-bold text-2xl">
                                <p>{data.title}</p>
                            </div>
                            <div className="ml-6 mr-8 mb-4 font-medium text-1g text-justify">
                                {data.context && 
                                    <div>
                                        {data.context}
                                    </div>
                                }
                            </div>
                            {/*<div>
                                {data.comments}
                            </div>*/}
                        </div>
                    </div>
                }
            </div>
            </div>
        </>
    )
}

export default Viewpost;