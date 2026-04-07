import { useState } from 'react';
import { motion } from 'motion/react';
import { Section, SectionTitle } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { GlitchText } from '../components/GlitchText';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

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
              text="CONTATO"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 block"
              intensity="medium"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Entre em contato conosco sobre LOOPHOLE
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card glowColor="cyan">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Envie uma Mensagem
                    </h3>
                    <p className="text-gray-400">
                      Tem dúvidas sobre o jogo? Quer colaborar? Estamos ouvindo.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                      <label htmlFor="name" className="flex items-center gap-2 text-white mb-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-black border ${
                          errors.name ? 'border-red-500' : 'border-gray-700'
                        } text-white rounded focus:outline-none focus:border-cyan-500 transition-colors`}
                        placeholder="Seu nome"
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="flex items-center gap-2 text-white mb-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-black border ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        } text-white rounded focus:outline-none focus:border-cyan-500 transition-colors`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="flex items-center gap-2 text-white mb-2">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 bg-black border ${
                          errors.message ? 'border-red-500' : 'border-gray-700'
                        } text-white rounded focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                        placeholder="Sua mensagem..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <Button type="submit" variant="primary" className="w-full sm:w-auto">
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Enviar Mensagem
                        </span>
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-400">
                    Recebemos sua mensagem e entraremos em contato em breve.
                  </p>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <SectionTitle subtitle="Outras formas de nos encontrar">
          Informações
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card delay={0.2} glowColor="cyan">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-400 text-sm mb-2">Entre em contato direto</p>
              <a
                href="mailto:contact@loophole.game"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                contact@loophole.game
              </a>
            </div>
          </Card>

          <Card delay={0.3} glowColor="purple">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Comunidade</h3>
              <p className="text-gray-400 text-sm mb-2">Junte-se à discussão</p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Discord Server
              </a>
            </div>
          </Card>

          <Card delay={0.4} glowColor="cyan">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Social</h3>
              <p className="text-gray-400 text-sm mb-2">Siga-nos nas redes</p>
              <div className="flex gap-3 justify-center">
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Twitter
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-black">
        <SectionTitle subtitle="Respostas rápidas para perguntas comuns">
          Perguntas Frequentes
        </SectionTitle>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: 'Quando o jogo será lançado?',
              a: 'LOOPHOLE está atualmente em desenvolvimento. Anunciaremos a data de lançamento em breve através dos nossos canais oficiais.',
            },
            {
              q: 'Em quais plataformas estará disponível?',
              a: 'O jogo será lançado inicialmente para PC. Estamos considerando portar para consoles no futuro.',
            },
            {
              q: 'Haverá uma demo disponível?',
              a: 'Sim! Planejamos lançar uma demo jogável alguns meses antes do lançamento oficial.',
            },
            {
              q: 'O jogo terá suporte a outros idiomas?',
              a: 'Sim, LOOPHOLE será totalmente localizado em inglês e português no lançamento.',
            },
          ].map((faq, index) => (
            <Card key={index} delay={index * 0.1}>
              <h4 className="text-lg font-bold text-cyan-400 mb-2">{faq.q}</h4>
              <p className="text-gray-400">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl italic text-gray-500 max-w-3xl mx-auto"
          >
            "A comunicação é a primeira brecha na simulação."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
