'use client';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

type AnimationStage = 'initial' | 'showU' | 'pullOut' | 'rotate' | 'hold' | 'expand';

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState<AnimationStage>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('showU'), 100);
    const timer2 = setTimeout(() => setStage('pullOut'), 800);
    const timer3 = setTimeout(() => setStage('rotate'), 1400);
    const timer4 = setTimeout(() => setStage('hold'), 2200);
    const timer5 = setTimeout(() => setStage('expand'), 2800);
    const timer6 = setTimeout(() => onComplete(), 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onComplete]);

  // SVG Arc component - U shape (square format)
  const ArcU = ({ className }: { className?: string }) => (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 15 10 L 15 40 Q 15 60, 35 60 Q 55 60, 55 40 L 55 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div
      className={`fixed inset-0 z-50 bg-black dark:bg-white flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        stage === 'expand' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* First U - stays in place */}
        <div
          className={`
            text-emerald-500 dark:text-red-600
            transition-all duration-700 ease-in-out
            w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]
            ${stage === 'initial' ? 'opacity-0' : 'opacity-100'}
            ${stage === 'expand' ? 'scale-125 opacity-0' : 'scale-100'}
          `}
        >
          <ArcU className="w-full h-full" />
        </div>

        {/* Second U/C - slides and rotates clockwise to form C */}
        <div
          className={`
            absolute left-0
            text-emerald-500 dark:text-red-600
            transition-all ease-in-out origin-center
            w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]
            ${stage === 'initial' || stage === 'showU' ? 'opacity-0 translate-x-0' : 'opacity-100'}
            ${stage === 'pullOut' ? 'translate-x-[74px] sm:translate-x-[94px] duration-700' : ''}
            ${stage === 'rotate' || stage === 'hold' ? 'translate-x-[74px] sm:translate-x-[94px] rotate-90 duration-700' : ''}
            ${stage === 'expand' ? 'translate-x-[74px] sm:translate-x-[94px] rotate-90 scale-125 opacity-0 duration-700' : ''}
          `}
        >
          <ArcU className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
