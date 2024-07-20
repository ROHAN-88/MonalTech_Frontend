interface Service {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <>
      <div className="bg-secondary mt-20 rounded-lg shadow-lg p-6 m-6 overflow-hidden transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
        <p className="text-gray-secondary">{description}</p>
      </div>
    </>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Cyber Security Products",
      description:
        "Get your solutions for the industry-leading security products essential to provide infrastructure security. We provide solutions for SIEM, UEBA, SOAR, Threat Intelligence, Vulnerability Assessment, and many more.",
    },
    {
      title: "Security Operation Center",
      description:
        "Improve your cybersecurity posture with a team of cybersecurity professional we provide monitoring your system 24/7.",
    },
    {
      title: "Security Audit",
      description:
        "Assess your overall security and IT posture of your organization with the certified professional in the field. Get your organization compliance with IT guidelines.",
    },
    {
      title: "Cyber Security Training",
      description:
        "Improve the skillset of you and your team with the required cybersecurity training at your organization. We provide a team of certified and skilled globally skilled trainers.",
    },
    {
      title: "Cyber Security Consultancy",
      description:
        "Remember us for any Cyber Security Incidents, consultancy, and support at your organization.",
    },
    {
      title: "Security Devices",
      description:
        "We provide all the Information Technology devices needed at your organization which would help you enhance your infrastructure posture.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <div className="mx-auto mb-12 max-w-[510px] mt-20 text-center lg:mb-20">
          {" "}
          <span className="mb-2 block text-lg font-semibold text-primary">
            Our Services
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            What We Offer
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Get the complete cyber-security package for your organization in one
            place.
          </p>
        </div>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
