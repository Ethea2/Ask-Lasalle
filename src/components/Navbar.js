const Navbar = () => {
    return (
        <nav class="navbar">

            <div class="app-logo">
            </div>

            <div class="search">
                <input type="text" placeholder="Search..." id="search-bar" />
            </div>

            <div class="user-tools">
                <div class="notifications">
                </div>

                <div class="profile-tab">
                    <div class="container">
                            <p>@patricia_arao</p>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar();