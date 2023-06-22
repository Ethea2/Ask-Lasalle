const Navbar = () => {
    return (
        <nav className="navbar" class="flex bg-dark-navy justify-between items-center sticky top-0 h-auto p-2.5 overflow-hidden">
            <div className="logo" class="bg-emerald-900 rounded p-2.5">
                <p class="text-white">Ask Lasalle ?</p>
            </div>
            <div className="search" class="w-2/5">
                <input type="text" placeholder="Search..." class="p-2.5 w-full rounded-xl border-none bg-slate-100"/>
            </div>
            <div className="links" 
                 class="
                 flex
                 items-center
                 gap-x-5">
                <div className="notifications" class="bg-sky p-2.5 rounded-xl">
                    <p>Notifs</p>
                </div>
                <div className="user" class="bg-sky p-2.5 rounded-xl">
                    <p>@patty_arao</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;