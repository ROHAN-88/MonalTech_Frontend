import Newbutton from "./ui/newbutton";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 overflow-hidden md:py-32 gap-10">
      <div className="text-center overflow-hidden lg:text-start space-y-6">
        <main className="text-5xl overflow-hidden md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#302d16]  to-[#837003] text-transparent bg-clip-text">
              On
            </span>{" "}
            the frontline of
          </h1>{" "}
          your{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#cccb92] via-[#FBBF24] to-[#D97706] text-transparent bg-clip-text">
              business
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 animation overflow-hidden shine">
          Take your enterprise to the next level.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Newbutton />
        </div>
      </div>

      <div className="z-10 overflow-hidden lg:overflow-visible">
        {" "}
        {/* Apply overflow for large screens */}
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
