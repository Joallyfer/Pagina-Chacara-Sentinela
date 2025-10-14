import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Contato = () => {
  return (
    <div className="min-h-screen bg-light-beige">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-b from-moss-green/20 to-light-beige overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20countryside%20wedding%20venue%20contact%20page%20with%20rustic%20chic%20reception%20area%2C%20warm%20golden%20lighting%2C%20romantic%20atmosphere%2C%20lake%20view%20in%20background%2C%20perfect%20for%20wedding%20planning%20consultation&width=1200&height=800&seq=contacthero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green/70 to-moss-green/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-sacramento text-6xl md:text-7xl mb-6 leading-tight">
              Vamos realizar seu sonho juntos
            </h1>
            <p className="font-poppins font-light text-xl md:text-2xl mb-8 leading-relaxed">
              Estamos aqui para transformar sua visão em realidade.
              <br />
              Entre em contato e vamos começar a planejar o dia mais
              especial da sua vida.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato — agora com o mesmo fundo da sessão de WhatsApp */}
        <section className="py-20 bg-gradient-to-r from-moss-green to-moss-green/80 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-sacramento text-5xl md:text-6xl text-white mb-6">
                Fale conosco
              </h2>
              <p className="font-poppins font-light text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Nossa equipe está pronta para atender você com todo carinho e
                atenção que seu evento merece.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              {/* Telefone */}
              <div className="text-center group">
                <a
                  href="https://wa.me/5541996268287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="w-16 h-16 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-soft-gold/30 transition-colors duration-300">
                    <i className="ri-phone-line text-soft-gold text-2xl"></i>
                  </div>
                </a>
                <h3 className="font-poppins font-medium text-lg text-white mb-2">
                  Telefone
                </h3>
                <a
                  href="https://wa.me/5541996268287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="font-poppins font-light text-white/90 hover:text-soft-gold transition-colors duration-300">
                    (41) 99626-8287
                  </p>
                </a>
                <p className="font-poppins font-light text-sm text-white/70">
                  Segunda a Domingo, 8h às 18h
                </p>
              </div>

              {/* E-mail */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-soft-gold/30 transition-colors duration-300">
                  <i className="ri-mail-line text-soft-gold text-2xl"></i>
                </div>
                <h3 className="font-poppins font-medium text-lg text-white mb-2">
                  E-mail
                </h3>
                <p className="font-poppins font-light text-white/90">
                  contato@chacarasentinela.com.br
                </p>
                <p className="font-poppins font-light text-sm text-white/70">
                  Respondemos em até 24h
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Mapa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
              Como chegar
            </h2>
            <p className="font-poppins font-light text-lg md:text-2xl text-moss-green/80 max-w-3xl mx-auto leading-relaxed">
              Localizada em meio à natureza de Colombo - PR, a Chácara Sentinela
              oferece fácil acesso e estacionamento amplo para seus convidados.
            </p>
          </div>

          <div className="bg-moss-green/5 rounded-2xl p-8 mb-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8512472643943!2d-49.162886199999996!3d-25.297136099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce98de5f2b853%3A0x59e2d1ab54f204d0!2sCh%C3%A1cara%20Sentinela%20do%20Imbuial!5e0!3m2!1spt-BR!2sbr!4v1728514178323!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Chácara Sentinela do Imbuial"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contato;
