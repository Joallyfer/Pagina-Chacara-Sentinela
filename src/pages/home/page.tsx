import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

/** Carrossel responsivo para PRINTS (1/2/3 por view) com loop e setas */
function EmblaPrintsCarousel({
  images,
  className = '',
  ariaLabel = 'Carrossel de depoimentos (prints)',
}: {
  images: string[];
  className?: string;
  ariaLabel?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1, // mobile
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },      // tablet
      '(min-width: 1024px)': { slidesToScroll: 3 },     // desktop
    },
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className={`relative ${className}`} aria-label={ariaLabel}>
      {/* viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* container */}
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="
                min-w-0
                flex-[0_0_100%]        /* 1 por view (mobile) */
                md:flex-[0_0_50%]      /* 2 por view (tablet) */
                lg:flex-[0_0_33.333%]  /* 3 por view (desktop) */
                px-2
              "
            >
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer h-full">
                <img
                  src={src}
                  alt={`Depoimento ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* setas (desktop/tablet) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md items-center justify-center"
            aria-label="Anterior"
          >
            <i className="ri-arrow-left-s-line text-matte-black text-xl" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md items-center justify-center"
            aria-label="Próximo"
          >
            <i className="ri-arrow-right-s-line text-matte-black text-xl" />
          </button>
        </>
      )}

      {/* bullets */}
      {images.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${i === selectedIndex ? 'bg-moss-green' : 'bg-moss-green/40 hover:bg-moss-green/60'}`}
              aria-label={`Ir para slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const espacos = [
    { title: 'Cerimônia no Lago', description: 'Capela à beira do lago com vista encantadora', image: '../img/drone 2-2.jpg', link: '/espaco' },
    { title: 'Salão de Festas', description: 'Ambiente climatizado para até 160 convidados', image: '../img/salaodefestas.jpg', link: '/espaco' },
    { title: 'Ensaio Fotográfico', description: 'Cenários únicos em meio à natureza', image: '../img/ensaiolavanda1.jpeg', link: '/ensaio' },
  ];

  const galeriaPreview = [
    '../img/Pré-wedding-1.jpg',
    '../img/1262.jpg',
    '../img/16.56.19.jpeg',
    '../img/1199.jpg',
    'https://readdy.ai/api/search-image?query=Outdoor%20wedding%20cocktail%20hour%20by%20the%20lake%2C%20guests%20mingling%2C%20natural%20landscape%2C%20golden%20hour%20lighting%2C%20rustic%20chic%20decoration%2C%20peaceful%20atmosphere&width=300&height=200&seq=galeria-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Wedding%20bouquet%20toss%20moment%20with%20bride%20and%20bridesmaids%2C%20joyful%20celebration%2C%20natural%20outdoor%20setting%2C%20rustic%20wedding%20venue%2C%20happy%20atmosphere&width=300&height=200&seq=galeria-6&orientation=landscape',
  ];

  // Você pode adicionar mais prints aqui conforme quiser.
  const printsDepoimentos = [
    '../img/depoimentos/depoimento1.png',
    '../img/depoimentos/depoimento2.png',
    '../img/depoimentos/depoimento3.png',
    '../img/depoimentos/depoimento4.png',
    '../img/depoimentos/depoimento5.png',
    '../img/depoimentos/depoimento6.png',
     '../img/depoimentos/depoimento7.png',
    '../img/depoimentos/depoimento10.png',
    '../img/depoimentos/depoimento 11.png',

  ];

  const estruturas = [
    { icon: 'ri-building-2-line', title: 'Capela à beira do lago', description: 'Cerimônia com vista única' },
    { icon: 'ri-home-heart-line', title: 'Salão para 160 convidados', description: 'Ambiente climatizado e acolhedor' },
    { icon: 'ri-door-line', title: 'Casa da Noiva', description: 'Espaço exclusivo para se preparar' },
    { icon: 'ri-restaurant-line', title: 'Cozinha equipada e bar', description: 'Estrutura completa para eventos' },
    { icon: 'ri-car-line', title: 'Área para gerador', description: 'E estacionamento amplo' },
  ];

  return (
    <div className="min-h-screen bg-light-beige">
      <Header />
      
      {/* 1. Capa Cinematográfica */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
            <source src="../videos/Sentinela 2.webm" type="video/mp4" />
            Seu navegador não suporta vídeos em HTML5.
          </video>
          <div className="absolute inset-0 bg-soft-gold/20"></div>
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
              <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-6">Mais do que um espaço, um sonho em família</h2>
              <p className="font-poppins font-light text-lg text-matte-black/80 mb-6">
                A Chácara Sentinela do Imbuial nasceu do desejo de criar um refúgio onde a natureza, o amor e as celebrações se unem em harmonia.
              </p>
              <p className="font-poppins font-light text-base text-matte-black/70 mb-6">
                Aqui, cada detalhe foi pensado para transformar momentos em lembranças eternas.
              </p>
              <p className="font-poppins font-light text-base text-matte-black/70 mb-8">
                Somos um espaço familiar, acolhedor e apaixonado por ver histórias se tornarem inesquecíveis.
              </p>
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
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">Um lugar, muitos cenários encantadores</h2>
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
              <Button variant="primary" size="lg">Ver Todos os Espaços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Galeria de Sonhos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">Momentos que o tempo não apaga</h2>
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
              <Button variant="primary" size="lg">Ver Galeria Completa</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Depoimentos (PRINTS em carrossel 3 por vez) */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">Palavras que aquecem o coração</h2>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-2xl mx-auto">
              Cada sorriso e cada mensagem nos lembram o quanto é especial fazer parte do sonho de tantas pessoas.
            </p>
          </div>

          <EmblaPrintsCarousel
            images={printsDepoimentos}
            className="mb-12"
          />

          <div className="text-center">
            <Link to="/depoimentos">
              <Button variant="primary" size="lg">Ver Mais Depoimentos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Estrutura e Experiências */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sacramento text-4xl md:text-5xl text-moss-green mb-4">Tudo o que o seu evento precisa</h2>
            <p className="font-poppins font-light text-lg text-matte-black/70 max-w-2xl mx-auto">Estrutura completa, conforto e natureza viva</p>
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
              <Button variant="primary" size="lg">Conhecer Estrutura Completa</Button>
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
          <h2 className="font-sacramento text-4xl md:text-5xl mb-6">Viva o seu grande dia aqui</h2>
          <p className="font-poppins font-light text-lg mb-8 opacity-90">
            A Chácara Sentinela é o cenário perfeito para o amor florescer.
            Venha conhecer, sentir e se encantar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botão vai para o WhatsApp */}
          <a
            href="https://wa.me/5541995082104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg">
              <i className="ri-whatsapp-line mr-2" />
              Agendar Visita Agora
            </Button>
          </a>

          {/* (Opcional) Segundo botão para a página de contato */}
          {/* <Link to="/contato">
            <Button variant="outline" size="lg">
              Falar por Formulário
            </Button>
          </Link> */}
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
