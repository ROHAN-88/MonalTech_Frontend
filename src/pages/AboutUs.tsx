import Mission from "@/apps/aboutComponent/Mission";
import Services from "@/apps/aboutComponent/Services";
import Tag from "@/apps/aboutComponent/Tag";
import Vision from "@/apps/aboutComponent/Vision";

export const AboutUs = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "2rem",
          color: "#FFD23F",
        }}
      >
        About Us
      </h1>
      <div className="container pt-4 ">
        <div className=" flex flex-col gap-y-14 lg:grid grid-cols-2 grid-rows-4  lg:gap-y-36 ">
          <Tag />

          <Services />

          <Vision />

          <Mission />
        </div>
      </div>
    </>
  );
};
