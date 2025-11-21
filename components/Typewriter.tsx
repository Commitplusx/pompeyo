import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    cursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
    text,
    delay = 0,
    speed = 50,
    className = '',
    cursor = true
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsComplete(true);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && !isComplete && (
                <span className="animate-pulse border-r-2 border-brand-orange ml-1">&nbsp;</span>
            )}
        </span>
    );
};
