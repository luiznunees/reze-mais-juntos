
import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationQR = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Apoie nossa missão</span>
          </h2>
          <p className="text-lg text-secondary/80 mb-8">
            Ajude-nos a evangelizar e levar o Reze+ para mais pessoas através da sua doação.
          </p>
          
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
              
              <div className="w-full max-w-xs mx-auto mb-6">
                {/* LivePix QR Widget embed */}
                <iframe
                  src="https://widget.livepix.gg/embed/26241fcb-05da-4ed9-89dc-f517e6b9df6e"
                  width="100%"
                  height="300px"
                  style={{ border: 'none', borderRadius: '8px' }}
                  title="Reze+ Doação"
                  className="shadow-sm"
                />
              </div>
              
              <p className="text-secondary/70 text-sm mb-4">
                Escaneie o QR Code acima ou clique no botão abaixo para fazer sua doação.
              </p>
              
              <Button 
                className="bg-primary hover:bg-primary-dark text-white"
                onClick={() => window.open('https://livepix.gg/embed/26241fcb-05da-4ed9-89dc-f517e6b9df6e', '_blank')}
              >
                Fazer Doação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationQR;
