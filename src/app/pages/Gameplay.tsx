import { motion } from 'motion/react';
import { Section, SectionTitle } from '../components/Section';
import { Card } from '../components/Card';
import { GlitchText } from '../components/GlitchText';
import { 
  Map, 
  Puzzle, 
  BookOpen, 
  Eye, 
  Lightbulb, 
  Zap,
  Lock,
  MapPin 
} from 'lucide-react';

export function Gameplay() {
  const gameplayFeatures = [
    {
      icon: Map,
      title: 'Exploração 2D',
      description: 'Navegue por uma cidade misteriosa em perspectiva lateral. Cada área esconde segredos e pistas sobre a verdadeira natureza do mundo.',
      color: 'cyan',
    },
    {
      icon: Puzzle,
      title: 'Puzzles Ambientais',
      description: 'Resolva enigmas interagindo com objetos, manipulando física e descobrindo padrões ocultos no ambiente ao seu redor.',
      color: 'purple',
    },
    {
      icon: BookOpen,
      title: 'Progressão Narrativa',
      description: 'Colete páginas do diário místico para desbloquear novos poderes, áreas e revelações sobre a simulação.',
      color: 'cyan',
    },
  ];

  const visionFeatures = [
    {
      icon: Lightbulb,
      title: 'Revelar Verdades',
      description: 'Veja através da ilusão e descubra a verdadeira natureza dos objetos e ambientes ao seu redor.',
    },
    {
      icon: Zap,
      title: 'Plataformas Invisíveis',
      description: 'Detecte e use plataformas ocultas que existem apenas na camada real da simulação.',
    },
    {
      icon: Lock,
      title: 'Portas Secretas',
      description: 'Encontre passagens escondidas e atalhos que levam a áreas restritas do mundo.',
    },
    {
      icon: MapPin,
      title: 'Fraquezas Inimigas',
      description: 'Identifique pontos vulneráveis em inimigos e descubra como derrotá-los efetivamente.',
    },
  ];

  const progression = [
    {
      number: '01',
      title: 'Primeiras Falhas',
      description: 'Descubra as primeiras anomalias no mundo aparentemente normal.',
      unlocks: ['Movimento básico', 'Lanterna'],
    },
    {
      number: '02',
      title: 'O Diário',
      description: 'Encontre e decodifique as primeiras páginas do diário misterioso.',
      unlocks: ['Visão Especial (básica)', 'Área: Distrito Abandonado'],
    },
    {
      number: '03',
      title: 'Confronto',
      description: 'Enfrente seus primeiros inimigos - manifestações físicas dos glitches.',
      unlocks: ['Evasão aprimorada', 'Área: Subterrâneos'],
    },
    {
      number: '04',
      title: 'Revelação',
      description: 'Descubra a verdade completa sobre a simulação e seu papel nela.',
      unlocks: ['Visão Especial (completa)', 'Área: Core do Sistema'],
    },
  ];

  return (
    <div className="relative">
      
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText
              text="GAMEPLAY"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 block"
              intensity="medium"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Mecânicas de jogo que desafiam sua percepção da realidade
            </p>
          </motion.div>
        </div>
      </section>

      
      <Section className="bg-gray-900">
        <SectionTitle subtitle="A experiência central do jogo">
          Mecânicas Principais
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gameplayFeatures.map((feature, index) => (
            <Card 
              key={index} 
              delay={index * 0.2}
              glowColor={feature.color as 'cyan' | 'purple'}
            >
              <feature.icon className="w-12 h-12 mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      
      <Section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <SectionTitle>
            <div className="flex items-center justify-center gap-4">
              <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
              <span>VISÃO ESPECIAL</span>
            </div>
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Card glowColor="cyan" className="text-center">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                A habilidade especial que permite ao protagonista ver através da simulação. 
                Ative a Visão Especial para revelar a <span className="text-cyan-400 font-semibold">verdadeira realidade</span> escondida 
                sob camadas de código e ilusão.
              </p>
            </Card>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {visionFeatures.map((feature, index) => (
              <Card key={index} delay={index * 0.15} glowColor="cyan">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm text-center px-4">
                  Visão Normal
                </p>
              </div>
              <div className="aspect-video bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-2 border-cyan-500/50 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <p className="text-cyan-400 font-bold uppercase tracking-wider text-sm text-center px-4">
                  Visão Especial Ativada
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      
      <Section className="bg-gray-900">
        <SectionTitle subtitle="Desbloqueie novas habilidades e áreas">
          Sistema de Progressão
        </SectionTitle>

        <div className="max-w-5xl mx-auto space-y-6">
          {progression.map((stage, index) => (
            <Card key={index} delay={index * 0.15} glowColor="purple">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{stage.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {stage.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{stage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.unlocks.map((unlock, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm rounded-full"
                      >
                        {unlock}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <Card glowColor="cyan">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
              Dicas de Interação
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Observe Tudo',
                  tip: 'Pequenos detalhes podem revelar grandes segredos sobre a simulação.',
                },
                {
                  title: 'Use a Lanterna',
                  tip: 'Áreas escuras escondem tanto perigos quanto verdades essenciais.',
                },
                {
                  title: 'Leia o Diário',
                  tip: 'Cada página contém pistas cruciais para resolver os puzzles mais complexos.',
                },
                {
                  title: 'Combine Habilidades',
                  tip: 'Use Visão Especial e outros poderes em conjunto para superar obstáculos.',
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-bold text-cyan-400">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl text-center italic text-gray-500 max-w-3xl mx-auto"
          >
            "Quanto mais você vê, mais perigoso o jogo se torna."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
