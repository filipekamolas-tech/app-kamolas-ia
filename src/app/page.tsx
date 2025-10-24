"use client";

import { useState, useEffect, useRef } from "react";
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
  Phone,
  ChevronDown,
  Play,
  Settings,
  BarChart3,
  Edit3,
  Save,
  Trash2
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editableContent, setEditableContent] = useState<{[key: string]: string}>({});
  const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Verificar se o clique foi fora de todos os dropdowns
      let clickedOutside = true;
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && ref.contains(target)) {
          clickedOutside = false;
        }
      });
      
      // Verificar se clicou em um trigger de dropdown
      if (target.closest('.dropdown-trigger')) {
        clickedOutside = false;
      }
      
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fechar menu mobile ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleFeature = (featureId: string) => {
    setActiveFeature(activeFeature === featureId ? null : featureId);
  };

  const toggleDropdown = (dropdownId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('Toggling dropdown:', dropdownId); // Debug
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const startEdit = (contentId: string, currentContent: string) => {
    setEditMode(contentId);
    setEditableContent({...editableContent, [contentId]: currentContent});
  };

  const saveEdit = (contentId: string) => {
    setEditMode(null);
    alert(`Conteúdo "${contentId}" salvo com sucesso!`);
  };

  const cancelEdit = () => {
    setEditMode(null);
    setEditableContent({});
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

  const detailedFeatures = [
    { 
      id: "deploy",
      icon: <Rocket className="w-6 h-6 text-white" />, 
      title: "Deploy Instantâneo", 
      desc: "Implemente soluções em segundos",
      details: {
        subtitle: "Implementação Rápida e Eficiente",
        features: [
          "Deploy com um clique",
          "Rollback automático em caso de erro",
          "Integração com CI/CD",
          "Monitoramento em tempo real",
          "Escalabilidade automática"
        ],
        demo: "Ver demonstração do deploy"
      }
    },
    { 
      id: "collaboration",
      icon: <Users className="w-6 h-6 text-white" />, 
      title: "Colaboração", 
      desc: "Trabalhe em equipe em tempo real",
      details: {
        subtitle: "Trabalho em Equipe Sincronizado",
        features: [
          "Edição colaborativa em tempo real",
          "Chat integrado",
          "Controle de versões",
          "Permissões granulares",
          "Histórico de alterações"
        ],
        demo: "Testar colaboração"
      }
    },
    { 
      id: "global",
      icon: <Globe className="w-6 h-6 text-white" />, 
      title: "Global", 
      desc: "Disponível em 50+ idiomas",
      details: {
        subtitle: "Alcance Internacional",
        features: [
          "Tradução automática",
          "Localização cultural",
          "Suporte multi-timezone",
          "Compliance regional",
          "CDN global"
        ],
        demo: "Explorar idiomas"
      }
    },
    { 
      id: "privacy",
      icon: <Lock className="w-6 h-6 text-white" />, 
      title: "Privacidade", 
      desc: "Seus dados sempre protegidos",
      details: {
        subtitle: "Segurança de Nível Empresarial",
        features: [
          "Criptografia end-to-end",
          "Conformidade LGPD/GDPR",
          "Auditoria de segurança",
          "Backup automático",
          "Zero-knowledge architecture"
        ],
        demo: "Ver certificações"
      }
    },
    { 
      id: "quality",
      icon: <Star className="w-6 h-6 text-white" />, 
      title: "Qualidade", 
      desc: "99.9% de precisão garantida",
      details: {
        subtitle: "Excelência Comprovada",
        features: [
          "Algoritmos validados",
          "Testes automatizados",
          "Métricas de qualidade",
          "Feedback contínuo",
          "Melhoria constante"
        ],
        demo: "Ver métricas"
      }
    },
    { 
      id: "performance",
      icon: <Zap className="w-6 h-6 text-white" />, 
      title: "Performance", 
      desc: "Respostas em milissegundos",
      details: {
        subtitle: "Velocidade Incomparável",
        features: [
          "Processamento paralelo",
          "Cache inteligente",
          "Otimização automática",
          "Load balancing",
          "Edge computing"
        ],
        demo: "Testar velocidade"
      }
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

  // Dropdown menu items com ações funcionais
  const dropdownMenus = {
    recursos: [
      { 
        name: "Deploy Instantâneo", 
        action: () => { 
          toggleFeature("deploy"); 
          setTimeout(() => scrollToSection('features'), 100);
        } 
      },
      { 
        name: "Colaboração", 
        action: () => { 
          toggleFeature("collaboration"); 
          setTimeout(() => scrollToSection('features'), 100);
        } 
      },
      { 
        name: "Global", 
        action: () => { 
          toggleFeature("global"); 
          setTimeout(() => scrollToSection('features'), 100);
        } 
      },
      { 
        name: "Privacidade", 
        action: () => { 
          toggleFeature("privacy"); 
          setTimeout(() => scrollToSection('features'), 100);
        } 
      },
      { 
        name: "Qualidade", 
        action: () => { 
          toggleFeature("quality"); 
          setTimeout(() => scrollToSection('features'), 100);
        } 
      },
      { 
        name: "Performance", 
        action: () => { 
          toggleFeature("performance"); 
          setTimeout(() => scrollToSection('features'), 100);
        } 
      }
    ],
    precos: [
      { name: "Plano Starter", action: () => scrollToSection("pricing") },
      { name: "Plano Professional", action: () => scrollToSection("pricing") },
      { name: "Plano Enterprise", action: () => scrollToSection("pricing") },
      { name: "Comparar Planos", action: () => scrollToSection("pricing") }
    ],
    legal: [
      { name: "Termos de Uso", action: () => scrollToSection("legal") },
      { name: "Política de Privacidade", action: () => scrollToSection("legal") },
      { name: "Segurança de Dados", action: () => scrollToSection("legal") },
      { name: "Conformidade Global", action: () => scrollToSection("legal") }
    ]
  };

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
              {/* Recursos Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['recursos'] = el}>
                <button 
                  onClick={(e) => toggleDropdown('recursos', e)}
                  className="dropdown-trigger flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Recursos</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'recursos' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'recursos' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl opacity-0 scale-95 animate-[fadeIn_0.2s_ease-out_forwards]">
                    <div className="p-2">
                      {dropdownMenus.recursos.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            console.log('Clicking menu item:', item.name); // Debug
                            item.action();
                            setActiveDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md focus:outline-none focus:bg-white/10"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Preços Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['precos'] = el}>
                <button 
                  onClick={(e) => toggleDropdown('precos', e)}
                  className="dropdown-trigger flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Preços</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'precos' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'precos' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl opacity-0 scale-95 animate-[fadeIn_0.2s_ease-out_forwards]">
                    <div className="p-2">
                      {dropdownMenus.precos.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setActiveDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md focus:outline-none focus:bg-white/10"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Legal Dropdown */}
              <div className="relative" ref={el => dropdownRefs.current['legal'] = el}>
                <button 
                  onClick={(e) => toggleDropdown('legal', e)}
                  className="dropdown-trigger flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Legal</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'legal' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'legal' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl opacity-0 scale-95 animate-[fadeIn_0.2s_ease-out_forwards]">
                    <div className="p-2">
                      {dropdownMenus.legal.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setActiveDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md focus:outline-none focus:bg-white/10"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                Contato
              </button>
              <button 
                onClick={() => alert('Redirecionando para cadastro... Funcionalidade em desenvolvimento!')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
              >
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
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 opacity-0 animate-[slideDown_0.3s_ease-out_forwards]">
              <div className="p-4 space-y-2">
                {/* Mobile Recursos */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('recursos-mobile')}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                  >
                    <span>Recursos</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'recursos-mobile' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeDropdown === 'recursos-mobile' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {dropdownMenus.recursos.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-md text-sm"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Preços */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('precos-mobile')}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                  >
                    <span>Preços</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'precos-mobile' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeDropdown === 'precos-mobile' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {dropdownMenus.precos.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-md text-sm"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Legal */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('legal-mobile')}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                  >
                    <span>Legal</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'legal-mobile' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeDropdown === 'legal-mobile' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {dropdownMenus.legal.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-md text-sm"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }} 
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                >
                  Contato
                </button>
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      alert('Redirecionando para cadastro... Funcionalidade em desenvolvimento!');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
                  >
                    Começar Agora
                  </button>
                </div>
              </div>
            </div>
          )}
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
            
            <div className="relative">
              {editMode === 'hero-title' ? (
                <div className="space-y-4">
                  <textarea
                    value={editableContent['hero-title'] || ''}
                    onChange={(e) => setEditableContent({...editableContent, 'hero-title': e.target.value})}
                    className="w-full bg-black/50 text-white text-5xl md:text-7xl font-bold text-center border border-cyan-400 rounded-lg p-4 resize-none"
                    rows={3}
                  />
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => saveEdit('hero-title')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Salvar</span>
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    O Futuro da
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> IA </span>
                    é Agora
                  </h1>
                  <button
                    onClick={() => startEdit('hero-title', 'O Futuro da IA é Agora')}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 transition-all duration-200"
                    title="Editar título"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Kamolas.IA revoluciona a forma como você interage com inteligência artificial. 
              Mais rápido, mais inteligente, mais seguro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => alert('Teste gratuito iniciado! Redirecionando para dashboard...')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2"
              >
                <span>Experimente Grátis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => alert('Abrindo demonstração interativa...')}
                className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Ver Demonstração
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => alert(`Explorando: ${feature.title} - Abrindo painel detalhado...`)}
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
            {detailedFeatures.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleFeature(item.id)}
                  className="w-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeFeature === item.id ? 'rotate-180' : ''
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </button>

                {/* Expanded Details */}
                {activeFeature === item.id && (
                  <div className="absolute top-full left-0 right-0 z-10 mt-2 p-6 bg-black/90 backdrop-blur-lg rounded-2xl border border-cyan-400/30 shadow-2xl opacity-0 scale-95 animate-[fadeIn_0.3s_ease-out_forwards]">
                    <h4 className="text-lg font-semibold text-white mb-4">{item.details.subtitle}</h4>
                    <ul className="space-y-2 mb-6">
                      {item.details.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`${item.details.demo} - Abrindo demonstração interativa...`);
                        }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform flex items-center justify-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>{item.details.demo}</span>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Abrindo painel de configurações de ${item.title}...`);
                        }}
                        className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors flex items-center space-x-2"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Configurar</span>
                      </button>
                    </div>
                  </div>
                )}
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
              <div key={index} className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer ${
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

                <button 
                  onClick={() => alert(`Plano ${plan.name} selecionado! Redirecionando para checkout...`)}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
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
              <div 
                key={index} 
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center cursor-pointer hover:scale-105"
                onClick={() => alert(`Abrindo documento: ${item.title}...`)}
              >
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
            <div 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => alert('Abrindo cliente de email para: contato@kamolas.ia')}
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">contato@kamolas.ia</p>
            </div>
            <div 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => alert('Iniciando chamada para: +55 (11) 9999-9999')}
            >
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
              <p className="text-gray-400">+55 (11) 9999-9999</p>
            </div>
            <div 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => alert('Abrindo chat de suporte 24/7...')}
            >
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Suporte 24/7</h3>
              <p className="text-gray-400">Sempre disponível</p>
            </div>
          </div>

          <button 
            onClick={() => alert('Redirecionando para formulário de cadastro completo...')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2 mx-auto"
          >
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
              <button 
                onClick={() => alert('Abrindo documento: Termos de Uso...')}
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => alert('Abrindo documento: Política de Privacidade...')}
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </button>
              <button 
                onClick={() => alert('Abrindo configurações de cookies...')}
                className="hover:text-white transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Kamolas.IA. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00</p>
            <p className="mt-2">Desenvolvido com tecnologia de ponta para o futuro da inteligência artificial.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}