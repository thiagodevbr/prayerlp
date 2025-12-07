import React from 'react';
import { Heart, Users, BookOpen } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Intercessão em tempo real',
      description: 'Pessoas oram por você e enviam mensagens de encorajamento.'
    },
    {
      icon: Users,
      title: 'Pedidos organizados',
      description: 'Crie pedidos pessoais, privados, por grupos ou públicos.'
    },
    {
      icon: BookOpen,
      title: 'Crescimento espiritual',
      description: 'Acesso a devocionais, lembretes e histórico de oração.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl text-gray-800">
            Feito para conectar cristãos em oração.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosso app nasceu para unir vidas, fortalecer igrejas e criar um ambiente seguro onde cada cristão pode pedir, oferecer e compartilhar orações. Seja você membro de uma igreja, líder ou alguém buscando crescer espiritualmente, este é seu espaço.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#E8F0FE] to-white p-8 rounded-2xl border border-[#5B7CDB]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#5B7CDB] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
