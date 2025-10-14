
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-matte-black text-light-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-leaf-line text-xl text-soft-gold"></i>
              </div>
              <span className="font-sacramento text-2xl text-soft-gold">Chácara Sentinela</span>
            </div>
            <p className="font-poppins font-light text-sm text-light-beige/80 mb-6 max-w-md">
              Onde a natureza encontra o amor. Um cenário perfeito para casamentos, ensaios e celebrações únicas em meio à natureza exuberante.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/chacarasentinela?igsh=N3Q2dHViM2V2Z2Zm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-moss-green rounded-full hover:bg-soft-gold transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-light-beige"></i>
              </a>
              <a
                  href="https://www.facebook.com/share/1JJj1gWRDr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-moss-green rounded-full hover:bg-soft-gold transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-facebook-fill text-light-beige"></i>
                </a>
              <a
                href="https://wa.me/554196268287"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-moss-green rounded-full hover:bg-soft-gold transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-line text-light-beige"></i>
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-poppins font-medium text-soft-gold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">Início</Link></li>
              <li><Link to="/espaco" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">O Espaço</Link></li>
              <li><Link to="/eventos" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">Eventos</Link></li>
              <li><Link to="/ensaio" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">Ensaio Fotográfico</Link></li>
              <li><Link to="/galeria" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">Galeria</Link></li>
              <li><Link to="/depoimentos" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">Depoimentos</Link></li>
              <li><Link to="/contato" className="font-poppins font-light text-sm text-light-beige/80 hover:text-soft-gold transition-colors duration-300">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-poppins font-medium text-soft-gold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-soft-gold mt-1"></i>
                <a
                  href="https://maps.app.goo.gl/e7pHRKRK1MFbSWbYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-light text-sm text-light-beige/80 hover:text-light-beige transition-colors duration-300 leading-relaxed"
                >
                  Chácara Sentinela<br />
                  R. Aleixo Nodari, nº - Imbuial, Colombo - PR<br />
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-soft-gold"></i>
                <a
                  href="https://wa.me/5541996268287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-light text-sm text-light-beige/80 hover:text-light-beige transition-colors duration-300"
                >
                  (41) 99626-8287
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-soft-gold"></i>
                <p className="font-poppins font-light text-sm text-light-beige/80">Seg - Dom: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-light-beige/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins font-light text-sm text-light-beige/60">
            © 2025 Chácara Sentinela do Imbuial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
