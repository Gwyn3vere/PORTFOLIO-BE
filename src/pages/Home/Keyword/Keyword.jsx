// Libraries
import classNames from "classnames/bind";
//CSS - UI component - React Icons - Images
import style from "./Keyword.module.css";
import { avatarImages, vectorImages } from "../../../assets/images";

const cx = classNames.bind(style);

function Keyword() {
  return (
    <section className={cx("keyword-section", "mx-[10%] isolate my-20 py-[20%]")}>
      <div className={cx("typography-word", "text-center w-auto relative")}>
        <span className={cx("word", "key-0", "uppercase text-[8vw]")}>Showcase Yourself</span>
        <span className={cx("word", "key-1", "absolute uppercase top-[0%] left-[15%] text-[1.5vw]")}>Design</span>
        <span className={cx("word", "key-2", "absolute uppercase top-[-19%] left-[20.3%] text-[1vw] rotate-[-90deg]")}>
          Skills
        </span>
        <span className={cx("word", "key-3", "absolute uppercase top-[-46%] left-[18%] text-[3vw] rotate-[-90deg]")}>
          creative
        </span>
        <span className={cx("word", "key-4", "absolute uppercase top-[-4%] left-[26.8%] text-[2.3vw]")}>
          Inspiration
        </span>
        <span className={cx("word", "key-5", "absolute lowercase top-[-46%] left-[26.8%] text-[5vw]")}>Self</span>
        <span className={cx("word", "key-6", "absolute uppercase top-[-33%] left-[29%] text-[0.9vw] font-bold")}>
          Future
        </span>
        <span
          className={cx("word", "key-6", "absolute uppercase top-[-77%] left-[21.6%] text-[1.8vw] rotate-[-90deg]")}
        >
          Uniqueness
        </span>
        <span className={cx("word", "key-7", "absolute uppercase top-[-52%] left-[29%] text-[1.8vw]")}>Voice</span>
        <span className={cx("word", "key-1", "absolute uppercase  top-[-65%] left-[29.3%] text-[1.5vw]")}>Growth</span>
        <span className={cx("word", "key-8", "absolute top-[-33%] left-[34%] text-[1.6vw] rotate-[-90deg]")}>
          Passion
        </span>
        <span
          className={cx(
            "word",
            "key-9",
            "stroke",
            "absolute uppercase top-[-80%] left-[30.8%] text-[3vw] font-[800] rotate-[-90deg]"
          )}
        >
          Designer
        </span>
        <span className={cx("word", "key-10", "absolute top-[-80%] left-[50%] text-[10vw] translate-x-[-50%]")}>
          idea
        </span>
        <span className={cx("word", "key-6", "absolute top-[-4%] left-[44%] text-[2vw]")}>Creativity</span>
        <span
          className={cx("word", "key-2", "absolute uppercase top-[-31%] left-[39.8%] text-[1.6vw] rotate-[-90deg]")}
        >
          Style
        </span>
        <span className={cx("word", "key-15", "absolute uppercase top-[-59%] left-[41.8%] text-[1.6vw]")}>People</span>
        <span className={cx("word", "key-7", "absolute uppercase top-[0%] right-[31%] text-[1.6vw]")}>Connection</span>
        <span className={cx("word", "key-10", "absolute lowercase top-[-17%] right-[18.5%] text-[4vw]")}>
          Discovery
        </span>
        <span className={cx("word", "key-4", "absolute lowercase top-[-76%] left-[31%] text-[1.5vw]")}>Skills</span>
        <span className={cx("word", "key-6", "absolute uppercase top-[-89%] left-[35%] text-[1.8vw] rotate-[-90deg]")}>
          Idea
        </span>
        <span className={cx("word", "key-5", "absolute uppercase top-[-80%] right-[39%] text-[2vw] rotate-[-90deg]")}>
          Personal
        </span>
        <span
          className={cx(
            "word",
            "key-8",
            "absolute uppercase top-[-92%] left-[38.7%] text-[1.2vw] font-black rotate-[-90deg]"
          )}
        >
          Discovery
        </span>
        <span
          className={cx(
            "word",
            "key-4",
            "stroke",
            "absolute uppercase top-[-80%] right-[43.8%] text-[1.2vw]  rotate-[-90deg]"
          )}
        >
          Pioneer
        </span>
        <span className={cx("word", "key-5", "absolute uppercase top-[-68%] right-[47.8%] text-[1vw]")}>Voice</span>
        <span className={cx("word", "key-5", "absolute top-[-85%] left-[43.7%] text-[3vw]")}>Art</span>
        <span className={cx("word", "key-0", "absolute uppercase top-[-96%] right-[30.5%] text-[5vw] rotate-[-90deg]")}>
          Identity
        </span>
        <span className={cx("word", "key-1", "absolute uppercase top-[-52%] right-[30%] text-[2vw] rotate-[-90deg]")}>
          Growth
        </span>
        <span
          className={cx("word", "key-9", "stroke", "absolute uppercase top-[-10%] right-[30%] text-[1vw] font-bold")}
        >
          People
        </span>
        <span className={cx("word", "key-4", "absolute uppercase top-[-27.7%] right-[24.5%] text-[2vw]")}>Passion</span>
        <span className={cx("word", "key-5", "absolute uppercase top-[-13%] right-[21%] text-[1.6vw]")}>Style</span>
        <span className={cx("word", "key-7", "absolute uppercase top-[-53%] right-[24.5%] text-[3vw] font-black")}>
          Idea
        </span>
        <span
          className={cx(
            "word",
            "key-6",
            "absolute uppercase top-[-59%] right-[12.2%] text-[2vw] font-black rotate-[-90deg]"
          )}
        >
          Inspiration
        </span>
        <span className={cx("word", "key-5", "absolute uppercase top-[-57%] right-[18%] text-[2.7vw] rotate-[-90deg]")}>
          Voice
        </span>
        <span className={cx("word", "key-2", "absolute uppercase top-[0%] right-[14.5%] text-[1.6vw]")}>Art</span>
      </div>
    </section>
  );
}

export default Keyword;
