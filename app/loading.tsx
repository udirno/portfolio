export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        {/* Spinning pyramid loader */}
        <div className="w-16 h-16 relative animate-spin">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M 50 20 L 20 80 L 80 80 Z"
              fill="url(#loaderGradient)"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Pulsing glow effect */}
        <div className="absolute inset-0 animate-pulse">
          <div className="w-24 h-24 -translate-x-4 -translate-y-4 rounded-full bg-red-600/20 blur-xl" />
        </div>
      </div>
    </div>
  );
}
