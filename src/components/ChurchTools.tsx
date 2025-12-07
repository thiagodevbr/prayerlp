import React from 'react';
import { Church, Users, Calendar, MapPin, UsersRound, Megaphone, BarChart3, CheckSquare } from 'lucide-react';

export function ChurchTools() {
  const tools = [
    {
      icon: CheckSquare,
      title: 'Chamada da Escola Bíblica Dominical (EBD)',
      description: 'Um sistema prático e rápido para registrar presença dos alunos e membros, acompanhar frequência, classes e relatórios mensais.',
      features: [
        'Chamada por classes (adultos, jovens, crianças, etc.)',
        'Histórico individual de presença',
        'Indicadores mensais e anuais',
        'Exportação para PDF',
        'Integrado ao perfil dos membros'
      ],
      quote: 'Organização que ajuda a igreja a cuidar melhor de cada alma que o Senhor confiou.'
    },
    {
      icon: Users,
      title: 'Cadastro e Gestão de Membros',
      description: 'Tenha uma visão clara e organizada da igreja.',
      features: [
        'Dados completos (nome, telefone, endereço, email, congregação)',
        'Situação e histórico de cada membro',
        'Acompanhamento espiritual e pastoral',
        'Filtros por famílias, bairros e classes da EBD',
        'Informações integradas ao mural de avisos e grupos de oração'
      ]
    },
    {
      icon: Calendar,
      title: 'Aniversariantes do Dia, Semana e Mês',
      description: 'Mantenha a igreja conectada e cheia de carinho cristão.',
      features: [
        'Lista automática dos aniversariantes',
        'Notificações para lembrar a igreja',
        'Possibilidade de enviar mensagens de encorajamento diretamente pelo app'
      ],
      quote: 'Celebre vidas e fortaleça o vínculo da igreja com pequenos gestos de amor.'
    },
    {
      icon: MapPin,
      title: 'Endereços e Localização dos Membros',
      description: 'Para facilitar visitas, evangelismo e cuidado pastoral.',
      features: [
        'Mapa com localização aproximada',
        'Filtragem por regiões da cidade',
        'Ajuda para organização de visitas pastorais, UPH ou SAF',
        'Planejamento de ações missionárias ou campanhas de evangelização'
      ]
    },
    {
      icon: UsersRound,
      title: 'Perfis dos Grupos da Igreja',
      description: 'Cada ministério com seu espaço: UPH, UPA, SAF, UCP, Ministério Infantil, Louvor.',
      features: [
        'Pedidos de oração do grupo',
        'Encorajamentos',
        'Avisos internos',
        'Presença em reuniões',
        'Liderança identificada'
      ]
    },
    {
      icon: Megaphone,
      title: 'Mural de Avisos Exclusivo para Igrejas e Ministérios',
      description: 'Uma área dedicada para comunicados importantes.',
      features: [
        'Eventos especiais',
        'Cultos e conferências',
        'Anúncios administrativos',
        'Chamados para trabalho voluntário',
        'Possibilidade de upload de imagens (cartazes, banners, artes)'
      ]
    },
    {
      icon: BarChart3,
      title: 'Relatórios para Líderes e Presbíteros',
      description: 'Tudo o que uma liderança precisa.',
      features: [
        'Frequência da EBD',
        'Número de pedidos de oração por grupo',
        'Engajamento da membresia',
        'Crescimento dos ministérios',
        'Atividades recentes',
        'Acompanhamentos pastorais'
      ],
      quote: 'Ferramentas que ajudam a liderança a cuidar do rebanho com excelência e amor.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#FDF8F0] via-[#FCF5E8] to-[#F9F0E0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-6 py-2 rounded-full mb-6">
            <Church className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wide">Recursos Exclusivos para Igrejas & Ministérios</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Muito além de um app de orações — um apoio real para a vida da igreja.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Recursos pensados para facilitar o trabalho dos presbíteros, professores de EBD, líderes de ministérios e toda a membresia.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl border-2 border-[#D4AF37]/20 p-8 md:p-10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] w-16 h-16 rounded-2xl flex items-center justify-center">
                    <tool.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-800 mb-3">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {tool.description}
                  </p>

                  {/* Features list */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  {tool.quote && (
                    <div className="bg-gradient-to-r from-[#FDF8F0] to-[#FCF5E8] border-l-4 border-[#D4AF37] p-4 rounded-r-lg">
                      <p className="text-gray-700 italic">
                        "{tool.quote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-[#D4AF37]/30 text-center">
            <p className="text-gray-700">
              Organize a EBD com facilidade e clareza.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-[#D4AF37]/30 text-center">
            <p className="text-gray-700">
              Gerencie membros, endereços e contatos em um só lugar.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-[#D4AF37]/30 text-center">
            <p className="text-gray-700">
              Ajude presbíteros e líderes a cuidar melhor do rebanho.
            </p>
          </div>
        </div>

        {/* Church image section */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1762721373506-6e48fd53c530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc2NTEyMjU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Interior da igreja"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
