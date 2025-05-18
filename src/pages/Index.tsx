
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import PreRegister from "@/components/PreRegister";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Features />
      <Testimonials />
      <PreRegister />
      <FAQ />
      <Help />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
