import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const whatsappNumber = '529631742491'; // Número de contacto con lada de México
    const message = encodeURIComponent('¡Hola! Me gustaría pedir un taxi de Pompeyo Express.');
    const link = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300 z-[60] flex items-center justify-center group"
            aria-label="Pedir taxi por WhatsApp"
        >
            {/* Tooltip */}
            <div className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                ¡Pide tu taxi aquí!
            </div>

            <MessageCircle size={28} className="animate-pulse" />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white justify-center items-center font-bold">1</span>
            </span>
        </a>
    );
};

export default WhatsAppButton;
