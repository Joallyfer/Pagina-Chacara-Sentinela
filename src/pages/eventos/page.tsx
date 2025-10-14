
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Eventos() {
  const ceremonyPhotos = [
    'https://readdy.ai/api/search-image?query=Beautiful%20wedding%20ceremony%20by%20crystal%20lake%20with%20wooden%20deck%20extending%20over%20water%2C%20bride%20and%20groom%20exchanging%20vows%2C%20rustic%20chapel%20setting%2C%20golden%20hour%20lighting%2C%20romantic%20atmosphere%2C%20guests%20seated%20on%20wooden%20benches%2C%20natural%20altar%20with%20white%20flowers&width=800&height=600&seq=cerimonia-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Evening%20wedding%20ceremony%20by%20lake%20with%20fairy%20lights%2C%20romantic%20candlelit%20altar%2C%20bride%20in%20flowing%20dress%20walking%20down%20wooden%20deck%2C%20reflection%20in%20water%2C%20magical%20twilight%20atmosphere%2C%20rustic%20elegant%20setting&width=800&height=600&seq=cerimonia-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Daytime%20wedding%20ceremony%20lakeside%20with%20natural%20wooden%20altar%2C%20bride%20and%20groom%20holding%20hands%2C%20beautiful%20lake%20reflection%2C%20green%20nature%20surroundings%2C%20intimate%20romantic%20setting%2C%20professional%20wedding%20photography&width=800&height=600&seq=cerimonia-3&orientation=landscape'
  ];

  const salaoPhotos = [
    'https://readdy.ai/api/search-image?query=Elegant%20rustic%20wedding%20reception%20hall%20with%20wooden%20tables%2C%20warm%20lighting%2C%20decorated%20ceiling%2C%20dance%20floor%2C%20guests%20celebrating%2C%20rustic%20chic%20decor%2C%20capacity%20for%20160%20people%2C%20cozy%20sophisticated%20atmosphere&width=800&height=600&seq=salao-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20reception%20hall%20interior%20with%20professional%20kitchen%2C%20bar%20area%2C%20rustic%20wooden%20details%2C%20elegant%20table%20settings%2C%20warm%20ambient%20lighting%2C%20rustic%20chic%20style%2C%20complete%20wedding%20venue%20structure&width=800&height=600&seq=salao-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20reception%20outdoor%20deck%20area%20with%20lake%20view%2C%20rustic%20wooden%20deck%2C%20elegant%20outdoor%20dining%20setup%2C%20string%20lights%2C%20natural%20surroundings%2C%20romantic%20evening%20atmosphere%2C%20complete%20wedding%20venue&width=800&height=600&seq=salao-3&orientation=landscape'
  ];

  const estruturaPhotos = [
    'https://readdy.ai/api/search-image?query=Beautiful%20lavender%20field%20at%20wedding%20venue%20with%20horses%20in%20background%2C%20rustic%20farm%20setting%2C%20purple%20lavender%20flowers%2C%20natural%20wedding%20photography%20location%2C%20countryside%20charm%2C%20romantic%20outdoor%20setting&width=800&height=600&seq=estrutura-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20venue%20parking%20area%20and%20easy%20access%20road%2C%20well-maintained%20grounds%2C%20green%20spaces%2C%20rustic%20entrance%2C%20professional%20wedding%20venue%20infrastructure%2C%20convenient%20guest%20access&width=800&height=600&seq=estrutura-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20venue%20natural%20surroundings%20with%20green%20fields%2C%20trees%2C%20rustic%20pathways%2C%20beautiful%20landscape%20for%20wedding%20photography%2C%20peaceful%20countryside%20setting%2C%20complete%20venue%20grounds&width=800&height=600&seq=estrutura-3&orientation=landscape'
  ];

  const realWeddingPhotos = [
    'https://readdy.ai/api/search-image?query=Real%20wedding%20couple%20kissing%20by%20lake%20at%20sunset%2C%20bride%20in%20elegant%20white%20dress%2C%20groom%20in%20dark%20suit%2C%20romantic%20golden%20hour%20lighting%2C%20professional%20wedding%20photography%2C%20emotional%20moment%2C%20beautiful%20natural%20backdrop&width=600&height=800&seq=real-1&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Wedding%20reception%20guests%20dancing%20and%20celebrating%2C%20joyful%20atmosphere%2C%20rustic%20venue%2C%20warm%20lighting%2C%20people%20having%20fun%2C%20authentic%20wedding%20moments%2C%20emotional%20celebration%2C%20family%20and%20friends%20together&width=800&height=600&seq=real-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Bride%20walking%20down%20the%20aisle%20with%20father%2C%20emotional%20moment%2C%20guests%20watching%2C%20rustic%20chapel%20setting%2C%20beautiful%20wedding%20dress%2C%20natural%20lighting%2C%20touching%20family%20moment%2C%20professional%20wedding%20photography&width=600&height=800&seq=real-3&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Wedding%20couple%20first%20dance%20under%20fairy%20lights%2C%20romantic%20evening%20atmosphere%2C%20rustic%20venue%2C%20intimate%20moment%2C%20beautiful%20lighting%2C%20emotional%20connection%2C%20professional%20wedding%20photography%2C%20magical%20setting&width=800&height=600&seq=real-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Nighttime%20wedding%20reception%20with%20string%20lights%2C%20guests%20celebrating%2C%20rustic%20venue%20illuminated%2C%20magical%20atmosphere%2C%20wedding%20party%2C%20joyful%20celebration%2C%20warm%20ambient%20lighting%2C%20beautiful%20evening%20setting&width=800&height=600&seq=real-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Daytime%20wedding%20ceremony%20with%20bride%20and%20groom%20exchanging%20rings%2C%20emotional%20moment%2C%20natural%20sunlight%2C%20rustic%20altar%2C%20intimate%20ceremony%2C%20professional%20wedding%20photography%2C%20beautiful%20natural%20setting&width=600&height=800&seq=real-6&orientation=portrait'
  ];

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />
      
      {/* Hero Section Cinematográfico */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://readdy.ai/api/search-image?query=Beautiful%20wedding%20venue%20with%20lake%20and%20rustic%20chapel%2C%20golden%20hour%20lighting%2C%20romantic%20atmosphere%2C%20bride%20walking%20towards%20altar%2C%20cinematic%20wedding%20scene%2C%20professional%20photography&width=1920&height=1080&seq=hero-video-poster&orientation=landscape"
          >
            <source src="#" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-matte-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <h1 className="font-sacramento text-6xl md:text-7xl lg:text-8xl mb-6 text-soft-gold">
              O cenário perfeito para o seu sim.
            </h1>
            <p className="font-poppins font-light text-xl md:text-2xl mb-8 opacity-90">
              Casamentos cercados pela natureza, celebrados com emoção e eternizados com amor.
            </p>
          </div>
        </div>
      </section>

      {/* A Cerimônia dos Sonhos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-8">
                💍 A Cerimônia dos Sonhos
              </h2>
              <div className="space-y-6 font-poppins font-light text-lg text-matte-black/80">
                <p>
                  Imagine dizer "sim" com o reflexo do lago e o som suave da natureza.
                </p>
                <p>
                  Nossa capela à beira do lago é o cenário ideal para casamentos românticos e inesquecíveis.
                </p>
                <p>
                  Com um deck de madeira que avança sobre a água, o espaço convida a celebrar o amor em meio a um visual deslumbrante.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {ceremonyPhotos.map((photo, index) => (
                <div key={index} className={`${index === 0 ? 'col-span-2' : ''} relative group cursor-pointer`}>
                  <img
                    src={photo}
                    alt={`Cerimônia ${index + 1}`}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Salão de Festas */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {salaoPhotos.map((photo, index) => (
                <div key={index} className={`${index === 1 ? 'col-span-2' : ''} relative group cursor-pointer`}>
                  <img
                    src={photo}
                    alt={`Salão ${index + 1}`}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-soft-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div>
              <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-8">
                🏡 O Salão de Festas
              </h2>
              <div className="space-y-6 font-poppins font-light text-lg text-matte-black/80 mb-8">
                <p>
                  Após o "sim", é hora de comemorar. Nosso salão de festas oferece conforto, elegância e toda a estrutura que um evento completo precisa.
                </p>
                <p>
                  Com capacidade para até 160 pessoas, o ambiente é perfeito para celebrar com familiares e amigos, unindo aconchego e sofisticação.
                </p>
              </div>

              {/* Destaques */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-medium text-xl text-moss-green mb-6">Destaques do salão:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Capacidade para até 160 convidados',
                    'Cozinha mobiliada e funcional',
                    'Bar com duas geladeiras',
                    'Mesas e cadeiras inclusas',
                    'Espaço para gerador',
                    'Área externa com deck e vista para o lago'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                      <span className="font-poppins font-light text-sm text-matte-black/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura Completa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-8">
              🌸 Estrutura Completa
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 font-poppins font-light text-lg text-matte-black/80">
              <p>
                Cada espaço da Chácara Sentinela foi pensado para que seu casamento aconteça com conforto, beleza e tranquilidade.
              </p>
              <p>
                Além da capela e do salão, o local conta com áreas verdes, campo de lavanda, cavalos para fotos, estacionamento amplo e acesso fácil — tudo para garantir que o grande dia seja perfeito em cada detalhe.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estruturaPhotos.map((photo, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={photo}
                  alt={`Estrutura ${index + 1}`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-moss-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casamentos Reais */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-5xl md:text-6xl text-soft-gold mb-6">
              "Histórias reais, momentos eternos."
            </h2>
            <p className="font-poppins font-light text-lg text-matte-black/80 max-w-3xl mx-auto">
              Inspire-se com casamentos que já aconteceram na Chácara Sentinela. Cada imagem carrega emoção, alegria e o encanto de um dia vivido entre flores, céu e amor.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realWeddingPhotos.map((photo, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={photo}
                  alt={`Casamento Real ${index + 1}`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-poppins font-light text-sm">
                    {index % 2 === 0 ? 'Casamento Diurno' : 'Casamento Noturno'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section 
        className="py-32 relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20sunset%20over%20lake%20and%20countryside%2C%20golden%20hour%20lighting%2C%20peaceful%20romantic%20atmosphere%2C%20wedding%20venue%20landscape%2C%20soft%20warm%20colors%2C%20dreamy%20natural%20setting%20for%20wedding%20inspiration&width=1920&height=1080&seq=cta-background&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-matte-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8 text-white">
          <h2 className="font-sacramento text-5xl md:text-6xl text-soft-gold mb-8">
            💫 "Transforme o seu sonho em um dia inesquecível."
          </h2>
          <p className="font-poppins font-light text-xl mb-12 opacity-90">
            A Chácara Sentinela oferece o cenário perfeito, a estrutura completa e o acolhimento que o seu casamento merece.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5541996268287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                <i className="ri-whatsapp-line mr-2"></i>
                Agendar Visita Agora
              </Button>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}