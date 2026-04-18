import React, { useState } from 'react';
import { useRouterState, useNavigate } from '@tanstack/react-router';
import { Button } from '../../components/ui/Button';
import { mockMarkets } from '../../data/mockMarkets';
import { Activity, BrainCircuit, ShieldAlert, TrendingUp, Target, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export function MarketAnalysisPage() {
  const routeState = useRouterState();
  const navigate = useNavigate();
  const [showCalc, setShowCalc] = useState(false);
  
  // @ts-ignore
  const marketId = routeState.location.pathname.split('/').pop();
  const market = mockMarkets.find(m => m.id === marketId) || mockMarkets[0];
  const isInformed = market.signalType === 'INFORMED';
  const isUncertain = market.signalType === 'UNCERTAIN';
  
  // Dynamic color assignments based on vector
  const scoreColorStr = isInformed ? 'text-emerald-400' : isUncertain ? 'text-slate-400' : 'text-amber-500';
  const bgStr = isInformed ? 'bg-emerald-400/10 border-emerald-400/20' : isUncertain ? 'bg-slate-400/10 border-slate-400/20' : 'bg-amber-500/10 border-amber-500/20';
  
  // Trap color
  const trapColor = market.trapRisk === 'HIGH' ? 'text-noise bg-noise-bg border-noise/20' : market.trapRisk === 'LOW' ? 'text-informed bg-informed-bg border-informed/20' : 'text-amber-400 bg-amber-400/10 border-amber-400/20';

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full pb-10">
      <div className="flex justify-between items-center bg-navy/80 backdrop-blur-md p-4 rounded-xl border border-border sticky top-16 z-40">
        <Button variant="ghost" size="sm" onClick={() => navigate({ to: '/app' })} className="w-max">← Back Feed</Button>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase bg-navy border border-border/60 px-2 py-0.5 rounded text-text-secondary tracking-widest">
            {market.source}
          </span>
          <span className="font-mono text-xs text-noise bg-noise-bg border border-noise/30 px-2 py-0.5 rounded animate-pulse-slow">LIVE O-BOOK</span>
        </div>
      </div>
      
      {/* Target Title */}
      <div className="mb-2">
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-text-primary leading-[1.25]">{market.title}</h1>
      </div>
      
      {/* --- GRID SPLIT --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Core Signal & Metrics */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Section 1: Main Signal */}
          <div className={`rounded-xl border p-6 flex flex-col items-center justify-center shadow-card relative overflow-hidden ${bgStr}`}>
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 bg-current rounded-full ${scoreColorStr} pointer-events-none`}></div>
            <h2 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2">PRISM Signal Score</h2>
            <div className={`font-mono text-7xl font-bold leading-none mb-4 ${scoreColorStr}`}>{market.prismScore}</div>
            
            <div className={`font-body font-bold tracking-wide text-sm px-4 py-1.5 rounded-full border bg-navy/50 backdrop-blur ${scoreColorStr} ${bgStr}`}>
               CLASSIFICATION: {market.signalType}
            </div>
            
            <div className="mt-6 w-full pt-4 border-t border-border/40 text-center relative z-10">
              <span className={`font-mono text-sm ${scoreColorStr} flex items-center justify-center gap-2`}>
                {market.signalDirection === 'RISING' ? <TrendingUp size={16}/> : '↓'} Vector: {market.pointsChange > 0 ? '+' : ''}{market.pointsChange} points
              </span>
            </div>
          </div>

          {/* Section 2: What's Happening */}
          <div className="bg-navy-mid border border-border rounded-xl p-5 shadow-card">
            <h3 className="font-heading text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Activity size={16} className="text-prism-cyan" /> What's Happening
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                 <span className="font-mono text-xs text-text-muted">Liquidity Book</span>
                 <span className="font-mono text-sm text-text-primary">{market.liquidity}</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                 <span className="font-mono text-xs text-text-muted">Velocity (24h)</span>
                 <span className="font-mono text-sm text-text-primary">{market.velocity}</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="font-mono text-xs text-text-muted">Active Orders</span>
                 <span className="font-mono text-sm text-text-primary">{market.orders}</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Intelligence Narratives */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Section 6: AI Explanation Box (Google Gemini Styled) */}
          <div className="bg-gradient-to-r from-prism-blue/10 to-transparent border border-prism-blue/30 rounded-xl p-6 relative overflow-hidden shadow-modal">
             <div className="flex items-center gap-2 mb-3">
                <BrainCircuit className="text-prism-cyan" size={20} />
                <h3 className="font-heading font-medium text-prism-cyan text-sm tracking-wide">Google Gemini AI Analysis</h3>
             </div>
             <p className="font-body text-sm text-text-primary leading-relaxed relative z-10">
               {market.aiExplanation}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Section 3: Smart Money Narrative */}
            <div className="bg-navy border border-border rounded-xl p-5 shadow-card h-full">
              <h3 className="font-heading text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                <Target size={16} className="text-text-secondary" /> Smart Money Context
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {market.smartMoneyNarrative}
              </p>
            </div>
            
            {/* Section 4: Trap Analysis */}
            <div className={`bg-navy border rounded-xl p-5 shadow-card border-l-4 ${market.trapRisk === 'HIGH' ? 'border-l-noise' : market.trapRisk === 'LOW' ? 'border-l-informed' : 'border-l-amber-400'} border-t-border border-r-border border-b-border h-full flex flex-col`}>
              <h3 className="font-heading text-sm font-semibold text-text-primary mb-3 flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert size={16} className="text-text-secondary" /> Trap Risk
                </div>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${trapColor}`}>
                  {market.trapRisk} RISK
                </span>
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed flex-1">
                {market.trapReason}
              </p>
            </div>
          </div>

          {/* Section 5 & 7: Momentum & Action Guidance */}
          <div className="bg-navy-mid border border-border rounded-xl p-5 shadow-card flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/50">
             <div className="flex-1 pb-4 md:pb-0 md:pr-5">
                <h3 className="font-heading text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <TrendingUp size={16} className="text-text-secondary" /> Momentum Projection
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {market.momentum}
                </p>
             </div>
             <div className="flex-1 pt-4 md:pt-0 md:pl-5 flex flex-col justify-center">
                <h3 className="font-heading text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <Zap size={16} className={scoreColorStr} /> Action Guidance
                </h3>
                <p className={`font-body font-medium text-sm ${scoreColorStr}`}>
                  {market.actionGuidance}
                </p>
             </div>
          </div>

          {/* Expander */}
          <div className="bg-navy border border-border border-dashed rounded-lg mt-2 overflow-hidden">
             <button 
               className="w-full flex items-center justify-between p-4 text-xs font-mono tracking-wide text-text-muted hover:text-text-primary transition-colors"
               onClick={() => setShowCalc(!showCalc)}
             >
               <span>View Scoring Logic & Parameters</span>
               {showCalc ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
             </button>
             {showCalc && (
               <div className="p-4 pt-0 border-t border-border/20 mt-2 bg-navy-mid/30">
                 <p className="font-mono text-[10px] text-emerald-400 whitespace-pre-wrap leading-relaxed opacity-80">
{`// PRISM INTELLIGENCE ALGORITHM
function calculatePrismScore(market) {
  const baseLiquidity = market.liquidityBase * 0.4;
  const instFlow = detectInstitutionalFlow(market.orderBook) * 0.35;
  const retailDev = calcRetailStandardDeviation(market.trades) * 0.25;
  return normalize(baseLiquidity + instFlow - retailDev);
}`}
                 </p>
               </div>
             )}
          </div>

        </div>
      </div>
    </div>
  );
}
