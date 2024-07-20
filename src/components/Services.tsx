import Endpointamico from "../assets/Endpoint-amico.png";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChartIcon, MagnifierIcon, WalletIcon } from "./Icons";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Cyber Security Products ",
    description:
      "Get your solutions for the industry-leading security products essential to provide infrastructure security. We provide solutions for SIEM, UEBA, SOAR, Threat Intelligence, Vulnerability Assessment, and many more.",
    icon: <ChartIcon />,
  },
  {
    title: "Security Operation Center ",
    description:
      "Improve your cybersecurity posture with a team of cybersecurity professional we provide monitoring your system 24/7.",
    icon: <WalletIcon />,
  },
  {
    title: "Security Audit ",
    description:
      "Access your overall security and IT posture of your organization with the certified professional in the field. Get your organization compliance with IT guidelines. ",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div
        data-aos="fade-right"
        className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            At your service 24/7
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="flex py-6 justify-center">
            <button
              className="cursor-pointer transition-all 
  bg-primary text-white px-6 py-2 rounded-lg
  border-primary
  border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6
  active:border-b-2 active:brightness-90 active:translate-y-2 hover:shadow-xl shadow-primary active:shadow-none"
            >
              More Services
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src={Endpointamico}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="About services"
          />
        </div>
      </div>
    </section>
  );
};
