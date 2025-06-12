// Library
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// Data
import { usersData, rateData } from "../../../constants/users.jsx";
// CSS - UI component - React Icons - Images
import { vectorImages } from "../../../assets/images/index.jsx";
import style from "./Hero.module.css";
import { BiSolidRightArrow, BiStreetView } from "react-icons/bi";

const cx = classNames.bind(style);

function Hero() {
  const { t } = useTranslation();
  return (
    <section
      className={cx(
        "hero-section",
        "isolate",
        "mx-10",
        "sm:mx-20",
        "lg:mx-30",
        "xl:mx-40",
        "grid",
        "grid-cols-1",
        "lg:grid-cols-2"
      )}
    >
      {/* Hero left content */}
      <div className={cx("hero-left", "my-20")}>
        <div className={cx("title", "text-4xl", "md:text-6xl", "lg:text-7xl", "font-bold")}>
          <p className={cx("design", "block", "mb-2")}>{t("homepage.design")}</p>
          <p className={cx("your-portfolio")}>{t("homepage.your portfolio")}</p>
        </div>
        <div className={cx("description", "my-7", "text-lg")}>
          <p>{t("homepage.hero description")}</p>
        </div>

        <div className={cx("effortlessly", "flex", "items-center", "gap-2")}>
          <div className={cx("border", "w-14")}></div>
          <p className={cx("uppercase", "text-xs", "font-medium")}>{t("homepage.create effortlessly")}</p>
          <div className={cx("border", "w-14")}></div>
        </div>

        <div className={cx("buttons")}>
          <button className={cx("btn1", "btn", "mt-7", "w-auto", "p-4", "cursor-pointer", "rounded-sm")}>
            <p className={cx("flex", "items-center", "gap-2")}>
              <BiSolidRightArrow />
              {t("homepage.get started")}
            </p>
          </button>
          <button className={cx("btn2", "btn", "mt-7", "w-auto", "p-4", "cursor-pointer", "rounded-sm")}>
            <p className={cx("flex", "items-center", "gap-2")}>
              <BiStreetView />
              {t("homepage.join community")}
            </p>
          </button>
        </div>

        <div className={cx("border", "w-100%", "my-5", "border-t", "border-gray-800")}></div>

        <div className={cx("sm:flex", "items-center", "my-5", "gap-4")}>
          <div className={cx("users", "flex", "-space-x-6", "items-center", "justify-start", "overflow-hidden")}>
            {usersData.map((user) => (
              <div key={user.id} className={cx("user", "flex", "items-center", "gap-2", "p-2")}>
                <img src={user.avatar} alt={user.name} className={cx("avatar", "w-9", "h-9", "rounded-full")} />
              </div>
            ))}
            <div className={cx("gap-2", "p-2")}>
              <span
                className={cx(
                  "flex",
                  "items-center",
                  "justify-center",
                  "rounded-full",
                  "w-9",
                  "h-9",
                  "text-xs",
                  "font-medium"
                )}
              >
                1k
              </span>
            </div>
          </div>

          <div className={cx("flex", "flex-col", "justify-space-between", "items-start")}>
            <div className={cx("flex", "items-center", "gap-2")}>
              {rateData.map((rate) => (
                <span key={rate.id} className={cx("text-yellow-500", "text-xm")}>
                  {rate.star}
                </span>
              ))}
              <span className={cx("text-xs")}>4.8/5</span>
            </div>
            <div className={cx("social-proof", "text-xm", "text-gray-500", "mt-1")}>
              {t("homepage.trusted by")} <strong>1,000+</strong> {t("homepage.creators and professionals")}.
            </div>
          </div>
        </div>
      </div>
      {/* Hero right content */}
      <div className={cx("hero-right")}>
        <img src={vectorImages.vectorHero} alt="Hero Vector" className={cx("hero-vector", "hidden", "sm:block")} />
      </div>
    </section>
  );
}

export default Hero;
