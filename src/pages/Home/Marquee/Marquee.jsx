// Libraries
import classNames from "classnames/bind";
// CSS - React Icons
import style from "./Marquee.module.css";
import { PiStarFourFill } from "react-icons/pi";

const cx = classNames.bind(style);

function Marquee() {
  const items = Array(20).fill("portlify");

  return (
    <div className={cx("marquee-container")}>
      <div className={cx("marquee")}>
        <div className={cx("marquee-inner")}>
          <div className={cx("marquee-track")}>
            {items.map((item, index) => (
              <span key={`a-${index}`} className={cx("marquee-item", index % 2 === 0 ? "item-dark" : "item-light")}>
                {item}
              </span>
            ))}
            {items.map((item, index) => (
              <span key={`b-${index}`} className={cx("marquee-item", index % 2 === 0 ? "item-dark" : "item-light")}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
