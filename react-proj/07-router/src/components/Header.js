import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">
          {/* a 태그는 페이지를 새로고침해서 페이지를 이동 시킴 */}
          {/* Link 컴포넌트는 페이지를 새로고침하지 않고, 컴포넌트만 변경함 */}
          <Link to="/">
            <img src="../img/niniz.png" />
          </Link>
        </div>
        <nav>
          <div>
            {" "}
            <Link to="/">Home</Link>
          </div>
          <div>
            {" "}
            <Link to="/products">Product</Link>
          </div>
          <div>
            {" "}
            <Link to="/Prac1">Prac1</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
