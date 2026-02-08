import Hero from "./_components/hero";
import Welcome from "./_components/welcome";
import Academics from "./_components/academics";
import WhyChooseUs from "./_components/why-choose-us";
import Facilities from "./_components/facilities";
import Testimonials from "./_components/testimonials";

const page = () => {
  return (
    <main className=" bg-white">
      <Hero />
      <Welcome />
      <Academics />
      <WhyChooseUs />
      <Facilities />
      <Testimonials />
    </main>
  );
};

export default page;
