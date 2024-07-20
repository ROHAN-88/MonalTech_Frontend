import bazarlogo from "../assets/Logo/bazaar_logo.png";
import eralogo from "../assets/Logo/era_logo.png";
import humanwelfarelogo from "../assets/Logo/human4welfare_logo.png";
import jobaxellogo from "../assets/Logo/job_axle_logo.png";
import merogrocerieslogo from "../assets/Logo/mero_groceries_logo.png";
import muanlogo from "../assets/Logo/muan_logo.png";
import nepalsewa from "../assets/Logo/nepal_sewa_logo_nobg.png";
import nta from "../assets/Logo/nta_logo_nobg.png";
import sindhu from "../assets/Logo/sindhu_logo_nobg.png";
import yetilogo from "../assets/Logo/yeti_logo_nobg.png";

interface SponsorProps {
  icon: JSX.Element;
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src={bazarlogo} alt="Sponsor 1" style={{ width: 200 }} />,
  },
  {
    icon: <img src={eralogo} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: <img src={humanwelfarelogo} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: <img src={jobaxellogo} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: (
      <img src={merogrocerieslogo} alt="Sponsor 2" style={{ width: 200 }} />
    ),
  },
  {
    icon: <img src={muanlogo} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: <img src={nepalsewa} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: <img src={nta} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: <img src={sindhu} alt="Sponsor 2" style={{ width: 200 }} />,
  },
  {
    icon: <img src={yetilogo} alt="Sponsor 2" style={{ width: 200 }} />,
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      data-aos="zoom-in-up"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Customer Engagment
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon }: SponsorProps, index: number) => (
          <div
            key={index}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
