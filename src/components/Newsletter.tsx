import micrologo from "../assets/micro_logo.png";
export const Newsletter = () => {
  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Monal Tech: Partner of Microsoft for Startups{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Founders Hub
          </span>
        </h3>
        <br />
        <div className="text-center" data-aos="zoom-in-up">
          <img src={micrologo} alt="Micro Logo" className="w-240 mx-auto" />
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
