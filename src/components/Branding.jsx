import React from 'react';
import { Link } from 'react-router-dom';

export const LogoIcon = ({ scale = 1, className = "" }) => (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: `${scale * 56}px`, height: `${scale * 56}px` }}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none overflow-visible">
            <circle cx="50" cy="50" r="48" className="stroke-[var(--accent-gold)] stroke-[0.5] opacity-20" />
            <circle cx="50" cy="50" r="42" className="stroke-[var(--accent-gold)] stroke-[0.2] opacity-10" />
            <g className="stroke-[var(--accent-gold)] stroke-[1.5]">
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
            <path
                d="M45 45 L55 45 L55 55 L45 55 Z"
                className="fill-[var(--accent-gold)] animate-pulse"
                style={{ animationDuration: '3s' }}
            />
        </svg>
    </div>
);

export const ModernLogo = ({ light = false, scale = 1 }) => (
    <Link to="/" className="flex items-center gap-4 group">
        <LogoIcon scale={scale} />
        <div className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold tracking-[0.25em] leading-tight text-[var(--accent-gold)]" style={{ fontSize: `${scale * 1.5}rem` }}>
                BHAGWATI
            </h1>
            <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-[var(--accent-gold)]"></span>
                <span className="text-[9px] tracking-[0.5em] text-[var(--accent-gold)] font-bold uppercase" style={{ fontSize: `${scale * 0.5625}rem` }}>
                    Creations
                </span>
            </div>
        </div>
    </Link>
);
