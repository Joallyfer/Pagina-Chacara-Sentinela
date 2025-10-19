import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';


/** Carrossel com loop infinito (Embla) */
function EmblaCarousel({
  images,
  className = '',
  ariaLabel = 'Carrossel de imagens'
}: {
  images: string[];
  className?: string;
  ariaLabel?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,          // 👈 loop infinito
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <div className={`relative ${className}`} aria-label={ariaLabel}>
      {/* Viewport */}
      <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
        {/* Container */}
        <div className="flex h-80">
          {images.map((src, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] relative">
              <img
                src={src}
                alt={`Imagem ${i + 1}`}
                className="w-full h-full object-cover select-none"
                draggable={false}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Setas (desktop) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                       bg-white/90 hover:bg-white shadow-md items-center justify-center"
            aria-label="Imagem anterior"
          >
            <i className="ri-arrow-left-s-line text-matte-black text-xl" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                       bg-white/90 hover:bg-white shadow-md items-center justify-center"
            aria-label="Próxima imagem"
          >
            <i className="ri-arrow-right-s-line text-matte-black text-xl" />
          </button>
        </>
      )}

      {/* Bullets */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition
                ${i === selectedIndex ? 'bg-white' : 'bg-white/60 hover:bg-white/80'}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Espaco() {
  const spaces = [
    {
      id: 'salao',
      title: 'Salão de Festas',
      subtitle: 'Elegância e conforto para sua celebração',
      description:
        'Amplo salão climatizado com capacidade para até 200 convidados, pista de dança, sistema de som profissional e iluminação especial. Cozinha completa e área de apoio para buffet.',
      features: [
        'Capacidade para 200 convidados',
        'Climatização completa',
        'Pista de dança ampla',
        'Sistema de som profissional',
        'Iluminação especial',
        'Cozinha profissional equipada'
      ],
      images: [
        '/img/salaodefestas.jpg',
        '/img/salaodefestas-2.jpg',
        '/img/salaodefestas-3.jpg'
      ]
    },
    {
      id: 'lago',
      title: 'Cerimônia no Lago',
      subtitle: 'O altar dos seus sonhos à beira da água',
      description:
        'Capela encantadora e altar ao ar livre com vista para o lago cristalino. Passarela natural sobre a água e cenário deslumbrante para cerimônias inesquecíveis.',
      features: [
        'Capela com vista para o lago',
        'Altar ao ar livre',
        'Passarela sobre a água',
        'Bancos rústicos para convidados',
        'Cenário natural deslumbrante',
        'Fotografia única'
      ],
      images: [
        '/img/cerimonialago.jpeg',
        '/img/cerimonialago-2.jpeg',
        '/img/cerimonialago-3.jpeg'
      ]
    },
    {
      id: 'fotograficos',
      title: 'Espaços Fotográficos',
      subtitle: 'Cenários únicos para registros eternos',
      description:
        'Campo de lavanda perfumado, cavalos majestosos, jardins floridos e bosque encantado. Múltiplos cenários para ensaios e fotografias únicas em cada estação.',
      features: [
        'Campo de lavanda perfumado',
        'Cavalos para fotografias',
        'Jardins floridos',
        'Bosque encantado',
        'Múltiplos cenários',
        'Beleza em todas as estações'
      ],
      images: [
        '/img/ensaiolavanda1.jpeg',
        '/img/ensaiolavanda2.jpeg',
        '/img/ensaiolavanda3.jpeg'
      ]
    },
    {
      id: 'casa-noiva',
      title: 'Casa da Noiva',
      subtitle: 'Espaço exclusivo para se preparar com tranquilidade',
      description:
        'A Casa da Noiva é um espaço reservado e especial dentro da chácara — feito para que a noiva e suas madrinhas possam se preparar com conforto, tranquilidade e privacidade antes da cerimônia.',
      features: [
        'Ambiente privativo e exclusivo',
        'Banheiro privativo completo',
        'Espelhos amplos e iluminação suave',
        'Ar-condicionado para conforto',
        'Móveis elegantes e funcionais',
        'Cenário perfeito para making of'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Elegant%20bridal%20preparation%20room%20with%20large%20mirrors%2C%20soft%20warm%20lighting%2C%20comfortable%20seating%2C%20rustic%20chic%20decoration%2C%20private%20bathroom%2C%20air%20conditioning%2C%20perfect%20for%20bride%20getting%20ready%2C%20romantic%20atmosphere%2C%20wooden%20details%2C%20beautiful%20natural%20light&width=800&height=600&seq=casa-noiva&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Interior%20view%20of%20bridal%20preparation%20suite%2C%20elegant%20mirrors%2C%20soft%20lighting%2C%20comfortable%20furniture%2C%20rustic%20chic%20style%2C%20perfect%20for%20getting%20ready%20photos%20and%20videos&width=800&height=600&seq=casa-noiva-2&orientation=landscape'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />

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
              <div
                key={space.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {space.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                        <span className="font-poppins font-light text-sm text-matte-black/70">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* (REMOVIDOS) Botões locais */}
                </div>

                {/* Images -> Carrossel com loop */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 relative' : 'relative'}>
                  <EmblaCarousel images={space.images} />

                  {/* Elemento decorativo */}
                  <div
                    className={`absolute w-24 h-24 bg-soft-gold/20 rounded-2xl -z-10
                      ${index % 2 === 0 ? '-bottom-6 -right-6' : '-top-6 -left-6'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (único botão de ação) */}
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
