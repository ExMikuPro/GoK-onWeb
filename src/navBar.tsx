import { createSignal, onCleanup } from 'solid-js';

const NavBar = () => {
  const [currentPage, setCurrentPage] = createSignal('home');

  const changePage = (page:string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage()) {
      case 'home':
        return <div>这是首页内容</div>;
      case 'about':
        return <div>这是关于页面内容</div>;
      case 'contact':
        return <div>这是联系页面内容</div>;
      default:
        return null;
    }
  };

  onCleanup(() => {
  });

  return (
    <div>
        <div class="col-mb-12">
                <h2 class="title">标题</h2>
        	    <p class="description">123</p>
            </div>
            <div class="col-mb-12"></div>
      <nav>
      <a class='current' onClick={() => changePage("home")}>首页</a>
      <a class='current' onClick={() => changePage("home")}>首页</a>
      <a class='current' onClick={() => changePage("about")}>首页</a>
      <a class='current' onClick={() => changePage("contact")}>首页</a>
      </nav>
      {renderPage()}
    </div>
  );
};

export default NavBar;
