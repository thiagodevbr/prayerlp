import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Features() {
  const featuresList = [
    'Feed de orações públicas',
    'Sistema de comentários e encorajamento',
    'Grupos e igrejas com mural de avisos',
    'Pastas privadas para sua vida devocional',
    'Perfis personalizados',
    'Níveis de privacidade dos pedidos',
    'Ranking de intercessores (opcional)',
    'Cronômetro de oração',
    'Devocional diário automático',
    'Mural de avisos para igrejas e ministérios',
    'Notificações inteligentes',
    'Compatível com iOS e Android'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1703292227601-d57b5b845c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGUlMjBzb2Z0JTIwbGlnaHR8ZW58MXx8fHwxNzY1MTIyNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Bíblia aberta"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right - Features list */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-4xl text-gray-800 mb-4">
                Tudo o que você precisa para uma vida de oração viva e constante.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B7CDB] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
