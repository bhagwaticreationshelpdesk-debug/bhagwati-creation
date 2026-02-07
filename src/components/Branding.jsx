import React from 'react';
import { Link } from 'react-router-dom';

export const ModernLogo = ({ light = false }) => (
    <Link to="/" className="flex items-center gap-4 group">
        <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-[var(--accent-gold)] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000`}></div>

            <svg viewBox="0 0 100 100" className="w-full h-full fill-none overflow-visible">
                {/* Outer Decorative Rings */}
                <circle cx="50" cy="50" r="48" className="stroke-[var(--accent-gold)] stroke-[0.5] opacity-20" />
                <circle cx="50" cy="50" r="42" className="stroke-[var(--accent-gold)] stroke-[0.2] opacity-10" />

                {/* Mandala / Lotus Petals */}
                <g className="stroke-[var(--accent-gold)] stroke-[1]">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <path
                            key={angle}
                            d="M50 50 Q65 30 50 10 Q35 30 50 50"
                            transform={`rotate(${angle} 50 50)`}
                            className="animate-draw"
                            style={{ animationDelay: `${angle * 2}ms` }}
                        />
                    ))}
                </g>

                {/* Center Core */}
                <path
                    d="M45 45 L55 45 L55 55 L45 55 Z"
                    className="fill-[var(--accent-gold)] animate-pulse"
                    style={{ animationDuration: '3s' }}
                />
            </svg>
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold tracking-[0.25em] leading-tight text-[var(--accent-gold)]">
                BHAGWATI
            </h1>
            <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent-gold)]"></span>
                <span className="text-[9px] tracking-[0.5em] text-[var(--accent-gold)] font-bold uppercase">
                    Creations
                </span>
            </div>
        </div>
    </Link>
);
