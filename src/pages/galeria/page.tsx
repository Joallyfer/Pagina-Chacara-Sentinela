
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState('casamentos');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>('');

  // Dados dos casamentos
  const casamentos = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=romantic%20wedding%20ceremony%20by%20the%20lake%20at%20sunset%20with%20bride%20and%20groom%20exchanging%20vows%20on%20wooden%20deck%20over%20water%2C%20rustic%20chic%20style%2C%20golden%20hour%20lighting%2C%20natural%20outdoor%20setting%2C%20emotional%20moment%2C%20cinematic%20photography&width=400&height=600&seq=wedding1&orientation=portrait',
      caption: 'Ana & Carlos - 15 de Maio, 2024'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=elegant%20wedding%20reception%20in%20rustic%20venue%20with%20fairy%20lights%2C%20decorated%20tables%20with%20white%20flowers%20and%20greenery%2C%20guests%20celebrating%2C%20warm%20ambient%20lighting%2C%20countryside%20wedding%20party%20atmosphere&width=600&height=400&seq=wedding2&orientation=landscape',
      caption: 'Marina & João - 22 de Abril, 2024'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=bride%20walking%20down%20the%20aisle%20in%20outdoor%20wedding%20ceremony%2C%20lavender%20field%20background%2C%20rustic%20wooden%20chairs%2C%20emotional%20moment%2C%20natural%20lighting%2C%20romantic%20countryside%20wedding&width=400&height=600&seq=wedding3&orientation=portrait',
      caption: 'Fernanda & Pedro - 8 de Junho, 2024'
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=wedding%20first%20dance%20in%20rustic%20venue%20with%20string%20lights%2C%20romantic%20couple%20dancing%2C%20guests%20watching%2C%20warm%20golden%20lighting%2C%20intimate%20celebration%20atmosphere%2C%20countryside%20wedding%20reception&width=500&height=400&seq=wedding4&orientation=landscape',
      caption: 'Juliana & Rafael - 30 de Março, 2024'
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=outdoor%20wedding%20ceremony%20setup%20with%20white%20chairs%2C%20floral%20arch%2C%20lake%20view%20background%2C%20rustic%20chic%20decoration%2C%20natural%20lighting%2C%20romantic%20countryside%20wedding%20venue%20preparation&width=600&height=400&seq=wedding5&orientation=landscape',
      caption: 'Camila & Lucas - 12 de Julho, 2024'
    },
    {
      id: 6,
      image: 'https://readdy.ai/api/search-image?query=wedding%20cake%20cutting%20moment%20with%20bride%20and%20groom%2C%20rustic%20venue%20background%2C%20elegant%20white%20cake%20with%20flowers%2C%20celebration%20atmosphere%2C%20warm%20lighting%2C%20intimate%20wedding%20reception&width=400&height=500&seq=wedding6&orientation=portrait',
      caption: 'Beatriz & Thiago - 18 de Maio, 2024'
    }
  ];

  // Dados dos ensaios
  const ensaios = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=romantic%20couple%20photoshoot%20in%20lavender%20field%20at%20golden%20hour%2C%20pre-wedding%20session%2C%20soft%20natural%20lighting%2C%20countryside%20setting%2C%20intimate%20poses%2C%20rustic%20chic%20style%20photography&width=500&height=600&seq=ensaio1&orientation=portrait',
      caption: 'Ensaio Pré-Wedding - Lavandário',
      tags: ['Pré-Wedding', 'Romântico']
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=couple%20portrait%20session%20by%20the%20lake%20at%20sunset%2C%20romantic%20poses%2C%20natural%20lighting%2C%20water%20reflection%2C%20countryside%20engagement%20photoshoot%2C%20emotional%20connection%2C%20rustic%20setting&width=600&height=400&seq=ensaio2&orientation=landscape',
      caption: 'Ensaio de Casal - Lago',
      tags: ['Ensaio de Casal', 'Romântico']
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=individual%20portrait%20session%20with%20horses%20in%20countryside%20setting%2C%20natural%20lighting%2C%20rustic%20farm%20atmosphere%2C%20artistic%20photography%2C%20connection%20with%20nature%2C%20golden%20hour%20lighting&width=400&height=600&seq=ensaio3&orientation=portrait',
      caption: 'Ensaio Individual - Cavalos',
      tags: ['Individual']
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=romantic%20couple%20photoshoot%20in%20sunflower%20field%2C%20pre-wedding%20session%2C%20bright%20natural%20lighting%2C%20countryside%20setting%2C%20joyful%20poses%2C%20rustic%20chic%20style%20photography&width=600&height=500&seq=ensaio4&orientation=landscape',
      caption: 'Ensaio Pré-Wedding - Girassóis',
      tags: ['Pré-Wedding', 'Romântico']
    }
  ];

  // Dados dos vídeos
  const videos = [
    {
      id: 1,
      thumbnail: 'https://readdy.ai/api/search-image?query=wedding%20video%20thumbnail%20showing%20bride%20and%20groom%20ceremony%20moment%20by%20the%20lake%2C%20cinematic%20style%2C%20romantic%20lighting%2C%20countryside%20wedding%20videography%2C%20emotional%20scene&width=600&height=400&seq=video1&orientation=landscape',
      title: 'Casamento Ana & Carlos',
      date: '15 de Maio, 2024',
      videoUrl: '#'
    },
    {
      id: 2,
      thumbnail: 'https://readdy.ai/api/search-image?query=wedding%20reception%20video%20thumbnail%20with%20dancing%20guests%2C%20rustic%20venue%2C%20fairy%20lights%2C%20celebration%20atmosphere%2C%20countryside%20wedding%20party%20videography&width=600&height=400&seq=video2&orientation=landscape',
      title: 'Festa Marina & João',
      date: '22 de Abril, 2024',
      videoUrl: '#'
    }
  ];

  const openLightbox = (image: string, caption: string) => {
    setLightboxImage(image);
    setLightboxCaption(caption);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxCaption('');
  };

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-b from-moss-green/20 to-light-beige overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=beautiful%20wedding%20gallery%20showcase%20with%20multiple%20photo%20frames%20displaying%20romantic%20countryside%20wedding%20moments%2C%20rustic%20chic%20style%2C%20soft%20lighting%2C%20elegant%20presentation%2C%20artistic%20photography%20collection&width=1200&height=800&seq=galleryhero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-sacramento text-6xl md:text-7xl mb-6 leading-tight">
              Momentos eternizados
            </h1>
            <p className="font-poppins font-light text-xl md:text-2xl mb-8 leading-relaxed">
              Cada imagem conta uma história de amor, cada vídeo revive uma emoção. 
              Descubra a magia dos casamentos e ensaios realizados na Chácara Sentinela.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="flex bg-light-beige rounded-full p-2">
              <button
                onClick={() => setSelectedCategory('casamentos')}
                className={`px-8 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                  selectedCategory === 'casamentos'
                    ? 'bg-soft-gold text-white shadow-lg'
                    : 'text-moss-green hover:text-soft-gold'
                }`}
              >
                Casamentos
              </button>
              <button
                onClick={() => setSelectedCategory('ensaios')}
                className={`px-8 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                  selectedCategory === 'ensaios'
                    ? 'bg-soft-gold text-white shadow-lg'
                    : 'text-moss-green hover:text-soft-gold'
                }`}
              >
                Ensaios
              </button>
              <button
                onClick={() => setSelectedCategory('videos')}
                className={`px-8 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                  selectedCategory === 'videos'
                    ? 'bg-soft-gold text-white shadow-lg'
                    : 'text-moss-green hover:text-soft-gold'
                }`}
              >
                Vídeos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Casamentos */}
      {selectedCategory === 'casamentos' && (
        <section className="py-16 bg-light-beige">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
                Casamentos que encantaram nossos jardins
              </h2>
              <p className="font-poppins font-light text-lg md:text-xl text-moss-green/80 max-w-3xl mx-auto leading-relaxed">
                Celebrações cheias de emoção, natureza e luz.<br />
                Veja como cada casal viveu o sonho de casar à beira do lago e celebrar no salão da Chácara Sentinela.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {casamentos.map((casamento) => (
                <div 
                  key={casamento.id}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => openLightbox(casamento.image, casamento.caption)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                    <img
                      src={casamento.image}
                      alt={casamento.caption}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moss-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="font-poppins font-medium text-white text-sm">
                          {casamento.caption}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="ri-eye-line text-white text-lg"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galeria de Ensaios */}
      {selectedCategory === 'ensaios' && (
        <section className="py-16 bg-light-beige">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
                Encontros com a natureza
              </h2>
              <p className="font-poppins font-light text-lg md:text-xl text-moss-green/80 max-w-3xl mx-auto leading-relaxed">
                O campo de lavanda, o lago, os cavalos e o pôr do sol tornam cada ensaio único.<br />
                Aqui, cada clique é poesia — uma lembrança viva da conexão entre o amor e a natureza.
              </p>
            </div>

            {/* Grid Artístico */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ensaios.map((ensaio) => (
                <div 
                  key={ensaio.id}
                  className="cursor-pointer group"
                  onClick={() => openLightbox(ensaio.image, ensaio.caption)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    <img
                      src={ensaio.image}
                      alt={ensaio.caption}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moss-green/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-sacramento text-2xl text-white mb-2">
                          {ensaio.caption}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {ensaio.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-poppins"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galeria de Vídeos */}
      {selectedCategory === 'videos' && (
        <section className="py-16 bg-light-beige">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
                Emoções que se movem
              </h2>
              <p className="font-poppins font-light text-lg md:text-xl text-moss-green/80 max-w-3xl mx-auto leading-relaxed">
                Alguns momentos são tão intensos que merecem ser revividos.<br />
                Assista aos vídeos de casamentos realizados na Chácara Sentinela e sinta cada emoção como se estivesse lá.
              </p>
            </div>

            {/* Grid de Vídeos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-moss-green/40 group-hover:bg-moss-green/60 transition-colors duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-play-fill text-moss-green text-2xl ml-1"></i>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-sacramento text-2xl text-white mb-1">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-white/80 text-sm">
                        {video.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt={lightboxCaption}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            {lightboxCaption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-poppins text-white bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  {lightboxCaption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chamada Final */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=romantic%20countryside%20wedding%20venue%20at%20golden%20hour%20with%20lake%20view%2C%20rustic%20chic%20setting%2C%20soft%20warm%20lighting%2C%20dreamy%20atmosphere%2C%20perfect%20for%20wedding%20photography%2C%20natural%20beauty&width=1200&height=600&seq=finalcta&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green/80 to-moss-green/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="font-sacramento text-5xl md:text-6xl text-white mb-6">
            Agora imagine o seu dia aqui
          </h2>
          <p className="font-poppins font-light text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cada imagem que você viu foi vivida com amor e alegria — o próximo grande momento pode ser o seu.
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
};

export default Galeria;
