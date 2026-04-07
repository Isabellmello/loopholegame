import { GlitchText } from './GlitchText';

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <GlitchText 
            text="LOOPHOLE" 
            className="text-xl font-bold tracking-wider text-white"
          />
          
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 LOOPHOLE. Todos os direitos reservados.
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            A realidade é uma ilusão.
          </p>
          
          <div className="flex gap-4 text-sm text-gray-400">
            <a 
              href="#" 
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Privacidade
            </a>
            <a 
              href="#" 
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
