import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Link } from "lucide-react";
import { Mail } from "lucide-react";

import style from "./ContactusSide.module.css";

import SvgContact from "/images/contactPage/Endpoint-bro.svg";

const ContactusSide = () => {
  return (
    <section id={style.conParent} className="container pt-5">
      {/* //? Svg Contact  */}
      <div>
        <div className=" grid place-content-center">
          <img src={SvgContact} style={{ width: "290px", height: "290px" }} />
        </div>
      </div>

      {/* //? info  */}
      <div className={style.infoParent}>
        <ul>
          <li>
            <MapPin /> Chabahil Kathmandu 44600 Nepal
          </li>

          <li>
            <Phone /> +977-1-4572116
          </li>

          <li>
            <Link />
            <a href="https://monaltech.com" target="_blank" rel="noreferrer">
              https://monaltech.com
            </a>
          </li>

          <li>
            {" "}
            <Mail /> info@monaltech.com
          </li>
        </ul>
      </div>

      {/* //? map   */}
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9686089509128!2d85.35064097546774!3d27.71825547617629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192009b8e7a5%3A0x19c7bcf55fa6963f!2sMonal%20Tech!5e0!3m2!1sen!2snp!4v1711533542905!5m2!1sen!2snp"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactusSide;
