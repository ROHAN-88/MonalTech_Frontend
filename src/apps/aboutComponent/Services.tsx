import { Button } from "@/components/ui/button";

import style from "./AboutImage.module.css";

import servicesSvg from "/images/aboutPage/services.svg";
import services3Svg from "/images/aboutPage/services-3.svg";
import services4Svg from "/images/aboutPage/services-4.svg";
import services2Svg from "/images/aboutPage/services2.svg";

const services = () => {
  return (
    <>
      {/* //!Images for small  screen  */}
      <div className="grid place-content-center lg:hidden">
        <img src={servicesSvg} alt="" className={style["about-img"]} />
      </div>

      {/* //! description */}
      <div className="about-item m-auto text-center " data-aos="fade-right">
        <h1 className="text-3xl lg:text-5xl mb-5">Our Services</h1>
        <p className="text-base lg:text-xl">
          MonalTech Pvt. Ltd. is a Cyber Security Company led by experts with
          decades of experience working in this field to lead the security
          market in the national and international arena. We are dedicated to
          foster the cyber-security field of Nepal by providing solutions,
          training, and overall infrastructure with best-practice tools for
          conducting various cyber incident forensics, providing monitoring
          services and products.
        </p>
        <Button className="mt-5 ml-2">Our Services</Button>
      </div>

      {/* //! images  */}
      <div
        className="about-item  m-auto  lg:grid grid-cols-2 gap-7  hidden "
        data-aos="fade-left"
      >
        <img
          src={servicesSvg}
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={services2Svg}
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={services3Svg}
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={services4Svg}
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    </>
  );
};

export default services;
