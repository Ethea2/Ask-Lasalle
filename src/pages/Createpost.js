import Navbar from "../components/Navbar";

const Createpost = () => {
    return ( 

       <>

        <Navbar/>
       
        <div className="create-post">

            <div className="heading">
                <h1>Create Post</h1>
            </div>

            <div className="post-title" class="flex flex-col gap-8 w-1/2 m-4">
                <input type="text" placeholder="Post Title..." class="p-4 bg-slate-300 rounded-2xl w-full"/>
                <input type="text" placeholder="Type something" class="p-4 bg-slate-300 rounded-2xl w-full"/>
            </div>

        </div>
       
       
       </>

     );
}
 
export default Createpost;