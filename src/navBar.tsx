const NavBar = () => {
    return (
        <div class="container">
            <div class="col-mb-12">
                <h2 class="title">Hello World</h2>
                <p class="description">一些简介</p>
            </div>
            <div class="col-mb-12">
                <nav>
                <a>首页</a>
                <a>友链</a>
                <a>关于</a>
                    <div class="search">
                        <form id="search">
                            <input type="text" id="s" name="s" class="text" placeholder="/search"></input>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;