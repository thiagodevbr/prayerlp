import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Plano Gratuito',
      price: 'R$ 0',
      period: '/mês',
      description: 'Ideal para novos usuários e para quem quer iniciar uma vida de oração organizada.',
      features: [
        'Criação ilimitada de pedidos pessoais',
        'Acesso às orações públicas',
        'Participação em grupos abertos',
        'Devocional diário'
      ],
      buttonText: 'Começar Gratuitamente',
      variant: 'outline' as const,
      highlight: false
    },
    {
      name: 'Plano Premium',
      price: 'R$ 9,90',
      period: '/mês',
      yearlyPrice: 'R$ 99/ano (economize 16%)',
      badge: 'Mais escolhido',
      description: 'Inclui tudo do plano gratuito + recursos avançados.',
      features: [
        'Tudo do Gratuito',
        'Pastas personalizadas',
        'Criar grupos privados',
        'Estatísticas de oração',
        'Histórico completo',
        'Temas exclusivos',
        'Perfil avançado',
        'Cronômetro avançado'
      ],
      buttonText: 'Assinar por R$ 9,90',
      variant: 'primary' as const,
      highlight: true
    },
    {
      name: 'Plano Igrejas & Ministérios',
      price: 'A partir de R$ 39,90',
      period: '/mês',
      description: 'Para igrejas que desejam integrar EBD, controle de membros e um ambiente de oração unificado.',
      features: [
        'Chamada da EBD',
        'Gestão de membros',
        'Mural de avisos',
        'Grupos ilimitados',
        'Estatísticas e relatórios',
        'Painel administrativo avançado',
        'Suporte prioritário'
      ],
      buttonText: 'Falar com o Time',
      variant: 'secondary' as const,
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#E8F0FE] to-[#F3F1FF]" id="planos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Planos simples para todos os estilos de vida cristã.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                plan.highlight 
                  ? 'ring-2 ring-[#5B7CDB] shadow-2xl scale-105' 
                  : 'border border-gray-200 shadow-lg'
              } transition-all duration-300 hover:shadow-2xl relative`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5B7CDB] to-[#8B7FD6] text-white px-4 py-1 rounded-full text-sm">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl text-gray-800 mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl text-[#5B7CDB]">{plan.price}</span>
                    {plan.period && <span className="text-gray-500">{plan.period}</span>}
                  </div>
                  {plan.yearlyPrice && (
                    <p className="text-sm text-green-600 mt-1">{plan.yearlyPrice}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#5B7CDB] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant={plan.variant} className="w-full">
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}