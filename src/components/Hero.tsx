import React from 'react';
import { Button } from './Button';
import { DownloadButtons } from './DownloadButtons';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#E8F0FE] via-white to-[#F3F1FF] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#5B7CDB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B7FD6] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl text-gray-800 leading-tight">
              O app que fortalece sua vida de oração.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Conecte-se com irmãos, peça intercessão, ore por quem precisa e cresça na fé — tudo em um só lugar.
            </p>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Baixe agora e fortaleça sua vida de oração.
              </p>
              <DownloadButtons variant="dark" />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline">Conheça os Planos</Button>
            </div>
          </div>

          {/* Right content - Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1603015269169-225cb700e29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwbWluaW1hbHxlbnwxfHx8fDE3NjUxMjI1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="App Mockup"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CDB]/10 to-[#8B7FD6]/10 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}