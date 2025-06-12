import { useState, useRef, useEffect } from "react";
// Libraries
import classNames from "classnames/bind";
// CSS
import styles from "./Header.module.css";
// Components
import { Hamburgur, Navbar } from "./navbar";
import { UserMenu } from "./user_menu";
// React icons
import { TbMessage, TbBell, TbSearch, TbMenu2, TbX } from "react-icons/tb";

const cx = classNames.bind(styles);

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={cx("header")}>
      <div className={cx("header-container", "flex", "justify-between", "items-center")}>
        <div className={cx("flex", "gap-3", "items-center")} ref={dropdownRef}>
          <Hamburgur isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={cx("logo", "flex", "items-center")}>
            <span>Portlify</span>
          </div>
          <Navbar isOpen={isOpen} />
        </div>
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
