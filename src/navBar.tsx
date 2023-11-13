import { createSignal } from "solid-js";


const NavBar = () => {
    const [isIndex, setIsIndex] = createSignal(true);
    const [isLink, setIsLink] = createSignal(false);
    const [isAbout, setIsAbout] = createSignal(false);

    const changePage = (page: string) => {
        switch (page) {
            case 'index':
                setIsIndex(true);
                setIsLink(false);
                setIsAbout(false);
                return;
            case 'link':
                setIsIndex(false);
                setIsLink(true);
                setIsAbout(false);
                return;
            case 'about':
                setIsIndex(false);
                setIsLink(false);
                setIsAbout(true);
                return;
            default:
                return null;
        }
    };

    return (
        <div class="col-mb-12">
            <nav>
                <a classList={{ current: isIndex() }} onClick={() => changePage("index")}>首页</a>
                <a classList={{ current: isLink() }} onClick={() => changePage("link")}>友链</a>
                <a classList={{ current: isAbout() }} onClick={() => changePage("about")}>关于</a>
                <div class="search">
                    <form id="search">
                        <input type="text" id="s" name="s" class="text" placeholder="/search"></input>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;