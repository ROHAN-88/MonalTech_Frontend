import { useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PartnerType } from "@/datatype/partnerType";

import style from "./Partner.module.css";
const PartnerCard = (props: PartnerType) => {
  const { name, id, imgSrc, description } = props;

  // usestate
  const [sliceNum, setSliceNum] = useState(300);
  const clickMore = () => {
    if (sliceNum === 300) {
      return setSliceNum(1000);
    } else {
      return setSliceNum(300);
    }
  };

  // card for other card except "Microsoft"
  if (name !== "Microsoft") {
    return (
      <Card
        key={id}
        data-aos="zoom-in"
        data-aos-duration="500"
        className={style.hoverCard}
      >
        <CardHeader
          style={{ height: "150px", marginBottom: "1rem" }}
          className="grid place-content-center"
        >
          <img src={imgSrc} alt="" />
        </CardHeader>
        <CardContent>
          <p>{description?.slice(0, sliceNum) + "..."}</p>
          <button onClick={clickMore} style={{ color: "blue" }}>
            {sliceNum === 300 ? "More" : "Less"}
          </button>
        </CardContent>
      </Card>
    );
  }
  // card for "Microsoft"
  else {
    return (
      <CardHeader
        className="grid place-items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img src={imgSrc} alt="" />
        {/* //! links to be added  */}
      </CardHeader>
    );
  }
};

export default PartnerCard;
