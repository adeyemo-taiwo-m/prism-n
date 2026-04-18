import React, { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { mockMarkets } from '../../data/mockMarkets';
import { Activity, Clock } from 'lucide-react';

export function TrackerPage() {
  const navigate = useNavigate();
  // Pre-seed with actual volatile markets natively to prevent empty state per intelligence plan
  const trackedMarkets = [mockMarkets[0], mockMarkets[2], mockMarkets[4]];
  
  const [syncTimer, setSyncTimer] = useState(12);

  // Fake live polling
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncTimer(prev => (prev >= 30 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/50 pb-4">
        <div>
          <h1 className="font-heading text-2xl text-text-primary mb-1">Your Tracker</h1>
          <p className="font-body text-xs text-text-secondary">Live signal synchronization active.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center gap-3">
           <div className="flex items-center gap-2 border border-noise/30 bg-noise-bg rounded-lg px-3 py-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-noise animate-pulse-slow" />
             <span className="font-mono text-[10px] text-noise uppercase tracking-wider">LIVE WEBSOCKET</span>
           </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        {trackedMarkets.map(market => {
          const isInformed = market.signalType === 'INFORMED';
          const scoreColorStr = isInformed ? 'text-emerald-400' : 'text-amber-500';
          const badgeBg = isInformed ? 'bg-emerald-400/10 border-emerald-400/20' : 'bg-amber-500/10 border-amber-500/20';

          return (
             <div 
              key={market.id} 
              className="group relative bg-navy-mid border border-border border-l-4 border-l-prism-blue rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-card hover:shadow-modal flex flex-col md:flex-row gap-6 md:items-center"
              onClick={() => navigate({ to: `/app/markets/${market.id}` })}
            >
              {/* Left Column: Core Identity */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase bg-navy border border-border/60 px-2 py-0.5 rounded text-text-secondary tracking-widest shadow-sm">
                    {market.source}
                  </span>
                  <span className="font-mono text-[9px] text-text-muted flex items-center gap-1">
                    <Clock size={10} /> Last synced {syncTimer}s ago
                  </span>
                </div>
                <h3 className="font-heading text-lg font-medium text-text-primary leading-tight group-hover:text-white transition-colors">
                  {market.title}
                </h3>
              </div>
              
              {/* Middle Column: Live Intelligence */}
              <div className="flex-1 bg-navy/50 border border-border/50 rounded-lg p-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-prism-blue/5 rounded-full blur-2xl"></div>
                <p className="font-body text-sm text-text-secondary w-full z-10 relative">
                  "{market.insight}"
                </p>
                {market.previousScore && (
                  <div className="mt-3 font-mono text-[10px] flex items-center gap-1.5 opacity-80">
                    <Activity size={12} className={scoreColorStr} />
                    <span className="text-text-muted">Jumped from</span>
                    <span className="text-slate-400 line-through">{market.previousScore}</span>
                    <span className="text-text-muted">→</span>
                    <span className={`${scoreColorStr} font-bold`}>{market.prismScore}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Score Engine */}
              <div className="flex flex-col items-end min-w-[120px]">
                 <div className={`font-mono text-3xl font-bold ${scoreColorStr}`}>
                   {market.prismScore}
                 </div>
                 <div className={`font-mono text-[10px] px-2 py-0.5 rounded border mt-1 ${scoreColorStr} ${badgeBg}`}>
                    {market.signalDirection === 'RISING' ? '↑' : '↓'} {market.signalType}
                 </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
