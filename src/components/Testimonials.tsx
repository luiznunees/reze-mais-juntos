
import { Heart } from "lucide-react";

const testimonials = [
  {
    quote: "A oração é o oxigênio da alma.",
    author: "Padre Pio",
  },
  {
    quote: "Rezar é acender um fogo dentro do peito. É deixar Deus morar em você.",
    author: "Jovem católico anônimo",
  },
  {
    quote: "Se todos soubessem o poder da oração, ninguém deixaria de rezar um só dia.",
    author: "Santa Teresinha",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Heart className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Frases que nos inspiram
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-xl mb-6 italic">{item.quote}</p>
                <div className="font-semibold text-gray-700">— {item.author}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Por que ainda não lançamos?</h3>
            <p className="text-gray-600 mb-6">
              Queremos construir um app que realmente faça diferença na sua vida, com a cara dos jovens de hoje. 
              Por isso, antes de lançar, estamos ouvindo você para criar algo feito sob medida, que você realmente 
              vai querer usar todos os dias.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Quando vai sair?</h4>
              <p className="text-gray-600">
                Estamos trabalhando para lançar a primeira versão ainda este ano! Enquanto isso, você pode se 
                inscrever aqui para ser um dos primeiros a usar e ficar por dentro de todas as novidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
