
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-beige/95 backdrop-blur-sm shadow-sm">
      <nav className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-leaf-line text-2xl text-moss-green"></i>
            </div>
            <span className="font-sacramento text-2xl text-moss-green">Chácara Sentinela</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-poppins font-light text-sm transition-colors duration-300 hover:text-moss-green ${
                  isActive(item.href) ? 'text-moss-green font-medium' : 'text-matte-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5541996268287"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-moss-green text-light-beige px-6 py-2 rounded-lg font-poppins font-medium text-sm transition-all duration-300 hover:bg-moss-green/90 hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-moss-green`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-moss-green/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-poppins font-light text-sm transition-colors duration-300 hover:text-moss-green ${
                    isActive(item.href) ? 'text-moss-green font-medium' : 'text-matte-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-moss-green text-light-beige px-6 py-2 rounded-lg font-poppins font-medium text-sm transition-all duration-300 hover:bg-moss-green/90 self-start whitespace-nowrap cursor-pointer"
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
