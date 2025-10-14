
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Espaco() {
  const spaces = [
    {
      id: 'salao',
      title: 'Salão de Festas',
      subtitle: 'Elegância e conforto para sua celebração',
      description: 'Amplo salão climatizado com capacidade para até 200 convidados, pista de dança, sistema de som profissional e iluminação especial. Cozinha completa e área de apoio para buffet.',
      features: [
        'Capacidade para 200 convidados',
        'Climatização completa',
        'Pista de dança ampla',
        'Sistema de som profissional',
        'Iluminação especial',
        'Cozinha profissional equipada'
      ],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20rustic%20chic%20wedding%20reception%20hall%20with%20exposed%20wooden%20beams%2C%20warm%20lighting%2C%20round%20tables%20with%20white%20linens%2C%20dance%20floor%2C%20professional%20kitchen%2C%20air%20conditioning%2C%20capacity%20for%20200%20guests%2C%20romantic%20atmosphere&width=800&height=600&seq=salao-festas&orientation=landscape',
      video: 'https://readdy.ai/api/search-image?query=Interior%20view%20of%20elegant%20wedding%20reception%20hall%20with%20rustic%20chic%20decoration%2C%20warm%20ambient%20lighting%2C%20dance%20floor%2C%20professional%20setup%2C%20romantic%20atmosphere%2C%20wooden%20details&width=800&height=450&seq=salao-video&orientation=landscape'
    },
    {
      id: 'lago',
      title: 'Cerimônia no Lago',
      subtitle: 'O altar dos seus sonhos à beira da água',
      description: 'Capela encantadora e altar ao ar livre com vista para o lago cristalino. Passarela natural sobre a água e cenário deslumbrante para cerimônias inesquecíveis.',
      features: [
        'Capela com vista para o lago',
        'Altar ao ar livre',
        'Passarela sobre a água',
        'Bancos rústicos para convidados',
        'Cenário natural deslumbrante',
        'Fotografia única'
      ],
      image: 'https://readdy.ai/api/search-image?query=Romantic%20outdoor%20wedding%20ceremony%20by%20crystal%20clear%20lake%2C%20wooden%20chapel%2C%20natural%20altar%2C%20walkway%20over%20water%2C%20rustic%20wooden%20benches%2C%20surrounded%20by%20lush%20greenery%2C%20golden%20hour%20lighting%2C%20peaceful%20atmosphere&width=800&height=600&seq=cerimonia-lago&orientation=landscape',
      video: 'https://readdy.ai/api/search-image?query=Aerial%20view%20of%20lakeside%20wedding%20ceremony%2C%20wooden%20chapel%2C%20altar%20by%20the%20water%2C%20natural%20landscape%2C%20romantic%20outdoor%20setting%2C%20golden%20hour%20lighting&width=800&height=450&seq=lago-video&orientation=landscape'
    },
    {
      id: 'fotograficos',
      title: 'Espaços Fotográficos',
      subtitle: 'Cenários únicos para registros eternos',
      description: 'Campo de lavanda perfumado, cavalos majestosos, jardins floridos e bosque encantado. Múltiplos cenários para ensaios e fotografias únicas em cada estação.',
      features: [
        'Campo de lavanda perfumado',
        'Cavalos para fotografias',
        'Jardins floridos',
        'Bosque encantado',
        'Múltiplos cenários',
        'Beleza em todas as estações'
      ],
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20lavender%20field%20with%20horses%2C%20flowering%20gardens%2C%20enchanted%20forest%2C%20multiple%20photography%20scenarios%2C%20natural%20landscape%2C%20romantic%20outdoor%20settings%2C%20golden%20hour%20lighting%2C%20rustic%20countryside&width=800&height=600&seq=espacos-fotograficos&orientation=landscape',
      video: 'https://readdy.ai/api/search-image?query=Cinematic%20view%20of%20lavender%20fields%2C%20horses%20grazing%2C%20flowering%20gardens%2C%20forest%20paths%2C%20multiple%20photography%20locations%2C%20natural%20beauty%2C%20romantic%20atmosphere&width=800&height=450&seq=foto-video&orientation=landscape'
    },
    {
      id: 'casa-noiva',
      title: 'Casa da Noiva',
      subtitle: 'Espaço exclusivo para se preparar com tranquilidade',
      description: 'A Casa da Noiva é um espaço reservado e especial dentro da chácara — feito para que a noiva e suas madrinhas possam se preparar com conforto, tranquilidade e privacidade antes da cerimônia.',
      features: [
        'Ambiente privativo e exclusivo',
        'Banheiro privativo completo',
        'Espelhos amplos e iluminação suave',
        'Ar-condicionado para conforto',
        'Móveis elegantes e funcionais',
        'Cenário perfeito para making of'
      ],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20bridal%20preparation%20room%20with%20large%20mirrors%2C%20soft%20warm%20lighting%2C%20comfortable%20seating%2C%20rustic%20chic%20decoration%2C%20private%20bathroom%2C%20air%20conditioning%2C%20perfect%20for%20bride%20getting%20ready%2C%20romantic%20atmosphere%2C%20wooden%20details%2C%20beautiful%20natural%20light&width=800&height=600&seq=casa-noiva&orientation=landscape',
      video: 'https://readdy.ai/api/search-image?query=Interior%20view%20of%20bridal%20preparation%20suite%2C%20elegant%20mirrors%2C%20soft%20lighting%2C%20comfortable%20furniture%2C%20rustic%20chic%20style%2C%20perfect%20for%20getting%20ready%20photos%20and%20videos&width=800&height=450&seq=casa-noiva-video&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />
      
      {/* Hero Section */}
{/* Hero Section */}
        <section className="relative z-10 pt-32 md:pt-36 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
              Nossos Espaços
            </h1>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-3xl mx-auto">
              Cada canto da Chácara Sentinela foi pensado para criar momentos únicos.
              Descubra os espaços que farão parte da sua história de amor.
            </p>
          </div>
        </section>


      {/* Spaces Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {spaces.map((space, index) => (
              <div key={space.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="font-sacramento text-4xl text-moss-green mb-3">
                    {space.title}
                  </h2>
                  <h3 className="font-poppins font-medium text-xl text-matte-black mb-6">
                    {space.subtitle}
                  </h3>
                  <p className="font-poppins font-light text-base text-matte-black/80 mb-8">
                    {space.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {space.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                        <span className="font-poppins font-light text-sm text-matte-black/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/galeria">
                      <Button variant="primary">
                        Ver Galeria
                      </Button>
                    </Link>
                    <Link to="/contato">
                      <Button variant="outline">
                        Agendar Visita
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Images */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    
                    {/* Video Thumbnail Overlay */}
                    <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <i className="ri-play-fill text-2xl text-moss-green ml-1"></i>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className={`absolute w-24 h-24 bg-soft-gold/20 rounded-2xl -z-10 ${index % 2 === 0 ? '-bottom-6 -right-6' : '-top-6 -left-6'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-moss-green text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-sacramento text-4xl md:text-5xl mb-6">
            Pronto para conhecer pessoalmente?
          </h2>
          <p className="font-poppins font-light text-lg mb-8 opacity-90">
            Agende uma visita e sinta a energia única de cada espaço. 
            Nossos consultores estarão prontos para apresentar todos os detalhes.
          </p>
          <div className="flex justify-center">
          <a
            href="https://wa.me/5541996268287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="whitespace-nowrap">
              <i className="ri-whatsapp-line mr-2"></i>
              Agendar Visita
            </Button>
          </a>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
