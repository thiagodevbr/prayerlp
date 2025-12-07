import React from 'react';
import { Instagram, Youtube, Music } from 'lucide-react';
import { DownloadButtons } from './DownloadButtons';

export function Footer() {
  const links = {
    company: [
      { name: 'Sobre o App', href: '#' },
      { name: 'Termos e Privacidade', href: '#' },
      { name: 'Suporte', href: '#' },
      { name: 'Contato', href: '#' }
    ],
    social: [
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' },
      { name: 'TikTok', icon: Music, href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Brand and links */}
          <div>
            <h3 className="text-2xl mb-6">App de Oração</h3>
            <div className="flex flex-col gap-3">
              {links.company.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Center - Download buttons */}
          <div>
            <h4 className="text-lg mb-6">Disponível para iPhone e Android</h4>
            <DownloadButtons variant="light" />
          </div>

          {/* Right - Social */}
          <div className="md:text-right">
            <h4 className="text-lg mb-6">Siga-nos</h4>
            <div className="flex gap-4 md:justify-end">
              {links.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#5B7CDB] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 App de Oração. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}