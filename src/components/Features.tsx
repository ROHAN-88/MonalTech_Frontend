import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import image from "../assets/growth.png";
import image4 from "../assets/looking-ahead.png";
import image3 from "../assets/reflecting.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Our Experience",
    description:
      "The experts from industries have come together to work in this field to lead the security market in the national and international arena. It provides cyber solutions, training and overall infrastructure security.",
    image: image4,
  },
  {
    title: "Our Approach",
    description:
      "A co-managed approach where we collaborate by monitoring your most critical devices that require 24x7 attention, and your in-house IT Team monitors remaining assets for improve operational efficiency and budget.",
    image: image3,
  },
  {
    title: "Why Us",
    description:
      "Monal Tech has been established with the vision to improve IT security, Network Security, Infrastructure Security and Cyber hygiene of the Organization.",
    image: image,
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      data-aos="zoom-out"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {description.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
