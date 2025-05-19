
import AboutUs from "@/components/AboutUs";
import DonationQR from "@/components/DonationQR";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import PreRegister from "@/components/PreRegister";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Features />
      <Testimonials />
      <PreRegister />
      <DonationQR />
      <FAQ />
      <Help />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
