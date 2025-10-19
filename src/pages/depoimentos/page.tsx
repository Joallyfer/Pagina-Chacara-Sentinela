import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/base/Button';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1, ...(options || {}) }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}

function PrintCard({
  src,
  caption,
  delay = 0,
  onClick,
}: {
  src: string;
  caption?: string;
  delay?: number;
  onClick?: () => void;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={[
        'break-inside-avoid cursor-pointer group',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        'transition-all duration-700 ease-out will-change-transform',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
        <img
          src={src}
          alt={caption || 'Comentário'}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {caption ? (
          <div className="p-4">
            <p className="font-poppins font-light text-sm text-moss-green/70 text-center">
              {caption}
            </p>
          </div>
        ) : null}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
            <i className="ri-eye-line text-moss-green text-sm"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const Depoimentos = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>('');

  // Depoimentos em destaque
  const depoimentosDestaque = [
    {
      id: 1,
      foto: 'https://readdy.ai/api/search-image?query=happy%20wedding%20couple%20embracing%20after%20ceremony%20by%20the%20lake%20at%20sunset%2C%20romantic%20countryside%20wedding%2C%20emotional%20moment%2C%20rustic%20chic%20style%2C%20golden%20hour%20lighting%2C%20natural%20outdoor%20setting&width=400&height=400&seq=couple1&orientation=squarish',
      frase: "Um lugar que ficará para sempre em nossos corações.",
      nome: "Ana & Carlos",
      data: "Maio 2024",
      texto: "A Chácara Sentinela superou todas as nossas expectativas. O lago, a natureza, a estrutura... tudo perfeito! Nossos convidados ainda falam sobre como foi mágico nosso casamento. Gratidão eterna por terem feito parte do nosso sonho."
    },
    {
      id: 2,
      foto: 'https://readdy.ai/api/search-image?query=bride%20and%20groom%20walking%20hand%20in%20hand%20through%20lavender%20field%20at%20golden%20hour%2C%20romantic%20countryside%20wedding%2C%20emotional%20connection%2C%20rustic%20chic%20style%2C%20natural%20lighting&width=400&height=400&seq=couple2&orientation=squarish',
      frase: "Cada detalhe foi pensado com carinho e amor.",
      nome: "Marina & João",
      data: "Abril 2024",
      texto: "Desde a primeira visita nos sentimos acolhidos. A equipe cuidou de cada detalhe com tanto carinho que pudemos apenas aproveitar nosso dia. O campo de lavanda foi o cenário perfeito para nossas fotos. Recomendamos de coração!"
    },
    {
      id: 3,
      foto: 'https://readdy.ai/api/search-image?query=wedding%20couple%20dancing%20at%20reception%20in%20rustic%20venue%20with%20fairy%20lights%2C%20celebration%20atmosphere%2C%20countryside%20wedding%20party%2C%20warm%20lighting%2C%20emotional%20moment&width=400&height=400&seq=couple3&orientation=squarish',
      frase: "Um sonho que se tornou realidade.",
      nome: "Fernanda & Pedro",
      data: "Junho 2024",
      texto: "Sempre sonhamos com um casamento na natureza e a Chácara Sentinela foi exatamente o que imaginávamos. O salão é lindo, a vista do lago é de tirar o fôlego e nossos convidados se sentiram em casa. Foi perfeito!"
    }
  ];

  // Prints de comentários (mantidos como você enviou)
  const printsComentarios = [
    { id: 1,  print: '../img/depoimentos/depoimento1.png'  },
    { id: 2,  print: '../img/depoimentos/depoimento2.png'  },
    { id: 3,  print: '../img/depoimentos/depoimento3.png'  },
    { id: 4,  print: '../img/depoimentos/depoimento4.png'  },
    { id: 5,  print: '../img/depoimentos/depoimento5.png'  },
    { id: 6,  print: '../img/depoimentos/depoimento6.png'  },
    { id: 7,  print: '../img/depoimentos/depoimento7.png'  },
    { id: 8,  print: '../img/depoimentos/depoimento8.png'  },
    { id: 9,  print: '../img/depoimentos/depoimento10.png' },
    { id: 10, print: '../img/depoimentos/depoimento 11.png' },
    { id: 11, print: '../img/depoimentos/depoimento9.png'  },
  ];

  // Vídeos de depoimentos
  const videosDepoimentos = [
    {
      id: 1,
      thumbnail: 'https://readdy.ai/api/search-image?query=video%20testimonial%20thumbnail%20with%20couple%20talking%20about%20their%20wedding%20experience%2C%20countryside%20wedding%20venue%20background%2C%20emotional%20interview%20setting&width=600&height=400&seq=video1&orientation=landscape',
      titulo: "Depoimento Ana & Carlos",
      descricao: "O casal conta como foi realizar o sonho do casamento na natureza",
      videoUrl: "#"
    },
    {
      id: 2,
      thumbnail: 'https://readdy.ai/api/search-image?query=bride%20testimonial%20video%20thumbnail%2C%20emotional%20interview%20about%20wedding%20day%20experience%2C%20rustic%20venue%20background%2C%20authentic%20customer%20feedback&width=600&height=400&seq=video2&orientation=landscape',
      titulo: "Marina fala sobre o grande dia",
      descricao: "A noiva compartilha os momentos mais emocionantes do casamento",
      videoUrl: "#"
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=emotional%20wedding%20couple%20embracing%20after%20ceremony%20by%20the%20lake%20at%20sunset%2C%20romantic%20countryside%20wedding%2C%20golden%20hour%20lighting%2C%20rustic%20chic%20venue%2C%20heartfelt%20moment%2C%20natural%20outdoor%20setting&width=1200&height=800&seq=testimonialshero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green/70 to-moss-green/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-sacramento text-6xl md:text-7xl mb-6 leading-tight">
              Histórias reais, momentos eternos
            </h1>
            <p className="font-poppins font-light text-xl md:text-2xl mb-8 leading-relaxed">
              Cada sorriso, cada palavra e cada lembrança nos inspiram todos os dias.<br />
              Conheça o que os casais que viveram esse sonho dizem sobre a experiência na Chácara Sentinela.
            </p>
          </div>
        </div>
      </section>

      {/* Mural de Comentários com animação on-scroll */}
      <section className="py-20 bg-light-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-5xl md:text-6xl text-moss-green mb-6">
              Palavras que nos enchem de alegria
            </h2>
            <p className="font-poppins font-light text-lg md:text-xl text-moss-green/80 max-w-3xl mx-auto leading-relaxed">
              Reunimos aqui os comentários e avaliações deixados por casais e convidados que viveram momentos únicos conosco.<br />
              Cada mensagem é um pedacinho da nossa história.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {printsComentarios.map((print, i) => (
              <PrintCard
                key={print.id}
                src={print.print}
                // legenda não foi fornecida nos dados — mantemos vazio para não alterar seus paths
                caption={''}
                delay={(i % 6) * 80}
                onClick={() => openLightbox(print.print, '')}
              />
            ))}
          </div>
        </div>
      </section>

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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=romantic%20countryside%20wedding%20venue%20at%20golden%20hour%20with%20lake%20view%20and%20lavender%20field%2C%20rustic%20chic%20setting%2C%20soft%20warm%20lighting%2C%20dreamy%20atmosphere%2C%20perfect%20for%20testimonials%2C%20natural%20beauty&width=1200&height=600&seq=testimonialscta&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-moss-green/80 to-moss-green/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="font-sacramento text-5xl md:text-6xl text-white mb-6">
            A próxima história pode ser a sua
          </h2>
          <p className="font-poppins font-light text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cada depoimento é uma lembrança viva.<br />
            Estamos prontos para fazer parte da sua história também.
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

export default Depoimentos;
