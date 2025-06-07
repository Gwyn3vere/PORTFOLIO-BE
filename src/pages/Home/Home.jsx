// Library
import classNames from "classnames/bind";
// CSS
import style from "./Home.module.css";

const cx = classNames.bind(style);

function Home() {
  return <div className={cx("home")}>Home page</div>;
}

export default Home;
