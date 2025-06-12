// Libraries
import classNames from "classnames/bind";
// CSS
import style from "./Glassmorphic.module.css";

const cx = classNames.bind(style);

function Glassmorphic() {
  return (
    <section className={cx("glassmorphic", "isolate")}>
      <div className={cx("shape1", "absolute", "rounded-full", "blur-3xl")}></div>
      <div className={cx("shape2", "absolute", "rounded-full", "blur-3xl")}></div>
      <div className={cx("shape3", "absolute", "rounded-full", "blur-3xl")}></div>
      <div className={cx("shape4", "absolute", "rounded-full", "blur-3xl")}></div>
    </section>
  );
}

export default Glassmorphic;
