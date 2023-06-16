

const Postcard = ({ post }) => {
    return (
        <>
            <div className="w-1/3 h-44 bg-emerald-600 flex rounded-lg">
                <div className="flex flex-col h-full bg-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512" version="1.1">
                            <title>triangle-filled</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="drop" fill="#000000" transform="translate(32.000000, 42.666667)">
                                    <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">

                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            { post.postid }
                        </li>
                        <li>
                            { post.title }
                        </li>
                        <li>
                            { post.comments }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Postcard;