
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const scrollToPreRegister = () => {
    const element = document.getElementById('pre-register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-secondary pt-8 pb-16 md:pt-16 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/357468f3-fba2-4800-8bf4-61a2d2c0260c.png" 
                  alt="Reze+ Logo" 
                  className="h-16"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Reze todo dia. <span className="text-primary">Acenda sua fé.</span> Evolua.
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-lg">
              O app que vai te ajudar a rezar — do seu jeito, no seu ritmo, com sua galera.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white"
                onClick={scrollToPreRegister}
              >
                Entrar na lista de espera
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Saiba mais
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm shadow-xl rounded-3xl p-4 transform rotate-2 animate-pulse-slow">
                <div className="bg-primary/20 rounded-2xl p-6 aspect-[9/16] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🔥</span>
                  </div>
                  <div className="w-3/4 h-6 bg-white/20 rounded-md mb-3"></div>
                  <div className="w-1/2 h-4 bg-white/20 rounded-md"></div>
                  <div className="mt-8 w-full grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/10 rounded-xl shadow-sm"></div>
                    <div className="h-24 bg-white/10 rounded-xl shadow-sm"></div>
                    <div className="h-24 bg-white/10 rounded-xl shadow-sm"></div>
                    <div className="h-24 bg-white/10 rounded-xl shadow-sm"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
