import { useState } from "react";
// Libraries
import classNames from "classnames/bind";
// CSS
import styles from "./Header.module.css";
// Components
import { Hamburgur, Navbar } from "./navbar";
// React icons
import { TbMessage, TbBell, TbSearch, TbMenu2, TbX } from "react-icons/tb";
// Images
import { avatarImages } from "../../../assets/images/index";

const cx = classNames.bind(styles);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={cx("header")}>
      <div className={cx("header-container", "flex", "justify-between", "items-center")}>
        <div className={cx("flex", "gap-3", "items-center")}>
          <Hamburgur isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={cx("logo", "flex", "items-center")}>
            <span>Portlify</span>
          </div>
          <Navbar isOpen={isOpen} />
        </div>

        <div className={cx("user-menu", "flex", "gap-5", "items-center")}>
          <div className={cx("icon-menu", "flex", "gap-5", "items-center")}>
            <div className={cx("icon")}>
              <TbSearch />
            </div>
            <div className={cx("icon")}>
              <TbMessage />
            </div>
            <div className={cx("icon")}>
              <TbBell />
            </div>
          </div>

          <div className={cx("avatar")}>
            <div className={cx("avatar-image")}>
              <img src={avatarImages.avatar1} alt="Avatar" />
            </div>
          </div>

          <div className={cx("premium-btn")}>
            <button className={cx("btn", "btn-primary")}>
              <span>Upgrade</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
