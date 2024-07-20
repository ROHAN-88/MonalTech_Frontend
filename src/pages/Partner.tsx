import PartnerArray from "@/apps/partner/PartnerArray";
import PartnerCard from "@/apps/partner/PartnerCard";

const Partner = () => {
  return (
    <section id="partner-section" className="container mb-9">
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#FFD23F",
        }}
      >
        Our Partners
      </h1>

      {/* // Microsoft card  */}
      <div>
        {PartnerArray.map((item) => {
          if (item.name === "Microsoft") {
            return <PartnerCard {...item} key={item.id} />;
          }
        })}
      </div>
      {/* subPartners  */}
      <div className="grid grid-cols:1 lg:grid-cols-3 gap-10   ">
        {PartnerArray.map((item) => {
          if (item.name !== "Microsoft") {
            return <PartnerCard {...item} key={item.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default Partner;
