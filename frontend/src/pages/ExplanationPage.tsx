import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { PrismLogo } from '../components/brand/PrismLogo';
import { Button } from '../components/ui/Button';
import { mockMarkets } from '../data/mockMarkets';
import { Database, Server, Cpu, Clock, Activity, Target, ShieldAlert, Zap, TrendingUp, BrainCircuit } from 'lucide-react';

export function ExplanationPage() {
  const navigate = useNavigate();
  const demoMarket = mockMarkets[0];

  return (
    <div className="relative min-h-screen bg-void text-text-primary">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 px-6 md:px-12 flex items-center justify-between bg-navy/95 backdrop-blur-md border-b border-border">
        <div className="cursor-pointer" onClick={() => navigate({ to: '/' })}>
          <PrismLogo size={24} />
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate({ to: '/' })}>← Back Home</Button>
          <Button variant="primary" size="sm" onClick={() => navigate({ to: '/app' })}>Demo App</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-b border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prism-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 border border-prism-blue/40 bg-prism-blue/10 text-prism-cyan rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest">
            Architecture & Vision
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">Decoding Prediction Markets with <span className="text-prism-cyan">Institutional Logic</span>.</h1>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-3xl">
            Prediction markets are notoriously noisy. Prices swing wildly based on retail panic, social media FOMO, and unverified rumors. PRISM solves this by explicitly filtering out the noise to identify when a price vector is driven by genuine, informed "smart money" flow.
          </p>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16 flex flex-col gap-24">
        
        {/* Section 1: The UI Discovery Card Explained */}
        <section className="scroll-mt-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
             <Activity className="text-prism-cyan" /> 1. The Smart Feed (Discovery)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="flex flex-col gap-6 font-body text-text-secondary leading-relaxed">
               <p>
                 Our Discovery feed is essentially a "smart scanner". We don't just list markets like Bayse or Polymarket; we ingest them, score them live, and surface only actionable environments.
               </p>
               <ul className="space-y-6 mt-2">
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-navy border border-border flex items-center justify-center flex-shrink-0 text-white font-mono text-xs">1</div>
                   <div>
                     <strong className="text-text-primary block font-heading mb-1">Data Source Identity</strong>
                     <span className="text-sm">We aggregate across providers. The top-left badge explicitly traces the origin (Bayse vs. Polymarket), standardizing order book disparity into a single interface.</span>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-navy border border-border flex items-center justify-center flex-shrink-0 text-white font-mono text-xs">2</div>
                   <div>
                     <strong className="text-text-primary block font-heading mb-1">Active Prism Vector</strong>
                     <span className="text-sm">We identify the immediate vector (+7 pts) and classify the structural state as <span className="text-emerald-400">INFORMED</span>, <span className="text-amber-500">NOISE</span>, or <span className="text-slate-400">UNCERTAIN</span>.</span>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-navy border border-border flex items-center justify-center flex-shrink-0 text-white font-mono text-xs">3</div>
                   <div>
                     <strong className="text-text-primary block font-heading mb-1">Micro-Insights</strong>
                     <span className="text-sm">Users don't need to dig into the chart to know what's happening. The inline insight string drops absolute context (e.g. <em>"Unusual whale activity detected"</em>) straight to the feed.</span>
                   </div>
                 </li>
               </ul>
             </div>
             
             <div className="flex justify-center bg-navy w-full h-full min-h-[400px] border border-border/50 rounded-2xl items-center p-8 relative">
                {/* Replica Card */}
                <div className="max-w-[340px] w-full bg-navy-mid border border-prism-blue/40 rounded-xl p-5 shadow-glow-informed relative">
                  
                  {/* Callout Lines */}
                  <div className="flex absolute -left-8 md:-left-12 top-4 items-center gap-1 md:gap-2 pointer-events-none z-20">
                    <span className="font-mono text-[10px] text-text-muted bg-navy border border-border px-1.5 py-0.5 rounded shadow-xl">1</span>
                    <div className="w-4 md:w-6 h-px bg-border"></div>
                  </div>
                  
                  <div className="flex absolute -right-8 md:-right-12 top-4 flex-row-reverse items-center gap-1 md:gap-2 pointer-events-none z-20">
                     <span className="font-mono text-[10px] text-text-muted bg-navy border border-border px-1.5 py-0.5 rounded shadow-xl">2</span>
                     <div className="w-4 md:w-6 h-px bg-border"></div>
                  </div>

                  <div className="flex absolute -left-8 md:-left-12 top-[55%] items-center gap-1 md:gap-2 pointer-events-none z-20">
                    <span className="font-mono text-[10px] text-text-muted bg-navy border border-border px-1.5 py-0.5 rounded shadow-xl">3</span>
                    <div className="w-4 md:w-6 h-px bg-border"></div>
                  </div>

                  {/* Card Content Replica */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] uppercase bg-navy border border-border/60 px-2 py-1 rounded text-text-secondary tracking-widest shadow-sm">
                      {demoMarket.source}
                    </span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border shadow-sm text-emerald-400 bg-emerald-400/10 border-emerald-400/20">
                      SCORE {demoMarket.prismScore}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-text-primary leading-[1.35] mb-4 pr-2">
                    {demoMarket.title}
                  </h3>
                  <div className="bg-navy border border-border/50 rounded-lg p-3 mb-5 mt-auto">
                    <p className="font-body text-xs text-text-secondary flex gap-2">
                      <span className="text-prism-cyan flex-shrink-0">↳</span>
                      {demoMarket.insight}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase flex items-center gap-1">
                        <Clock size={10} /> 12s ago
                      </span>
                      <span className="font-mono text-sm text-text-primary">$4.2M <span className="text-text-muted text-[10px]">VOL</span></span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
                        Signal <span className="text-emerald-400">(+{demoMarket.pointsChange} pts)</span>
                      </span>
                      <span className="font-body text-sm font-medium flex items-center gap-1 text-emerald-400">
                        ↑ INFORMED
                      </span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        <hr className="border-border/50" />

        {/* Section 2: The Deep Dive Analysis */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
             <Target className="text-prism-cyan" /> 2. The 7-Layer Analysis Environment
          </h2>
          <p className="font-body text-text-secondary mb-10 max-w-3xl leading-relaxed">
             When a user zeroes in on a market, the application expands beyond metrics to provide narrative, predictive context. 
             This view empowers the trader with the exact same data logic utilized in premium institutional arbitrage setups.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-navy-mid border border-border p-6 rounded-xl shadow-card flex flex-col">
                <Target className="text-prism-cyan mb-4" size={24} />
                <h3 className="font-heading font-semibold text-text-primary mb-1">Smart Money Context</h3>
                <div className="mb-4 text-[10px] text-prism-cyan font-mono border-b border-border/30 pb-2 leading-tight uppercase tracking-wider">Stop guessing. Ride institutional coattails instead of being their exit liquidity.</div>
                <p className="font-body text-sm text-text-secondary leading-relaxed space-y-2">
                  We calculate explicit distribution curves analyzing individual order depth against broad retail sweeps to identify hidden institutional whale buildup before prices pop.
                </p>
             </div>
             <div className="bg-navy-mid border border-border border-l-4 border-l-noise p-6 rounded-xl shadow-card flex flex-col">
                <ShieldAlert className="text-noise mb-4" size={24} />
                <h3 className="font-heading font-semibold text-text-primary mb-1">Trap Risk Designation</h3>
                <div className="mb-4 text-[10px] text-noise font-mono border-b border-border/30 pb-2 leading-tight uppercase tracking-wider">Saves you from buying fake price spikes manufactured by spoofed orders.</div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  Thin order books are prime targets for liquidity manufacturing. A high Trap Risk indicates that a price spike was artificially generated via low-cost spoofing.
                </p>
             </div>
             <div className="bg-navy-mid border border-border p-6 rounded-xl shadow-card flex flex-col">
                <TrendingUp className="text-emerald-400 mb-4" size={24} />
                <h3 className="font-heading font-semibold text-text-primary mb-1">Momentum Engine</h3>
                <div className="mb-4 text-[10px] text-emerald-400 font-mono border-b border-border/30 pb-2 leading-tight uppercase tracking-wider">Know exactly when to hold for continuation or take profits before a mean-reversion.</div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  A pure structural projection estimating whether the observed behavioral pattern points toward continuous trajectory or immediate vector snapping.
                </p>
             </div>
             <div className="bg-navy-mid border border-border p-6 rounded-xl shadow-card flex flex-col">
                <Zap className="text-amber-400 mb-4" size={24} />
                <h3 className="font-heading font-semibold text-text-primary mb-1">Action Guidance</h3>
                <div className="mb-4 text-[10px] text-amber-400 font-mono border-b border-border/30 pb-2 leading-tight uppercase tracking-wider">Cuts through analysis paralysis giving you a direct strategic verdict.</div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  The executive summary. Synthesizes every other layer into a binary instructional directive: to fade the noise, execute the trade, or hold and monitor.
                </p>
             </div>
             <div className="bg-gradient-to-r from-prism-blue/10 to-transparent border border-prism-blue/30 lg:col-span-2 p-6 rounded-xl shadow-modal flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="text-prism-cyan" size={24} />
                  <h3 className="font-heading font-semibold text-prism-cyan">Powered By Google Gemini</h3>
                </div>
                <div className="mb-4 text-[10px] text-prism-cyan/70 font-mono border-b border-prism-blue/20 pb-2 leading-tight uppercase tracking-wider">Turns impossible-to-read liquidity matrices into a clear English narrative.</div>
                <p className="font-body text-sm text-text-primary leading-relaxed relative z-10 w-full md:w-4/5">
                  Raw data numbers are notoriously hard to read under pressure. The Analysis Hub hooks into Gemini API pipelines to dynamically transcribe complex structural logic formulas into flawless human-readable strategic sentences automatically updating per frame.
                </p>
             </div>
          </div>
        </section>

      </main>
      
      {/* Footer CTA */}
      <div className="border-t border-border/40 py-12 text-center bg-navy/30">
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">Stop trading blind. Follow the signal.</h2>
        <Button variant="primary" size="lg" onClick={() => navigate({ to: '/app' })}>Launch Demonstration Workspace</Button>
      </div>

    </div>
  );
}
