const Navbar = () => {
    return (
        <nav className="navbar" 
             class="
                flex 
                bg-slate-300 
                justify-between 
                items-center 
                sticky 
                top-0 
                h-auto 
                p-2.5 ">
            <div className="logo" class="bg-slate-50 rounded p-2.5">
                <p>Ask Lasalle ?</p>
            </div>
            <div className="search" class="w-2/5">
                <input type="text" placeholder="Search..." class="p-2.5 w-full rounded border-none"/>
            </div>
            <div className="links" 
                 class="
                 flex
                 items-center
                 gap-x-5">
                <div className="notifications" class="bg-slate-50 p-2.5 rounded">
                    <p>Notifs</p>
                </div>
                <div className="user" class="bg-slate-50 p-2.5 rounded">
                    <p>@patty_arao</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;