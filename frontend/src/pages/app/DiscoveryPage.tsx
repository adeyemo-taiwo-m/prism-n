import React, { useLayoutEffect, useRef, useState } from 'react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from '@tanstack/react-router';
import { mockMarkets } from '../../data/mockMarkets';
import gsap from 'gsap';
import { Filter, Clock, Plus, Check } from 'lucide-react';

export function DiscoveryPage() {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'ALL' | 'BAYSE' | 'POLYMARKET'>('ALL');
  const [tracked, setTracked] = useState<Record<string, boolean>>({});

  // GSAP Animation cascade
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.market-card', 
        { opacity: 0, y: 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.08, 
          ease: 'power3.out', 
          clearProps: 'all' 
        }
      );
    }, container);
    return () => ctx.revert();
  }, [filter]);

  const filteredMarkets = mockMarkets.filter(m => {
    if (filter === 'ALL') return true;
    return m.source.toUpperCase() === filter;
  });

  const toggleTrack = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setTracked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col gap-6" ref={container}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/50 pb-4">
        <div>
          <h1 className="font-heading text-2xl text-text-primary mb-1">Discovery Feed</h1>
          <p className="font-body text-xs text-text-secondary">Real-time signal feed across prediction markets</p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
           <span className="font-mono text-xs text-text-muted flex items-center gap-1.5 mr-2">
             <Filter size={14} /> FILTERS:
           </span>
           <button onClick={() => setFilter('ALL')} className={`px-3 py-1.5 rounded-md font-mono text-[10px] sm:text-xs transition-colors ${filter === 'ALL' ? 'bg-prism-blue/20 text-prism-blue border border-prism-blue/30' : 'bg-navy border border-border text-text-secondary hover:text-text-primary'}`}>ALL</button>
           <button onClick={() => setFilter('BAYSE')} className={`px-3 py-1.5 rounded-md font-mono text-[10px] sm:text-xs transition-colors ${filter === 'BAYSE' ? 'bg-prism-blue/20 text-prism-blue border border-prism-blue/30' : 'bg-navy border border-border text-text-secondary hover:text-text-primary'}`}>BAYSE</button>
           <button onClick={() => setFilter('POLYMARKET')} className={`px-3 py-1.5 rounded-md font-mono text-[10px] sm:text-xs transition-colors ${filter === 'POLYMARKET' ? 'bg-prism-blue/20 text-prism-blue border border-prism-blue/30' : 'bg-navy border border-border text-text-secondary hover:text-text-primary'}`}>POLY</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMarkets.map(market => {
          const isInformed = market.signalType === 'INFORMED';
          const isUncertain = market.signalType === 'UNCERTAIN';
          
          let scoreColorStr = 'text-amber-500 bg-amber-500/10 border-amber-500/20'; // NOISe default
          let signalColorStr = 'text-amber-500';
          if (isInformed) {
            scoreColorStr = 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
            signalColorStr = 'text-emerald-400';
          } else if (isUncertain) {
            scoreColorStr = 'text-slate-400 bg-slate-400/10 border-slate-400/20';
            signalColorStr = 'text-text-secondary';
          }

          const ptsPrefix = market.pointsChange > 0 ? '+' : '';
          const ptsColor = market.pointsChange > 0 ? 'text-emerald-400' : market.pointsChange < 0 ? 'text-amber-500' : 'text-slate-400';

          return (
            <div 
              key={market.id} 
              className="market-card group relative bg-navy-mid border border-border hover:border-prism-blue/40 rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-card hover:shadow-modal flex flex-col h-full overflow-hidden"
              onClick={() => navigate({ to: `/app/markets/${market.id}` })}
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="font-mono text-[10px] uppercase bg-navy border border-border/60 px-2 py-1 rounded text-text-secondary tracking-widest shadow-sm">
                  {market.source}
                </span>
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border shadow-sm ${scoreColorStr}`}>
                  SCORE {market.prismScore}
                </span>
              </div>
              
              <h3 className="font-heading text-lg font-medium text-text-primary leading-[1.35] mb-4 pr-2 relative z-10 transition-colors group-hover:text-white">
                {market.title}
              </h3>

              {/* Intelligence Layer: Insight */}
              <div className="bg-navy border border-border/50 rounded-lg p-3 mb-5 mt-auto">
                <p className="font-body text-xs text-text-secondary flex gap-2">
                  <span className="text-prism-cyan flex-shrink-0">↳</span>
                  {market.insight}
                </p>
              </div>
              
              <div className="flex flex-col gap-3 border-t border-border/40 pt-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase flex items-center gap-1">
                      <Clock size={10} /> {market.lastUpdated}
                    </span>
                    <span className="font-mono text-sm text-text-primary">{market.liquidity} <span className="text-text-muted text-[10px]">VOL</span></span>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
                      Signal <span className={ptsColor}>({ptsPrefix}{market.pointsChange} pts)</span>
                    </span>
                    <span className={`font-body text-sm font-medium flex items-center gap-1 ${signalColorStr}`}>
                      {market.signalDirection === 'RISING' ? '↑' : market.signalDirection === 'FALLING' ? '↓' : '→'} {market.signalType}
                    </span>
                  </div>
                </div>

                <div className="w-full flex justify-end mt-1">
                  <button 
                    onClick={(e) => toggleTrack(e, market.id)}
                    className={`font-mono text-[10px] px-3 py-1.5 rounded transition-all flex items-center gap-1 ${tracked[market.id] ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-prism-blue/10 text-prism-blue border border-prism-blue/20 hover:bg-prism-blue/20'}`}
                  >
                    {tracked[market.id] ? <><Check size={12}/> TRACKED</> : <><Plus size={12}/> TRACK</>}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
