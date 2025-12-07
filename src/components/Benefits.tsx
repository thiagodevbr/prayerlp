import React from 'react';
import { Calendar, Users2, MessageCircle, FolderOpen, Sparkles } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Calendar,
      title: 'Mais constância na oração',
      description: 'Lembretes diários, cronômetro de intercessão e devocionais.'
    },
    {
      icon: Users2,
      title: 'Mais comunhão',
      description: 'Grupos, igrejas e comunidades podem orar juntas, compartilhar avisos e se fortalecer.'
    },
    {
      icon: MessageCircle,
      title: 'Mais encorajamento',
      description: 'Receba mensagens anônimas ou identificadas de quem está orando por você.'
    },
    {
      icon: FolderOpen,
      title: 'Mais organização',
      description: 'Pastas, categorias e níveis de privacidade para pedidos.'
    },
    {
      icon: Sparkles,
      title: 'Mais profundidade espiritual',
      description: 'Devocionais personalizados e registro de respostas da oração.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F3F1FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Como o app ajuda você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-[#8B7FD6]/20 hover:border-[#8B7FD6]/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#8B7FD6] to-[#5B7CDB] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
