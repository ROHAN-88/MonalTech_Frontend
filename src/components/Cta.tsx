export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-2/1">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Monal Tech{" "}
            </span>
            - Huawei Startup ICT Awards 2022 Winner
          </h2>
          <p className="text-muted-foreground text-justify text-xl mt-40 md:mt-8">
            Monal Tech succeeded in winning the award for Huawei Startup ICT
            Award 2022. The South Asia Startup ICT Award was presented at the
            seventh annual Infodevelopers ICT Award ceremony, which took place
            on 23rd December 2022 in Kathmandu.
          </p>
        </div>

        <div className="w-full md:w-1/1">
          <div
            className="aspect-w-15 aspect-h-90"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <iframe
              className="w-full h-96"
              src={`https://www.youtube.com/embed/99nAOnIMAv0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
