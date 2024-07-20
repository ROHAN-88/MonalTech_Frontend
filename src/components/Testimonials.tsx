import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: " Pramod Shrestha ",
    userName: "IT Officer of MuAN",
    comment:
      "The Support and Services are Excellent. Very hospitable and experienced resources. The team is technically strong and quality is great.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Adarsh Pokharel",
    userName: "CEO of Job Axle",
    comment:
      "It provided excellent training on cyber security, the unique in the country with real life practical session. We are very happy to collaborate with Monal Tech on the training program.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Dhruba Kuwar",
    userName: "CEO of Bazaar International",
    comment:
      "We have been thrilled with the expertise and service Monal Tech team has provided us. It has helped us with right solutions when we needed.",
  },
];

export const Testimonials = () => {
  return (
    <section
      data-aos="fade-up"
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Our valuable
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Customer{" "}
        </span>
        Engagment
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8"></p>

      <div
        data-aos="fade-up"
        className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6"
      >
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
