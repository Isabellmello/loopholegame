import { motion } from 'motion/react';
import { Section, SectionTitle } from '../components/Section';
import { Card } from '../components/Card';
import { GlitchText } from '../components/GlitchText';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="relative">
     
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1745358229167-eb19e72c3f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZ2xpdGNoJTIwYWJzdHJhY3QlMjBtYXRyaXh8ZW58MXx8fHwxNzc0MzI0ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital glitch"
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
              text="A HISTÓRIA"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 block"
              intensity="medium"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Uma jornada através das falhas da realidade
            </p>
          </motion.div>
        </div>
      </section>

     
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card delay={0.2}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">
              O Despertar
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Em uma cidade aparentemente comum, onde cada dia se repete de forma 
                estranhamente familiar, vive um garoto. Sua ausência de 
                identidade física reflete a natureza vazia da realidade ao seu redor.
              </p>
              <p>
                Tudo muda quando ele começa a perceber <span className="text-cyan-400 font-semibold">falhas</span> 
                {' '}no mundo. Pequenos glitches, distorções momentâneas, objetos que 
                piscam e desaparecem. Inicialmente sutis, essas anomalias tornam-se 
                cada vez mais frequentes e impossíveis de ignorar.
              </p>
            </div>
          </Card>

          <Card delay={0.4} className="mt-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-400">
                  O Diário
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ao explorar um edifício abandonado, ele encontra um diário antigo. 
                  Suas páginas contêm anotações sobre a natureza da realidade, 
                  experimentos estranhos e uma conclusão perturbadora: o mundo é 
                  uma simulação.
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670786056283-c5a3835ccc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkaWFyeSUyMGpvdXJuYWwlMjBib29rfGVufDF8fHx8MTc3NDMyNDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Old diary"
                  className="w-full h-64 object-cover rounded border border-purple-500/30"
                />
              </div>
            </div>
          </Card>

          <Card delay={0.6} className="mt-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">
              A Busca pela Verdade
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Cada página do diário desbloqueada revela mais sobre a simulação. 
                O protagonista descobre que as falhas não são erros aleatórios - 
                são sinais de que a simulação está reagindo à sua descoberta.
              </p>
              <p>
                Armado com uma lanterna para iluminar as sombras da verdade e o 
                diário como guia, ele embarca em uma jornada para explorar os 
                limites desta realidade fabricada.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      
      <Section className="bg-gray-900">
        <SectionTitle subtitle="A natureza da prisão digital">
          O Conceito da Simulação
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card delay={0.2} glowColor="cyan">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl text-cyan-400">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Realidade Fabricada</h3>
              <p className="text-gray-400">
                O mundo é uma construção digital, mantida por sistemas complexos. 
                Cada cidadão, cada rua, cada momento é programado e controlado.
              </p>
            </div>
          </Card>

          <Card delay={0.3} glowColor="purple">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl text-purple-400">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Consciência Proibida</h3>
              <p className="text-gray-400">
                A simulação não foi projetada para ser questionada. Aqueles que 
                começam a perceber a verdade tornam-se alvos.
              </p>
            </div>
          </Card>

          <Card delay={0.4} glowColor="cyan">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl text-cyan-400">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Os Guardiões</h3>
              <p className="text-gray-400">
                Entidades formadas pelos próprios glitches surgem para eliminar 
                aqueles que ameaçam expor a simulação.
              </p>
            </div>
          </Card>

          <Card delay={0.5} glowColor="purple">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-3xl text-purple-400">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">O Sistema</h3>
              <p className="text-gray-400">
                Por trás de tudo está o Kernel - a entidade principal que controla 
                e defende a integridade da simulação a todo custo.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <Card delay={0.2} glowColor="red" className="border-2 border-red-500/30">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlitchText
                  text="O CLÍMAX"
                  className="text-3xl sm:text-4xl font-bold mb-6 block text-red-500"
                  intensity="high"
                />
              </motion.div>

              <div className="space-y-4 text-gray-300 leading-relaxed text-left sm:text-center">
                <p className="text-lg">
                  A última página do diário revela a verdade mais assustadora de todas:
                </p>
                <blockquote className="text-xl sm:text-2xl italic text-cyan-400 border-l-4 border-cyan-500 pl-4 py-2 my-6">
                  "A simulação não tolera ser descoberta. Quando a verdade é revelada, 
                  o sistema inicia um protocolo de autodestruição."
                </blockquote>
                <p className="text-lg">
                  As falhas se intensificam. O mundo começa a colapsar. O protagonista 
                  percebe que sua busca pela verdade pode ter condenado toda a realidade 
                  que ele conhece.
                </p>
                <p className="text-xl font-bold text-white mt-6">
                  Será que a verdade vale o preço da existência?
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

     
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-center italic text-gray-400 max-w-4xl mx-auto"
          >
            "Você não pode hackear algo que hackeia de volta."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
