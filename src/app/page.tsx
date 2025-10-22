"use client";

import { useState } from "react";
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  Rocket, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  Check,
  ArrowRight,
  Globe,
  Lock,
  FileText,
  Mail,
  Phone
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "IA Avançada",
      description: "Algoritmos de última geração para resultados excepcionais"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Velocidade Extrema",
      description: "Processamento em tempo real com performance otimizada"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Segurança Total",
      description: "Proteção de dados com criptografia de nível militar"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "R$ 49",
      period: "/mês",
      features: [
        "1.000 consultas/mês",
        "Suporte básico",
        "API básica",
        "Documentação completa"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R$ 99",
      period: "/mês",
      features: [
        "10.000 consultas/mês",
        "Suporte prioritário",
        "API avançada",
        "Integrações personalizadas",
        "Analytics detalhado"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 299",
      period: "/mês",
      features: [
        "Consultas ilimitadas",
        "Suporte 24/7",
        "API completa",
        "Soluções customizadas",
        "Gerente dedicado",
        "SLA garantido"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kamolas.IA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('legal')} 
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                Legal
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                Contato
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
                Começar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="absolute top-16 right-0 w-64 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl">
                  <div className="p-4 space-y-2">
                    <button 
                      onClick={() => scrollToSection('features')} 
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                    >
                      Recursos
                    </button>
                    <button 
                      onClick={() => scrollToSection('pricing')} 
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                    >
                      Preços
                    </button>
                    <button 
                      onClick={() => scrollToSection('legal')} 
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                    >
                      Legal
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                    >
                      Contato
                    </button>
                    <div className="pt-2">
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform">
                        Começar Agora
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Nova Era da Inteligência Artificial</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              O Futuro da
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> IA </span>
              é Agora
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Kamolas.IA revoluciona a forma como você interage com inteligência artificial. 
              Mais rápido, mais inteligente, mais seguro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2">
                <span>Experimente Grátis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Demonstração
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-r from-cyan-500 to-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recursos Revolucionários</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Descubra o que torna Kamolas.IA a plataforma de IA mais avançada do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Rocket className="w-6 h-6 text-white" />, title: "Deploy Instantâneo", desc: "Implemente soluções em segundos" },
              { icon: <Users className="w-6 h-6 text-white" />, title: "Colaboração", desc: "Trabalhe em equipe em tempo real" },
              { icon: <Globe className="w-6 h-6 text-white" />, title: "Global", desc: "Disponível em 50+ idiomas" },
              { icon: <Lock className="w-6 h-6 text-white" />, title: "Privacidade", desc: "Seus dados sempre protegidos" },
              { icon: <Star className="w-6 h-6 text-white" />, title: "Qualidade", desc: "99.9% de precisão garantida" },
              { icon: <Zap className="w-6 h-6 text-white" />, title: "Performance", desc: "Respostas em milissegundos" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Planos Transparentes</h2>
            <p className="text-xl text-gray-400">Escolha o plano perfeito para suas necessidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-cyan-400/50' 
                  : 'bg-white/5 border-white/10'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Conformidade e Transparência</h2>
            <p className="text-xl text-gray-400">Operamos com total transparência e conformidade legal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FileText className="w-6 h-6 text-white" />, title: "Termos de Uso", desc: "Condições claras e justas" },
              { icon: <Shield className="w-6 h-6 text-white" />, title: "Política de Privacidade", desc: "LGPD e GDPR compliant" },
              { icon: <Lock className="w-6 h-6 text-white" />, title: "Segurança de Dados", desc: "Criptografia end-to-end" },
              { icon: <Globe className="w-6 h-6 text-white" />, title: "Conformidade Global", desc: "Regulamentações internacionais" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Compromisso Legal</h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Proteção de Dados</h4>
                <p className="text-sm mb-4">
                  Kamolas.IA está em total conformidade com a LGPD (Lei Geral de Proteção de Dados) 
                  e GDPR (General Data Protection Regulation). Seus dados são processados com o mais 
                  alto nível de segurança e privacidade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Responsabilidade</h4>
                <p className="text-sm mb-4">
                  Operamos com total transparência e responsabilidade. Nossa IA é desenvolvida 
                  seguindo princípios éticos e diretrizes internacionais para inteligência artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-400 mb-12">Pronto para revolucionar seu negócio com IA?</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">contato@kamolas.ia</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
              <p className="text-gray-400">+55 (11) 9999-9999</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Suporte 24/7</h3>
              <p className="text-gray-400">Sempre disponível</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2 mx-auto">
            <span>Começar Agora</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kamolas.IA</span>
            </div>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <button className="hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button className="hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Kamolas.IA. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00</p>
            <p className="mt-2">Desenvolvido com tecnologia de ponta para o futuro da inteligência artificial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}