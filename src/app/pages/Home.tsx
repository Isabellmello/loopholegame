import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GlitchText } from '../components/GlitchText';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Eye, Search, Lock } from 'lucide-react';

export function Home() {
  return (
    <div className="relative">
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1727982815913-4b670a9c18c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbXlzdGVyaW91cyUyMGNpdHklMjBuaWdodCUyMGdsaXRjaHxlbnwxfHx8fDE3NzQzMjQ4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dark mysterious city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-96 sm:w-80 sm:h-[32rem] z-10"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735406460135-876b4f125376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlbGVzcyUyMHNpbGhvdWV0dGUlMjBzaGFkb3clMjBmaWd1cmV8ZW58MXx8fHwxNzc0MzI0ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Faceless character silhouette"
            className="w-full h-full object-contain opacity-80"
          />
        </motion.div>

        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <GlitchText
              text="LOOPHOLE"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 block"
              intensity="high"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto italic"
          >
            "Todos os dias são iguais... até que a realidade começa a falhar."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/about">
              <Button variant="primary">Explorar</Button>
            </Link>
            <Link to="/gameplay">
              <Button variant="secondary">Ver Gameplay</Button>
            </Link>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Bem-vindo à Simulação
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Em uma cidade aparentemente comum, um garoto sem rosto começa a perceber 
              falhas na realidade. Glitches que revelam uma verdade perturbadora: 
              o mundo pode não ser real.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Explore',
                description: 'Navegue por uma cidade misteriosa em busca da verdade',
                delay: 0,
              },
              {
                icon: Eye,
                title: 'Descubra',
                description: 'Use a Visão Especial para revelar a realidade oculta',
                delay: 0.2,
              },
              {
                icon: Lock,
                title: 'Sobreviva',
                description: 'Enfrente entidades que protegem os segredos da simulação',
                delay: 0.4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 text-center hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-purple-500 transition-colors duration-300" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1745358229167-eb19e72c3f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZ2xpdGNoJTIwYWJzdHJhY3QlMjBtYXRyaXh8ZW58MXx8fHwxNzc0MzI0ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital glitch"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <GlitchText
              text="A Realidade Está Falhando"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 block"
              intensity="medium"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Cada glitch é uma pista. Cada falha revela mais sobre a natureza da simulação. 
              Mas cuidado - quanto mais você descobre, mais perigoso o mundo se torna.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-2 border-cyan-500/30 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <p className="text-2xl sm:text-3xl text-cyan-400 font-bold uppercase tracking-wider">
                [Gameplay Preview]
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Pronto para descobrir a verdade?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Entre no mundo de LOOPHOLE e desvende os mistérios da simulação.
            </p>
            <Link to="/about">
              <Button variant="primary">Comece a Jornada</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
