import { Button } from "@/components/ui/button";

import style from "./AboutImage.module.css";

import missionSvg from "/images/aboutPage/mission2.svg";

const mission = () => {
  return (
    <>
      {/* for small screen  */}
      <div className="about-item lg:hidden grid place-content-center">
        <img src={missionSvg} alt="" className={style["about-img"]} />
      </div>

      <div className="about-item m-auto text-center " data-aos="fade-right">
        <h1 className="text-3xl lg:text-5xl mb-5">Our Mission</h1>
        <p className="text-base lg:text-xl">
          MonalTech strives to fortify the cybersecurity space of Nepal, to
          ensure good practice of cyber hygiene in the country by providing
          services such as security solutions, trainings and awareness programs.
        </p>
        <Button className="mt-5 ml-2">Let&apos;s Collaborate</Button>
      </div>

      {/* for Large screen  */}
      <div
        className="about-item  m-auto hidden lg:block  "
        data-aos="fade-left"
      >
        <img src={missionSvg} alt="" className={style["about-img"]} />
      </div>
    </>
  );
};

export default mission;
