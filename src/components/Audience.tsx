import React from 'react';
import { UserCircle, Church, Users, BookHeart } from 'lucide-react';

export function Audience() {
  const audiences = [
    {
      icon: UserCircle,
      title: 'Cristãos que querem crescer na oração'
    },
    {
      icon: Church,
      title: 'Igrejas que desejam unir seus membros'
    },
    {
      icon: Users,
      title: 'Líderes que precisam organizar pedidos'
    },
    {
      icon: BookHeart,
      title: 'Jovens, adultos e grupos de estudo bíblico'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F3F1FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Para quem é o app?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#8B7FD6]/20 hover:border-[#8B7FD6] transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="bg-gradient-to-br from-[#5B7CDB] to-[#8B7FD6] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg text-gray-800">
                {audience.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
