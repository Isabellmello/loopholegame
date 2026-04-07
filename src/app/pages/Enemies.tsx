import { motion } from 'motion/react';
import { Section, SectionTitle } from '../components/Section';
import { Card } from '../components/Card';
import { GlitchText } from '../components/GlitchText';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Skull, Zap, Shield, Target, AlertTriangle, Cpu } from 'lucide-react';

export function Enemies() {
  return (
    <div className="relative">
      
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765445774062-05c27b1bfa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29ycnVwdGlvbiUyMGdsaXRjaCUyMGVycm9yfGVufDF8fHx8MTc3NDMyNDg0NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital corruption"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText
              text="AS AMEAÇAS"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 block"
              intensity="high"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Guardiões da simulação que eliminam aqueles que descobrem a verdade
            </p>
          </motion.div>
        </div>
      </section>

      
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Card glowColor="red">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              A simulação não tolerará aqueles que ameaçam expor sua verdadeira 
              natureza. Quando as falhas começam a aparecer, <span className="text-red-500 font-semibold">entidades</span> 
              {' '}surgem para eliminar a ameaça - você.
            </p>
          </Card>
        </motion.div>
      </Section>

      
      <Section className="bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Card glowColor="red" className="overflow-hidden border-2 border-red-500/30">
            <div className="grid lg:grid-cols-2 gap-8">
              
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765445774062-05c27b1bfa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29ycnVwdGlvbiUyMGdsaXRjaCUyMGVycm9yfGVufDF8fHx8MTc3NDMyNDg0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="The Nulls"
                  className="w-full h-96 object-cover rounded border border-red-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded" />
                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-red-500/10"
                />
              </div>

              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Skull className="w-10 h-10 text-red-500" />
                  <GlitchText
                    text="THE NULLS"
                    className="text-3xl sm:text-4xl font-bold"
                    intensity="high"
                  />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Criaturas formadas diretamente pelos glitches da simulação. 
                  Entidades fragmentadas e instáveis que representam erros do 
                  sistema manifestados em forma física.
                </p>

                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-red-400 font-semibold mb-3">
                      Características
                    </h4>
                    <div className="grid gap-3">
                      {[
                        {
                          icon: AlertTriangle,
                          text: 'Visual fragmentado com efeito glitch constante',
                        },
                        {
                          icon: Zap,
                          text: 'Comportamento agressivo e imprevisível',
                        },
                        {
                          icon: Target,
                          text: 'Perseguem o jogador ao detectar presença',
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 bg-black/30 p-3 rounded border border-red-500/20">
                          <item.icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-400 text-sm">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                
                <div className="bg-black/40 p-4 rounded border border-red-500/20">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Como Enfrentar
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Use a Visão Especial para identificar seus pontos fracos. 
                    Mantenha distância e aproveite o ambiente para criar barreiras. 
                    Evasão é geralmente mais eficaz que confronto direto.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      
      <Section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-purple-600 to-red-600 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card glowColor="purple" className="overflow-hidden border-2 border-purple-500/50">
              <div className="grid lg:grid-cols-2 gap-8">
               
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-10 h-10 text-purple-500" />
                    <GlitchText
                      text="THE KERNEL"
                      className="text-3xl sm:text-4xl font-bold"
                      intensity="high"
                    />
                  </div>

                  <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                    <p className="text-purple-300 text-sm font-semibold uppercase tracking-wider">
                      Entidade Boss
                    </p>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    A entidade principal da simulação. O Kernel representa o próprio 
                    sistema tentando se defender e eliminar qualquer ameaça à sua 
                    integridade. Imponente, geométrico e aterrorizante.
                  </p>

                  
                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-3">
                      Habilidades
                    </h4>
                    <div className="grid gap-3">
                      {[
                        {
                          icon: Zap,
                          title: 'Criar Falhas',
                          desc: 'Gera distorções no cenário que causam dano',
                        },
                        {
                          icon: Skull,
                          title: 'Invocar Nulls',
                          desc: 'Materializa múltiplos inimigos durante a batalha',
                        },
                        {
                          icon: Shield,
                          title: 'Barreira Adaptativa',
                          desc: 'Muda padrões de defesa em tempo real',
                        },
                      ].map((ability, index) => (
                        <div key={index} className="bg-black/40 p-4 rounded border border-purple-500/20">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0">
                              <ability.icon className="w-4 h-4 text-purple-400" />
                            </div>
                            <div>
                              <h5 className="font-bold text-white mb-1">{ability.title}</h5>
                              <p className="text-gray-400 text-sm">{ability.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                  <div className="bg-gradient-to-r from-purple-900/20 to-black/40 p-4 rounded border border-purple-500/30">
                    <h4 className="text-lg font-bold text-white mb-2">
                      Aparência
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Visual geométrico, abstrato e fractal. Composto por formas 
                      impossíveis que desafiam a lógica espacial. Emite uma aura 
                      de distorção que faz o ambiente ao redor pulsar e se 
                      fragmentar constantemente.
                    </p>
                  </div>
                </div>

                
                <div className="order-1 lg:order-2 relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1745358229167-eb19e72c3f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZ2xpdGNoJTIwYWJzdHJhY3QlMjBtYXRyaXh8ZW58MXx8fHwxNzc0MzI0ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="The Kernel"
                    className="w-full h-96 lg:h-full object-cover rounded border-2 border-purple-500/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded" />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-purple-500/20"
                  />

                  
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded border border-purple-500/50">
                    <p className="text-purple-400 font-bold uppercase text-sm tracking-wider">
                      Level: Final Boss
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="mt-8 pt-8 border-t border-purple-500/20">
                <h4 className="text-xl font-bold text-center text-white mb-4">
                  Estratégia de Combate
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      step: '1',
                      title: 'Observe',
                      desc: 'Estude os padrões de ataque usando Visão Especial',
                    },
                    {
                      step: '2',
                      title: 'Adapte',
                      desc: 'Use o ambiente e ferramentas em combinações criativas',
                    },
                    {
                      step: '3',
                      title: 'Sobreviva',
                      desc: 'Evite os Nulls invocados enquanto ataca o Kernel',
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-black/30 p-4 rounded text-center">
                      <div className="w-10 h-10 mx-auto mb-2 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <span className="text-purple-400 font-bold">{item.step}</span>
                      </div>
                      <h5 className="font-bold text-white mb-1 text-sm">{item.title}</h5>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      
      <Section className="bg-gray-900">
        <SectionTitle subtitle="Conheça seu inimigo">
          Comparação de Ameaças
        </SectionTitle>

        <div className="max-w-5xl mx-auto">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="pb-4 text-cyan-400 uppercase text-sm tracking-wider">Atributo</th>
                    <th className="pb-4 text-red-400 uppercase text-sm tracking-wider">The Nulls</th>
                    <th className="pb-4 text-purple-400 uppercase text-sm tracking-wider">The Kernel</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { attr: 'Frequência', nulls: 'Alta', kernel: 'Única' },
                    { attr: 'Dificuldade', nulls: 'Média', kernel: 'Extrema' },
                    { attr: 'Velocidade', nulls: 'Rápida', kernel: 'Variável' },
                    { attr: 'Resistência', nulls: 'Baixa', kernel: 'Muito Alta' },
                    { attr: 'Inteligência', nulls: 'Básica', kernel: 'Avançada' },
                    { attr: 'Evasão', nulls: 'Possível', kernel: 'Necessária' },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-800/50">
                      <td className="py-3 font-semibold text-white">{row.attr}</td>
                      <td className="py-3">{row.nulls}</td>
                      <td className="py-3">{row.kernel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-500" />
            <GlitchText
              text="AVISO DO SISTEMA"
              className="text-2xl sm:text-3xl font-bold mb-4 block text-red-500"
              intensity="high"
            />
            <p className="text-lg text-gray-400 italic">
              "A simulação detectou uma anomalia. Protocolo de eliminação ativado. 
              Resistência é fútil. Conformidade é obrigatória."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
