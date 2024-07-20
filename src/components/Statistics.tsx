import { FaEye, FaLock, FaShieldAlt } from "react-icons/fa";

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
    icon: JSX.Element;
  }

  const stats: statsProps[] = [
    {
      quantity: "Pen Testing",
      description: "Pen Testing",
      icon: <FaLock />,
    },
    {
      quantity: "Cyber Threat Hunting",
      description: "Cyber Threat Hunting",
      icon: <FaEye />,
    },
    {
      quantity: "Security Center",
      description: "Security Center",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {stats.map(({ quantity, description, icon }: statsProps) => (
          <div
            key={description}
            className="flex flex-col items-center text-center"
          >
            <div className="flex justify-center items-center text-3xl sm:text-4xl font-bold">
              {icon}
            </div>
            <span className="mt-2">{quantity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
