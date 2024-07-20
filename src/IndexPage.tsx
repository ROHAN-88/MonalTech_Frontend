import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Testimonials } from "./components/Testimonials";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />

      <Sponsors />
      <Features />
      <Cta />
      <Testimonials />
      <Newsletter />

      <ScrollToTop />
    </div>
  );
};

export default IndexPage;
