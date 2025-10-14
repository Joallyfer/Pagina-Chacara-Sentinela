
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Home() {
  const espacos = [
    {
      title: 'Cerimônia no Lago',
      description: 'Capela à beira do lago com vista encantadora',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20lakeside%20wedding%20ceremony%20chapel%20with%20wooden%20altar%2C%20natural%20landscape%2C%20golden%20hour%20lighting%2C%20romantic%20atmosphere%2C%20rustic%20chic%20style%2C%20peaceful%20water%20reflection%2C%20lush%20green%20surroundings%2C%20intimate%20outdoor%20setting&width=400&height=300&seq=cerimonia-lago&orientation=landscape',
      link: '/espaco'
    },
    {
      title: 'Salão de Festas',
      description: 'Ambiente climatizado para até 160 convidados',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20rustic%20wedding%20reception%20hall%20with%20wooden%20beams%2C%20warm%20lighting%2C%20round%20tables%20with%20floral%20centerpieces%2C%20dance%20floor%2C%20natural%20countryside%20charm%2C%20cozy%20atmosphere%2C%20capacity%20for%20160%20guests&width=400&height=300&seq=salao-festas&orientation=landscape',
      link: '/espaco'
    },
    {
      title: 'Ensaio Fotográfico',
      description: 'Cenários únicos em meio à natureza',
      image: 'https://readdy.ai/api/search-image?query=Romantic%20couple%20photoshoot%20in%20lavender%20field%20at%20sunset%2C%20golden%20hour%20lighting%2C%20natural%20countryside%20setting%2C%20rustic%20wedding%20venue%20background%2C%20dreamy%20atmosphere%2C%20professional%20photography%20session&width=400&height=300&seq=ensaio-foto&orientation=landscape',
      link: '/ensaio'
    }
  ];

  const galeriaPreview = [
    'https://readdy.ai/api/search-image?query=Beautiful%20wedding%20ceremony%20by%20the%20lake%20with%20bride%20and%20groom%20exchanging%20vows%2C%20guests%20seated%20in%20wooden%20chairs%2C%20natural%20landscape%2C%20golden%20hour%20lighting%2C%20romantic%20atmosphere%2C%20rustic%20chic%20decoration&width=300&height=200&seq=galeria-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20reception%20party%20in%20rustic%20hall%20with%20dancing%20couple%2C%20warm%20lighting%2C%20floral%20decorations%2C%20guests%20celebrating%2C%20joyful%20atmosphere%2C%20countryside%20wedding%20venue&width=300&height=200&seq=galeria-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Bride%20and%20groom%20romantic%20portrait%20in%20lavender%20field%20at%20sunset%2C%20golden%20hour%20photography%2C%20natural%20countryside%20setting%2C%20dreamy%20atmosphere%2C%20professional%20wedding%20photography&width=300&height=200&seq=galeria-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20cake%20cutting%20ceremony%20in%20rustic%20venue%2C%20happy%20couple%20smiling%2C%20guests%20watching%2C%20warm%20lighting%2C%20natural%20decoration%2C%20intimate%20moment%2C%20countryside%20wedding&width=300&height=200&seq=galeria-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Outdoor%20wedding%20cocktail%20hour%20by%20the%20lake%2C%20guests%20mingling%2C%20natural%20landscape%2C%20golden%20hour%20lighting%2C%20rustic%20chic%20decoration%2C%20peaceful%20atmosphere&width=300&height=200&seq=galeria-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20bouquet%20toss%20moment%20with%20bride%20and%20bridesmaids%2C%20joyful%20celebration%2C%20natural%20outdoor%20setting%2C%20rustic%20wedding%20venue%2C%20happy%20atmosphere&width=300&height=200&seq=galeria-6&orientation=landscape'
  ];

  const depoimentos = [
    {
      texto: "Um lugar mágico que superou todas as nossas expectativas. Nosso casamento foi perfeito!",
      autor: "Ana & Carlos",
      data: "Março 2024",
      rating: 5
    },
    {
      texto: "A natureza, o lago, a estrutura... tudo impecável. Recomendamos de olhos fechados!",
      autor: "Marina & Felipe",
      data: "Janeiro 2024",
      rating: 5
    },
    {
      texto: "Realizamos nosso sonho aqui. Cada detalhe foi cuidado com muito carinho.",
      autor: "Juliana & Roberto",
      data: "Dezembro 2023",
      rating: 5
    }
  ];

  const estruturas = [
    {
      icon: 'ri-building-2-line',
      title: 'Capela à beira do lago',
      description: 'Cerimônia com vista única'
    },
    {
      icon: 'ri-home-heart-line',
      title: 'Salão para 160 convidados',
      description: 'Ambiente climatizado e acolhedor'
    },
    {
      icon: 'ri-door-line',
      title: 'Casa da Noiva',
      description: 'Espaço exclusivo para se preparar'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Cozinha equipada e bar',
      description: 'Estrutura completa para eventos'
    },
    {
      icon: 'ri-car-line',
      title: 'Área para gerador',
      description: 'E estacionamento amplo'
    }
  ];

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />
      
      {/* 1. Capa Cinematográfica */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://readdy.ai/api/search-image?query=Cinematic%20aerial%20view%20of%20beautiful%20wedding%20venue%20with%20lake%2C%20chapel%2C%20natural%20landscape%2C%20couples%20smiling%2C%20golden%20hour%20lighting%2C%20romantic%20atmosphere%2C%20rustic%20chic%20style%2C%20peaceful%20countryside%20setting%2C%20wedding%20celebration%20moments&width=1920&height=1080&seq=hero-cinematico&orientation=landscape" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-soft-gold/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-sacramento text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in">
            O cenário perfeito para o seu grande dia
          </h1>
          <p className="font-poppins font-light text-lg md:text-xl lg:text-2xl mb-8 animate-slide-up">
            Casamentos, ensaios e celebrações cercadas pela natureza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                Agendar Visita
              </Button>
            </Link>
            <Link to="/galeria">
              <Button variant="secondary" size="lg">
                Ver Galeria de Sonhos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Sobre Nós - Nossa Essência */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20family-owned%20rustic%20wedding%20venue%20with%20natural%20landscape%2C%20warm%20welcoming%20atmosphere%2C%20wooden%20structures%2C%20lush%20gardens%2C%20peaceful%20countryside%20setting%2C%20golden%20hour%20lighting%2C%20intimate%20and%20cozy%20feeling&width=1920&height=600&seq=sobre-nos-bg&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-6">
                Mais do que um espaço, um sonho em família
              </h2>
              <p className="font-poppins font-light text-lg text-matte-black/80 mb-6">
                A Chácara Sentinela do Imbuial nasceu do desejo de criar um refúgio onde a natureza, o amor e as celebrações se unem em harmonia.
              </p>
              <p className="font-poppins font-light text-base text-matte-black/70 mb-6">
                Aqui, cada detalhe foi pensado para transformar momentos em lembranças eternas.
              </p>
              <p className="font-poppins font-light text-base text-matte-black/70 mb-8">
                Somos um espaço familiar, acolhedor e apaixonado por ver histórias se tornarem inesquecíveis.
              </p>
              <Link to="/espaco">
                <Button variant="primary" size="lg">
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Beautiful%20family%20portrait%20at%20rustic%20wedding%20venue%2C%20warm%20welcoming%20owners%2C%20natural%20landscape%20background%2C%20golden%20hour%20lighting%2C%20intimate%20and%20cozy%20feeling%2C%20traditional%20Brazilian%20countryside%20charm%2C%20family%20business%20atmosphere&width=600&height=500&seq=familia-fundadora&orientation=landscape"
                alt="Família Fundadora"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-soft-gold/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore o Espaço */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">
              Um lugar, muitos cenários encantadores
            </h2>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-2xl mx-auto">
              Lago, capela, salão de festas e jardins — cada ambiente da Chácara Sentinela tem um encanto único.
              Descubra os espaços criados para casamentos, eventos e ensaios cheios de emoção.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {espacos.map((espaco, index) => (
              <Link key={index} to={espaco.link} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={espaco.image}
                      alt={espaco.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins font-medium text-xl text-matte-black mb-2">{espaco.title}</h3>
                    <p className="font-poppins font-light text-sm text-matte-black/70">{espaco.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/espaco">
              <Button variant="primary" size="lg">
                Ver Todos os Espaços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Galeria de Sonhos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">
              Momentos que o tempo não apaga
            </h2>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-2xl mx-auto">
              Inspire-se com histórias reais que aconteceram aqui.
              Casamentos, ensaios e celebrações que refletem a essência da Chácara Sentinela.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {galeriaPreview.map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-soft-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/galeria">
              <Button variant="primary" size="lg">
                Ver Galeria Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Depoimentos */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">
              Palavras que aquecem o coração
            </h2>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-2xl mx-auto">
              Cada sorriso e cada mensagem nos lembram o quanto é especial fazer parte do sonho de tantas pessoas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-soft-gold text-lg"></i>
                  ))}
                </div>
                <p className="font-poppins font-light text-base text-matte-black/80 mb-4 italic">
                  "{depoimento.texto}"
                </p>
                <div className="border-t border-moss-green/20 pt-4">
                  <p className="font-poppins font-medium text-sm text-moss-green">{depoimento.autor}</p>
                  <p className="font-poppins font-light text-xs text-matte-black/60">{depoimento.data}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/depoimentos">
              <Button variant="primary" size="lg">
                Ver Mais Depoimentos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Estrutura e Experiências */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">
              Tudo o que o seu evento precisa
            </h2>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-2xl mx-auto">
              Estrutura completa, conforto e natureza viva
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {estruturas.map((estrutura, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-moss-green/10 rounded-full flex items-center justify-center group-hover:bg-moss-green group-hover:scale-110 transition-all duration-300">
                  <i className={`${estrutura.icon} text-2xl text-moss-green group-hover:text-white`}></i>
                </div>
                <h3 className="font-poppins font-medium text-lg text-matte-black mb-2">{estrutura.title}</h3>
                <p className="font-poppins font-light text-sm text-matte-black/70">{estrutura.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/espaco">
              <Button variant="primary" size="lg">
                Conhecer Estrutura Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Chamada Final */}
      <section className="py-20 bg-moss-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20sunset%20reflection%20on%20lake%20at%20wedding%20venue%2C%20golden%20hour%20lighting%2C%20peaceful%20countryside%20setting%2C%20romantic%20atmosphere%2C%20natural%20landscape%2C%20warm%20colors%2C%20dreamy%20atmosphere&width=1920&height=600&seq=chamada-final&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-sacramento text-4xl md:text-5xl mb-6">
            Viva o seu grande dia aqui
          </h2>
          <p className="font-poppins font-light text-lg mb-8 opacity-90">
            A Chácara Sentinela é o cenário perfeito para o amor florescer.
            Venha conhecer, sentir e se encantar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button variant="secondary" size="lg">
                Agendar Visita Agora
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-moss-green">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
