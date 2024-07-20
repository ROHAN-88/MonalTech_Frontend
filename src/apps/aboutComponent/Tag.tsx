import { Button } from "@/components/ui/button";

import style from "./AboutImage.module.css";

import TagSvg from "/images/aboutPage/tag.svg";

const Tag = () => {
  return (
    <>
      {/* //! Image  */}
      <div
        className="lg:m-auto  about-img grid place-content-center"
        data-aos="fade-right"
      >
        <img src={TagSvg} alt="" className={style["about-img"]} />
      </div>
      {/*//! description  */}
      {/* style={{ fontSize: "2rem" }} */}
      <div className=" m-auto text-center" data-aos="fade-left">
        <p className="text-xl lg:text-4xl">
          &quot;Protecting you from the dark side of cyberspace, and keeping you
          connected...&quot;
        </p>
        <Button className="mt-5 ml-2">Learn More</Button>
      </div>
    </>
  );
};

export default Tag;
