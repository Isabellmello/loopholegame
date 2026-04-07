import { motion } from 'motion/react';
import { Section, SectionTitle } from '../components/Section';
import { Card } from '../components/Card';
import { GlitchText } from '../components/GlitchText';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { User, Flashlight, BookOpen, Eye } from 'lucide-react';

export function Character() {
  const tools = [
    {
      icon: Flashlight,
      name: 'Lanterna',
      description: 'Uma ferramenta essencial para iluminar as áreas mais escuras da cidade. A luz revela não apenas o caminho, mas também pistas escondidas nas sombras.',
      abilities: [
        'Ilumina áreas escuras',
        'Revela detalhes ocultos',
        'Funciona melhor com Visão Especial',
        'Bateria limitada - use com sabedoria',
      ],
      image: 'https://images.unsplash.com/photo-1615286814669-cc2e894c96ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmxhc2hsaWdodCUyMGxhbnRlcm4lMjBkYXJrfGVufDF8fHx8MTc3NDMyNDg0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: BookOpen,
      name: 'Diário Antigo',
      description: 'O artefato central da jornada. Cada página desbloqueada conta mais sobre a simulação e concede novos poderes ao protagonista.',
      abilities: [
        'Desbloqueia novas habilidades',
        'Revela a história da simulação',
        'Guia para resolver puzzles',
        'Chave para áreas restritas',
      ],
      image: 'https://images.unsplash.com/photo-1670786056283-c5a3835ccc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkaWFyeSUyMGpvdXJuYWwlMjBib29rfGVufDF8fHx8MTc3NDMyNDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const symbolism = [
    {
      aspect: 'Ausência de Identidade',
      meaning: 'A falta de rosto simboliza o vazio da existência dentro de uma simulação. Sem uma face, o protagonista representa todos e ninguém ao mesmo tempo.',
    },
    {
      aspect: 'Silêncio Visual',
      meaning: 'Sem expressões faciais, cada emoção deve ser inferida através de linguagem corporal e ações, criando uma conexão mais profunda com o jogador.',
    },
    {
      aspect: 'Mistério Perpétuo',
      meaning: 'O protagonista é tão enigmático quanto o mundo que ele habita. Sua aparência reflete a natureza incerta da realidade ao seu redor.',
    },
    {
      aspect: 'Liberdade Interpretativa',
      meaning: 'Cada jogador pode projetar suas próprias emoções e identidade no personagem, tornando a experiência única e pessoal.',
    },
  ];

  return (
    <div className="relative">
      
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <GlitchText
              text="O PROTAGONISTA"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 block"
              intensity="medium"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Um garoto em busca da verdade
            </p>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <Card glowColor="cyan" className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      O Garoto Sem Rosto
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-cyan-400 font-semibold">Sem olhos. Sem boca. Sem expressão.</span>
                      {' '}O protagonista de LOOPHOLE é uma figura enigmática que desafia 
                      as convenções visuais dos personagens tradicionais.
                    </p>
                    <p>
                      Sua ausência de rosto não é uma escolha estética arbitrária - 
                      é um elemento fundamental da narrativa. Ele representa o vazio 
                      existencial de viver em uma realidade fabricada, onde identidade 
                      e individualidade são apenas ilusões programadas.
                    </p>
                    <p>
                      Inspirado na estética minimalista e sombria de jogos como 
                      <span className="text-purple-400 font-semibold"> Limbo</span> e 
                      <span className="text-purple-400 font-semibold"> Inside</span>, 
                      o design do protagonista transmite mistério, solidão e uma 
                      estranheza perturbadora.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1735406460135-876b4f125376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlbGVzcyUyMHNpbGhvdWV0dGUlMjBzaGFkb3clMjBmaWd1cmV8ZW58MXx8fHwxNzc0MzI0ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Faceless protagonist"
                      className="w-full h-96 object-cover rounded border-2 border-cyan-500/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <SectionTitle subtitle="O significado por trás do vazio">
          Simbolismo da Ausência
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {symbolism.map((item, index) => (
            <Card key={index} delay={index * 0.15} glowColor="purple">
              <h4 className="text-xl font-bold mb-3 text-purple-400">
                {item.aspect}
              </h4>
              <p className="text-gray-300 leading-relaxed">{item.meaning}</p>
            </Card>
          ))}
        </div>
      </Section>

      
      <Section className="bg-gray-900">
        <SectionTitle subtitle="Ferramentas essenciais para sobreviver">
          Equipamento
        </SectionTitle>

        <div className="space-y-12 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card glowColor="cyan">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <tool.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm uppercase tracking-wider text-cyan-400 font-semibold mb-3">
                        Habilidades
                      </h4>
                      {tool.abilities.map((ability, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <p className="text-gray-400 text-sm">{ability}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <ImageWithFallback
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-80 object-cover rounded border border-cyan-500/30"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      
      <Section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <SectionTitle>
            <div className="flex items-center justify-center gap-4">
              <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
              <span>Habilidade Especial</span>
            </div>
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card glowColor="cyan" className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                VISÃO ESPECIAL
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A habilidade mais importante do protagonista. Concedida através das 
                páginas do diário, a Visão Especial permite ver além da ilusão da 
                simulação e revelar a verdadeira natureza da realidade.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-900/50 p-6 rounded border border-cyan-500/20">
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">
                    Nível Básico
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Revela plataformas invisíveis e portas secretas próximas
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded border border-purple-500/20">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">
                    Nível Completo
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Expõe toda a estrutura da simulação e fraquezas de inimigos
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <GlitchText
              text='"Sem rosto, mas com propósito."'
              className="text-2xl sm:text-3xl lg:text-4xl italic text-gray-400 block mb-4"
              intensity="low"
            />
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              O Design do Protagonista
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
