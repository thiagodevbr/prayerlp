import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'Finalmente estou conseguindo manter uma vida de oração constante.',
      name: 'Maria Silva',
      role: 'Membro de igreja',
      image: 'https://images.unsplash.com/photo-1734764627104-6ad22c48af6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUwMzQxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      text: 'Nossa igreja se aproximou muito mais depois do app.',
      name: 'João Santos',
      role: 'Líder de ministério',
      image: 'https://images.unsplash.com/photo-1712599982295-1ecff6059a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MTEyNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      text: 'Fui muito acolhido quando precisei de oração urgente.',
      name: 'Ana Costa',
      role: 'Jovem cristã',
      image: 'https://images.unsplash.com/photo-1591845466152-62ab76b84fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMGhhcHB5fGVufDF8fHx8MTc2NTEyMjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Testemunhos de quem já foi abençoado
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#E8F0FE] to-white p-8 rounded-2xl border border-[#5B7CDB]/20 relative"
            >
              <Quote className="w-10 h-10 text-[#5B7CDB] opacity-30 mb-4" />
              
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
