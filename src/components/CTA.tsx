import React from 'react';
import { Button } from './Button';
import { DownloadButtons } from './DownloadButtons';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#5B7CDB] to-[#8B7FD6] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <img 
          src="https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHJhaXNlZCUyMHdvcnNoaXB8ZW58MXx8fHwxNzY1MTIyNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mãos erguidas em adoração"
          className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl mb-12 opacity-90"
        />

        <h2 className="text-5xl text-white mb-6">
          Comece hoje uma nova jornada de oração.
        </h2>
        
        <p className="text-xl text-white/90 mb-10">
          Deus tem feito grandes coisas quando o Seu povo ora junto.
        </p>

        <div className="space-y-6">
          <DownloadButtons variant="light" className="justify-center" />
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Criar Conta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}