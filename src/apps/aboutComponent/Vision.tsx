import { Button } from "@/components/ui/button";

import style from "./AboutImage.module.css";

import visionSvg from "/images/aboutPage/vision.svg";

const Vision = () => {
  return (
    <>
      {/* //!image  */}
      <div
        className="lg:m-auto  about-img grid place-content-center"
        data-aos="fade-right"
      >
        <img src={visionSvg} alt="" className={style["about-img"]} />
      </div>

      {/* //! description  */}
      <div className="about-item m-auto text-center" data-aos="fade-left">
        <h1 className="text-3xl lg:text-5xl mb-5">Our Vision</h1>
        <p className="text-base lg:text-xl">
          MonalTech has been established with the aim of leading the
          cybersecurity sector of Nepal to the international standard.
        </p>
        <Button className="mt-5 ml-2">Join Us</Button>
      </div>
    </>
  );
};

export default Vision;
