// import "../App.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="logo">
        <img
          className="logo_image"
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
        />
      </div>
      <div className="menu">
        {/* 버튼 */}
        <div>
          <h2>홈</h2>
        </div>
        <div>
          <h2>영화</h2>
        </div>
        <div>
          <h2>시리즈</h2>
        </div>
      </div>
      <div className="search">
        <input type="text" />
        <div className="serach_text">
          <h6>검색</h6>
        </div>
      </div>
    </header>
  );
};

export default Header;
