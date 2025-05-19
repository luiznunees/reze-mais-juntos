
const AboutUs = () => {
  return (
    <section className="section-padding bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-primary">🙌 Quem está por trás?</span>
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg text-white/80 mb-6">
              O Reze+ está sendo criado por jovens católicos que querem ver uma geração 
              inteira redescobrindo a beleza da fé com alegria e liberdade.
            </p>
            
            <p className="text-lg text-white/80">
              Esse projeto nasceu de um desejo: ajudar outros jovens a manterem a fé viva 
              mesmo em um mundo tão acelerado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
