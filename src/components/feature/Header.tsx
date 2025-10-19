import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'O Espaço', href: '/espaco' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Ensaio Fotográfico', href: '/ensaio' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Contato', href: '/contato' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-moss-green/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* ESQUERDA: logo + menu */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center group">
              <img
                src="/logo/logo sentinela.jpg"
                alt="Logo Chácara Sentinela"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Navegação Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-poppins font-light text-sm transition-colors duration-300
                    ${isActive(item.href) ? 'text-white font-medium' : 'text-white/90'}
                    hover:text-soft-gold`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* DIREITA: CTA (desktop) + botão mobile */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5541996268287"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block bg-[#25D366] text-white px-6 py-2 rounded-lg font-poppins font-medium text-sm transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              Falar no WhatsApp
            </a>

            {/* Botão Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-white`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-poppins font-light text-sm transition-colors duration-300
                    ${isActive(item.href) ? 'text-white font-medium' : 'text-white/90'}
                    hover:text-soft-gold`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5541996268287"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-2 rounded-lg font-poppins font-medium text-sm transition-all duration-300 hover:bg-[#20BD5A] self-start whitespace-nowrap cursor-pointer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
