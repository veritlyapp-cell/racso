import { motion } from 'framer-motion';
import { FileSearch, Target, Mic, CalendarClock, Sunrise } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <FileSearch size={32} />,
        title: 'Scanner CV',
        description: 'La IA evalúa tu CV, detecta fallos, propone "Quick Wins" y permite guardar múltiples versiones para adaptar a distintos roles.'
    },
    {
        icon: <Target size={32} />,
        title: 'Perfiles ATS',
        description: 'Sube la oferta (PDF/Imagen) y la IA calcula tu % Match y palabras clave faltantes. Seguimiento visual estilo Trello.'
    },
    {
        icon: <Mic size={32} />,
        title: 'Coach STAR',
        description: 'Responde por voz. Un robot interactivo analiza tu respuesta STAR adaptada al puesto, dando puntajes y consejos de impacto.'
    },
    {
        icon: <CalendarClock size={32} />,
        title: 'Agenda Inteligente',
        description: 'Sincroniza y vincula tus entrevistas agendadas directamente con las ofertas de trabajo analizadas en la plataforma.'
    },
    {
        icon: <Sunrise size={32} />,
        title: 'Día de Entrevista',
        description: 'Se activa horas antes: ejercicios de respiración y 3 "Cápsulas de Poder" con estrategia IA para dominar tus debilidades.'
    }
];

export default function Features() {
    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Tus herramientas para el <span className="text-gradient">éxito laboral</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        Nuestros 5 pilares están diseñados para acompañarte desde tu postulación hasta la oferta en mano.
                    </motion.p>
                </div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`feature-card glass-panel ${idx >= 3 ? 'span-col' : ''}`}
                        >
                            <div className="feature-icon text-gradient">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
