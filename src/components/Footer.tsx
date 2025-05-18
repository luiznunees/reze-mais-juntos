
import { Instagram, Mail, WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary text-white p-2 rounded-lg text-xl font-bold">
                  Reze+
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Bora rezar + juntos?</h3>
              <p className="text-gray-600 mb-6">
                Seja bem-vindo à nova geração de oração.
              </p>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5 text-primary" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <WhatsApp className="h-5 w-5 text-primary" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">📱 Redes sociais</h3>
              <p className="text-gray-600 mb-4">Segue a gente nas redes e acompanha tudo por lá:</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-primary mr-2" />
                  <span>Instagram: @rezemais.app</span>
                </div>
                <div className="flex items-center">
                  <WhatsApp className="h-5 w-5 text-primary mr-2" />
                  <span>WhatsApp: (XX) XXXXX-XXXX</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Reze+. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm">
                Este projeto está sendo criado com a ajuda de IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
