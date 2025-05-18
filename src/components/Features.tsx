
import { Book, Calendar, Heart, MessageSquare, Rocket, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const featureItems = [
  {
    icon: Book,
    title: "Fé com propósito",
    description: "Acompanhe o evangelho do dia e se conecte com a Palavra de Deus diariamente.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Star,
    title: "Foguinho da oração",
    description: "Reze todo dia e mantenha sua chama acesa. Se deixar apagar… tem missão!",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Users,
    title: "Foguinho com amigos",
    description: "Rezem juntos! Se um não rezar, o foguinho não sobe.",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Rocket,
    title: "Crescimento espiritual",
    description: "Quanto mais você reza, mais você evolui — e desbloqueia novas missões.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Book,
    title: "Modo offline",
    description: "Quer ler o evangelho no ônibus, na escola ou na missa? O app funciona offline também.",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-500",
  },
  {
    icon: MessageSquare,
    title: "Comunidade",
    description: "Um espaço pra trocar ideias, rezar em grupo, estudar a fé e crescer junto.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">🔥</span> Por que Reze+?
          </h2>
          <p className="text-lg text-gray-600">
            O Reze+ é o aplicativo católico pensado especialmente para jovens que querem viver a fé de forma autêntica, animada e moderna.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={cn("p-3 rounded-lg mr-4", item.bgColor)}>
                  <item.icon className={cn("h-6 w-6", item.iconColor)} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">📱 Como funciona?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-primary text-xl font-bold mb-2">01</div>
              <h4 className="text-lg font-semibold mb-2">Abra o app</h4>
              <p className="text-gray-600">Veja o evangelho do dia ou uma missão secreta da fé.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-primary text-xl font-bold mb-2">02</div>
              <h4 className="text-lg font-semibold mb-2">Reze</h4>
              <p className="text-gray-600">Sozinho ou com amigos, o importante é manter o fogo aceso.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-primary text-xl font-bold mb-2">03</div>
              <h4 className="text-lg font-semibold mb-2">Suba de nível</h4>
              <p className="text-gray-600">Quanto mais firme você for, mais recompensas espirituais vai receber.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-primary text-xl font-bold mb-2">04</div>
              <h4 className="text-lg font-semibold mb-2">Desafie-se</h4>
              <p className="text-gray-600">Missões, roletas e propósitos diários vão te levar mais fundo na fé.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
