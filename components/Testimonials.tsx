import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'María Gómez',
        text: 'El servicio de Taxi Rosa es impecable, me siento segura y cómoda en cada viaje.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Juan Pérez',
        text: 'Los taxis grises son puntuales y los conductores muy profesionales.',
        rating: 4,
    },
    {
        id: 3,
        name: 'Ana Martínez',
        text: 'Me encanta la atención personalizada y la limpieza de los vehículos.',
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8">
                    Lo que dicen nuestros clientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <p className="text-gray-700 mb-4">“{t.text}”</p>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-900">{t.name}</span>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
