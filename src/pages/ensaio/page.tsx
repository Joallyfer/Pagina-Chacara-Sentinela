
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Ensaio() {
  const scenarios = [
    {
      id: 'lavandario',
      title: 'Lavandário',
      description: 'Um campo perfumado de lavandas roxas que se estende até onde a vista alcança. O aroma suave e as cores vibrantes criam um cenário romântico e encantador, perfeito para fotos que transmitem serenidade e amor.',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20lavender%20field%20in%20full%20bloom%20with%20purple%20flowers%20stretching%20to%20horizon%2C%20romantic%20couple%20walking%20through%20lavender%20rows%2C%20golden%20hour%20lighting%2C%20rustic%20countryside%20setting%2C%20dreamy%20atmosphere%2C%20professional%20photography&width=800&height=600&seq=lavandario-cenario&orientation=landscape'
    },
    {
      id: 'girassol',
      title: 'Campo de Girassol',
      description: 'Girassóis dourados que seguem o sol criam um cenário vibrante e alegre. A energia positiva e os tons amarelos radiantes proporcionam fotos cheias de vida e felicidade, simbolizando crescimento e prosperidade.',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20sunflower%20field%20with%20tall%20golden%20sunflowers%20facing%20the%20sun%2C%20couple%20embracing%20among%20bright%20yellow%20flowers%2C%20warm%20golden%20lighting%2C%20joyful%20atmosphere%2C%20rustic%20farm%20setting%2C%20professional%20photography&width=800&height=600&seq=girassol-cenario&orientation=landscape'
    },
    {
      id: 'campo-branco',
      title: 'Campo Branco',
      description: 'Um cenário minimalista e elegante com flores brancas que se estendem suavemente pela paisagem. A pureza e simplicidade do ambiente criam fotos atemporais, transmitindo paz e sofisticação.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20white%20flower%20field%20with%20pure%20white%20blooms%20covering%20gentle%20rolling%20hills%2C%20minimalist%20landscape%2C%20soft%20natural%20lighting%2C%20serene%20atmosphere%2C%20couple%20in%20white%20clothing%2C%20timeless%20photography%20style&width=800&height=600&seq=campo-branco-cenario&orientation=landscape'
    },
    {
      id: 'pergolado',
      title: 'Pergolado',
      description: 'Uma estrutura charmosa coberta por plantas trepadeiras e flores coloridas. O pergolado oferece sombra natural e um ambiente íntimo, criando um cenário romântico com texturas naturais e jogos de luz únicos.',
      image: 'https://readdy.ai/api/search-image?query=Charming%20wooden%20pergola%20covered%20with%20climbing%20vines%20and%20colorful%20flowers%2C%20romantic%20intimate%20setting%2C%20natural%20shade%2C%20couple%20sitting%20beneath%20flowering%20archway%2C%20rustic%20garden%20atmosphere%2C%20soft%20filtered%20lighting&width=800&height=600&seq=pergolado-cenario&orientation=landscape'
    },
    {
      id: 'balanco-gigante',
      title: 'Balanço Gigante',
      description: 'Um balanço rústico suspenso entre árvores majestosas, proporcionando diversão e espontaneidade. Este cenário único permite fotos dinâmicas e alegres, capturando momentos de pura felicidade e descontração.',
      image: 'https://readdy.ai/api/search-image?query=Large%20rustic%20wooden%20swing%20hanging%20from%20majestic%20oak%20trees%2C%20couple%20playing%20and%20laughing%20on%20swing%2C%20dynamic%20movement%2C%20joyful%20spontaneous%20moments%2C%20natural%20forest%20setting%2C%20golden%20hour%20photography&width=800&height=600&seq=balanco-cenario&orientation=landscape'
    },
    {
      id: 'trilho-trem',
      title: 'Trilho de Trem',
      description: 'Trilhos antigos que se perdem no horizonte, criando uma perspectiva infinita e nostálgica. Este cenário vintage oferece linhas de fuga perfeitas e uma atmosfera cinematográfica única para fotos marcantes.',
      image: 'https://readdy.ai/api/search-image?query=Vintage%20railway%20tracks%20stretching%20into%20distance%20with%20infinite%20perspective%2C%20couple%20walking%20along%20old%20train%20rails%2C%20nostalgic%20atmosphere%2C%20cinematic%20lighting%2C%20rustic%20countryside%2C%20dramatic%20composition&width=800&height=600&seq=trilho-cenario&orientation=landscape'
    },
    {
      id: 'estudio',
      title: 'Estúdio',
      description: 'Um ambiente controlado e profissional para fotos mais elaboradas. Com iluminação técnica e fundos neutros, o estúdio permite criar imagens sofisticadas e atemporais, focando na expressão e elegância.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20photography%20studio%20with%20controlled%20lighting%20setup%2C%20elegant%20neutral%20backgrounds%2C%20sophisticated%20portrait%20session%2C%20clean%20minimalist%20environment%2C%20professional%20equipment%2C%20artistic%20lighting&width=800&height=600&seq=estudio-cenario&orientation=landscape'
    },
    {
      id: 'telefone-londres',
      title: 'Telefone de Londres',
      description: 'Uma icônica cabine telefônica vermelha que traz charme britânico e nostalgia. Este elemento vintage adiciona cor vibrante e personalidade às fotos, criando um contraste interessante com a natureza ao redor.',
      image: 'https://readdy.ai/api/search-image?query=Classic%20red%20British%20telephone%20booth%20in%20countryside%20setting%2C%20vintage%20charm%2C%20couple%20posing%20near%20iconic%20red%20phone%20box%2C%20nostalgic%20atmosphere%2C%20vibrant%20red%20color%20contrast%2C%20rustic%20background&width=800&height=600&seq=telefone-cenario&orientation=landscape'
    },
    {
      id: 'cavalos',
      title: 'Cavalos',
      description: 'Majestosos cavalos que adicionam elegância e nobreza às fotografias. A presença destes animais magníficos cria um cenário único e sofisticado, proporcionando fotos com uma atmosfera épica e romântica.',
      image: 'https://readdy.ai/api/search-image?query=Majestic%20horses%20in%20pastoral%20setting%20with%20couple%2C%20elegant%20equestrian%20photography%2C%20noble%20animals%20in%20natural%20environment%2C%20romantic%20countryside%20atmosphere%2C%20golden%20hour%20lighting%2C%20sophisticated%20composition&width=800&height=600&seq=cavalos-cenario&orientation=landscape'
    },
    {
      id: 'gazebo',
      title: 'Gazebo',
      description: 'Uma estrutura elegante e romântica que oferece um ponto focal perfeito para as fotos. O gazebo proporciona um ambiente íntimo e sofisticado, ideal para momentos especiais e poses mais formais.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20white%20gazebo%20in%20garden%20setting%2C%20romantic%20structure%20with%20decorative%20details%2C%20couple%20in%20formal%20poses%2C%20intimate%20atmosphere%2C%20beautiful%20landscaping%20around%2C%20soft%20natural%20lighting&width=800&height=600&seq=gazebo-cenario&orientation=landscape'
    },
    {
      id: 'galpao-rustico',
      title: 'Galpão Rústico',
      description: 'Um galpão de madeira envelhecida que respira autenticidade e charme rural. As texturas naturais e a atmosfera acolhedora criam um cenário perfeito para fotos com personalidade e calor humano.',
      image: 'https://readdy.ai/api/search-image?query=Rustic%20wooden%20barn%20with%20weathered%20wood%20textures%2C%20authentic%20rural%20charm%2C%20couple%20in%20casual%20poses%2C%20warm%20cozy%20atmosphere%2C%20natural%20materials%2C%20countryside%20setting%2C%20golden%20hour%20lighting&width=800&height=600&seq=galpao-cenario&orientation=landscape'
    },
    {
      id: 'lago-barco',
      title: 'Lago com Barco',
      description: 'Um lago sereno com um barco de madeira que flutua suavemente sobre as águas cristalinas. Os reflexos únicos e a tranquilidade do ambiente criam fotos poéticas e contemplativas.',
      image: 'https://readdy.ai/api/search-image?query=Serene%20lake%20with%20wooden%20boat%20floating%20on%20crystal%20clear%20water%2C%20peaceful%20reflections%2C%20couple%20by%20the%20water%20edge%2C%20tranquil%20atmosphere%2C%20natural%20beauty%2C%20soft%20lighting%2C%20contemplative%20mood&width=800&height=600&seq=lago-cenario&orientation=landscape'
    },
    {
      id: 'balanca-flores',
      title: 'Balança de Flores',
      description: 'Uma delicada balança vintage decorada com flores coloridas, simbolizando equilíbrio e harmonia. Este cenário único e artístico proporciona fotos criativas e cheias de significado.',
      image: 'https://readdy.ai/api/search-image?query=Vintage%20decorative%20scale%20adorned%20with%20colorful%20flowers%2C%20artistic%20balance%20symbol%2C%20delicate%20floral%20arrangements%2C%20creative%20photography%20prop%2C%20romantic%20garden%20setting%2C%20soft%20natural%20lighting&width=800&height=600&seq=balanca-cenario&orientation=landscape'
    },
    {
      id: 'bicicleta',
      title: 'Bicicleta',
      description: 'Uma bicicleta vintage que evoca nostalgia e movimento. Este elemento charmoso adiciona dinamismo às fotos e cria uma atmosfera descontraída e romântica, perfeita para casais jovens.',
      image: 'https://readdy.ai/api/search-image?query=Vintage%20bicycle%20with%20flower%20basket%20in%20countryside%20setting%2C%20nostalgic%20charm%2C%20couple%20with%20retro%20bike%2C%20romantic%20movement%2C%20casual%20atmosphere%2C%20rustic%20background%2C%20golden%20hour%20photography&width=800&height=600&seq=bicicleta-cenario&orientation=landscape'
    },
    {
      id: 'arcos-flores',
      title: 'Arcos de Flores',
      description: 'Portais mágicos cobertos por flores coloridas que criam um cenário de conto de fadas. Os arcos floridos proporcionam um enquadramento natural perfeito e uma atmosfera encantada para fotos memoráveis.',
      image: 'https://readdy.ai/api/search-image?query=Magical%20flower%20arches%20covered%20with%20colorful%20blooms%20creating%20natural%20portal%2C%20fairy%20tale%20atmosphere%2C%20couple%20walking%20through%20floral%20archway%2C%20enchanted%20garden%20setting%2C%20dreamy%20lighting%2C%20romantic%20composition&width=800&height=600&seq=arcos-cenario&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
            Cenários para Ensaio Fotográfico
          </h1>
          <p className="font-poppins font-light text-lg text-matte-black/70 max-w-3xl mx-auto">
            Descubra cenários únicos e encantadores que farão suas fotos serem inesquecíveis. 
            Cada ambiente foi cuidadosamente pensado para criar memórias visuais especiais.
          </p>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="font-sacramento text-4xl text-moss-green mb-6">
                    {scenario.title}
                  </h2>
                  <p className="font-poppins font-light text-base text-matte-black/80 mb-8 leading-relaxed">
                    {scenario.description}
                  </p>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={scenario.image}
                      alt={scenario.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    
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
            Pronto para criar memórias visuais únicas?
          </h2>
          <p className="font-poppins font-light text-lg opacity-90 mb-8">
            Agende seu ensaio fotográfico e descubra como nossos cenários únicos 
            podem realçar a beleza dos seus momentos mais especiais.
          </p>
          <div className="flex justify-center">
                    <a
                      href="https://wa.me/5541996268287"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="lg" className="whitespace-nowrap">
                        <i className="ri-whatsapp-line mr-2"></i>
                        Agendar Ensaio
                      </Button>
                    </a>
                  </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
