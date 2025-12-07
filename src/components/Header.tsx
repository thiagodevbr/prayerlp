import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({
    code: "PT",
    flag: "🇧🇷",
    label: "Português (Brasil)",
  });

  const languages = [
    { code: "PT", flag: "🇧🇷", label: "Português (Brasil)" },
    { code: "EN", flag: "🇺🇸", label: "English" },
    { code: "ES", flag: "🇪🇸", label: "Español" },
  ];

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (isLangOpen) {
      setIsLangOpen(false);
    }
  };

  return (
    <>
      {/* Overlay to close dropdown when clicking outside */}
      {isLangOpen && (
        <div className="fixed inset-0 z-40" onClick={handleClickOutside} />
      )}

      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left - App name only */}
            <div>
              <span className="text-xl text-gray-800">Central de Oração</span>
            </div>

            {/* Right - Language selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-sm">{currentLang.code}</span>
                <ChevronDown
                  className="w-4 h-4 text-gray-500"
                  strokeWidth={1.5}
                />
              </button>

              {/* Dropdown */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                        currentLang.code === lang.code ? "bg-[#E8F0FE]" : ""
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-800">
                          {lang.code}
                        </span>
                        <span className="text-sm text-gray-500">–</span>
                        <span className="text-sm text-gray-600">
                          {lang.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
