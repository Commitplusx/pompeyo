import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ScrollReveal } from './ScrollReveal';

const stats = [
    { id: 1, label: 'Viajes realizados', value: 1200 },
    { id: 2, label: 'Conductores certificados', value: 85 },
    { id: 3, label: 'Calificación promedio', value: 4.9 },
];

const Stats: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8">
                        Confianza en números
                    </h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={stat.id} direction="up" delay={index * 100} className="flex flex-col items-center">
                            <span className="text-5xl md:text-6xl font-bold text-brand-orange">
                                {inView ? (
                                    <CountUp end={stat.value} duration={2} decimals={stat.id === 3 ? 1 : 0} />
                                ) : (
                                    '0'
                                )}
                                {stat.id === 3 ? '★' : ''}
                            </span>
                            <p className="mt-2 text-lg md:text-xl text-gray-600">{stat.label}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
