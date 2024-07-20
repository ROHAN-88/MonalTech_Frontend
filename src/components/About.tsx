import Security from "../assets/Security.gif";

import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="bg-muted/50 border rounded-lg py-12"
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <a href="https://storyset.com/online" />
          <img
            src={Security}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Protect{" "}
                </span>
                Your Web Application, Infrastructure, Website, Web Server,
                Database, System for Helping You Being Threats From The Hackers
              </h2>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
