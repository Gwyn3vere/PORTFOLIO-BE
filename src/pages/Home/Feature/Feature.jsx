// Libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// Data
import { featuresData } from "../../../constants/sections.jsx";
// CSS
import style from "./Feature.module.css";

const cx = classNames.bind(style);

function Feature() {
  const { t } = useTranslation();
  return (
    <section className={cx("feature-section", "mx-10", "sm:mx-20", "lg:mx-30", "xl:mx-40", "my-40", "isolate")}>
      <div className={cx("top", "flex", "justify-center", "items-center", "gap-4")}>
        <div className={cx("head-title", "text-center", "w-[100%]", "sm:w-[80%]", "md:w-[90%]", "lg:w-[40%]")}>
          <div className={cx("title", "font-bold", "text-[2.2rem]", "sm:text-[2.8rem]")}>
            {t("homepage.powerful features")}
          </div>
          <div className={cx("subtitle", "uppercase", "text-xs", "font-medium")}>
            {t("homepage.build your portfolio")}
          </div>
          <p className={cx("my-4")}>{t("homepage.build you portfolio description")}</p>
          <div className={cx("w-full", "border", "border-gray-600")}></div>
        </div>
      </div>
      <div
        className={cx(
          "content",
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "lg:grid-cols-3",
          "gap-8",
          "justify-center",
          "my-10"
        )}
      >
        {featuresData.map((feature) => {
          return (
            <div className={cx("card-feature", "p-6", "flex", "flex-col", "justify-between")} key={feature.id}>
              <div>
                <p className={cx("card-title", "my-4", "uppercase")}> {t(`homepage.${feature.title}`)}</p>
                <p>{t(`homepage.${feature.description}`)}</p>
              </div>
              <a className={cx("text-blue-500", "hover:underline")}>
                <div
                  className={cx(
                    "learn-more-btn",
                    "w-auto",
                    "h-auto",
                    "p-3",
                    "my-4",
                    "cursor-pointer",
                    "text-xm",
                    "font-semibold"
                  )}
                >
                  Learn More
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Feature;
