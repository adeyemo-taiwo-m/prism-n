export type MarketSource = 'Bayse' | 'Polymarket';
export type SignalType = 'INFORMED' | 'NOISE' | 'UNCERTAIN';

export interface MarketData {
  id: string;
  source: MarketSource;
  title: string;
  prismScore: number;
  pointsChange: number;
  signalType: SignalType;
  signalDirection: 'RISING' | 'FALLING' | 'STABLE';
  liquidity: string;
  velocity: string;
  orders: string;
  insight: string;
  lastUpdated: string;
  smartMoneyNarrative: string;
  trapRisk: 'HIGH' | 'MEDIUM' | 'LOW';
  trapReason: string;
  momentum: string;
  aiExplanation: string;
  actionGuidance: string;
  previousScore?: number;
}

export const mockMarkets: MarketData[] = [
  {
    id: '1',
    source: 'Bayse',
    title: 'Will the 10-year Treasury yield top 4.5% in Q4?',
    prismScore: 88,
    pointsChange: 7,
    signalType: 'INFORMED',
    signalDirection: 'RISING',
    liquidity: '$4.2M',
    velocity: '4.8x',
    orders: '3,240',
    insight: 'Unusual institutional whale activity detected across 4 orders.',
    lastUpdated: '12s ago',
    smartMoneyNarrative: 'Move driven by 3 significantly large institutional trades positioned heavily against the crowd sentiment.',
    trapRisk: 'LOW',
    trapReason: 'High liquidity absorption prevents rapid artificial spikes.',
    momentum: 'Strong buy pressure likely to continue through closing bell.',
    aiExplanation: 'Sustained buy pressure aligning with macroeconomic data releases supports the validity of the current move. The order book displays dense bids suggesting long-term conviction rather than short-term retail noise.',
    actionGuidance: 'Signal is heavily confirmed — highly actionable.',
    previousScore: 81
  },
  {
    id: '2',
    source: 'Bayse',
    title: 'Federal Reserve rate cut by July 2026?',
    prismScore: 79,
    pointsChange: -3,
    signalType: 'INFORMED',
    signalDirection: 'FALLING',
    liquidity: '$12.5M',
    velocity: '2.1x',
    orders: '8,901',
    insight: 'Volume consistent with broad market hedging operations.',
    lastUpdated: '45s ago',
    smartMoneyNarrative: 'Whales are systematically stepping back, distributing volume across smaller order blocks to avoid slippage.',
    trapRisk: 'LOW',
    trapReason: 'Broad distribution indicates structural rebalancing rather than a trap.',
    momentum: 'Gradual downward normalization anticipated.',
    aiExplanation: 'The current dip correlates perfectly with the recently published PPI data. Smart money participants are pulling limit orders down synchronously, leading to a natural price compression.',
    actionGuidance: 'Signal represents a legitimate trend change, safe to monitor.',
  },
  {
    id: '3',
    source: 'Polymarket',
    title: 'Bitcoin strictly above $120,000 before End of Year?',
    prismScore: 21,
    pointsChange: 12,
    signalType: 'NOISE',
    signalDirection: 'RISING',
    liquidity: '$22.1M',
    velocity: '5.2x',
    orders: '42,100',
    insight: 'Retail FOMO spike driven by anomalous social media trending.',
    lastUpdated: '2s ago',
    smartMoneyNarrative: 'The crowd is aggressively buying, but there are zero coordinated whale entries supporting this upward vector.',
    trapRisk: 'HIGH',
    trapReason: 'Rapid low-liquidity spike created an artificial vacuum. High likelihood of immediate reversion.',
    momentum: 'Highly unstable, likely to rapidly reverse once retail buying exhausts.',
    aiExplanation: 'This is a classic retail cascade driven by cross-platform virality rather than fundamental conviction. A lack of deep liquidity acting as a floor means this price action is exceptionally fragile.',
    actionGuidance: 'Avoid position entry. Extreme trap warning.',
    previousScore: 9
  },
  {
    id: '4',
    source: 'Bayse',
    title: 'Nvidia (NVDA) market cap exceeds Apple (AAPL) by Friday?',
    prismScore: 54,
    pointsChange: 0,
    signalType: 'UNCERTAIN',
    signalDirection: 'STABLE',
    liquidity: '$1.8M',
    velocity: '1.1x',
    orders: '1,890',
    insight: 'Market state is static; awaiting further directional catalysts.',
    lastUpdated: '3m ago',
    smartMoneyNarrative: 'Both smart money and retail flow are sitting tightly. No active distribution detected.',
    trapRisk: 'MEDIUM',
    trapReason: 'Current liquidity could easily be bullied by a single mid-tier whale trigger.',
    momentum: 'Sideways structural consolidation.',
    aiExplanation: 'The order book is perfectly symmetrical at current price levels. We are observing pure equilibrium. Nothing is forcing price action one way or the other based on real-time flow.',
    actionGuidance: 'Patience required. Await next confirmed volume spike.',
  },
  {
    id: '5',
    source: 'Polymarket',
    title: 'Trump to secure > 320 Electoral College Votes?',
    prismScore: 32,
    pointsChange: -8,
    signalType: 'NOISE',
    signalDirection: 'FALLING',
    liquidity: '$64.2M',
    velocity: '3.6x',
    orders: '124,500',
    insight: 'High velocity dumping correlating strongly with bot network flow.',
    lastUpdated: '1m ago',
    smartMoneyNarrative: 'A cluster of programmatic wallets are heavily offloading to retail dip-buyers.',
    trapRisk: 'HIGH',
    trapReason: 'The dump is manufactured. Rebound probable once bot liquidation completes.',
    momentum: 'Volatile forced-selling sequence currently underway.',
    aiExplanation: 'Analysis of transaction clusters reveals algorithmic selling algorithms aggressively clearing inventory into retail bids. This typically acts as a synthetic noise generator to harvest premium.',
    actionGuidance: 'Do not attempt to catch falling pressure; noise dominant.',
    previousScore: 40
  },
  {
    id: '6',
    source: 'Polymarket',
    title: 'Spot Ethereum ETF exact approval timeline met?',
    prismScore: 84,
    pointsChange: 4,
    signalType: 'INFORMED',
    signalDirection: 'RISING',
    liquidity: '$8.3M',
    velocity: '1.9x',
    orders: '5,024',
    insight: 'Silent, consistent accumulation by top 5% historic wallet addresses.',
    lastUpdated: '22s ago',
    smartMoneyNarrative: 'Historically accurate large-position traders are quietly accumulating below resistance lines.',
    trapRisk: 'LOW',
    trapReason: 'Accumulation is happening stealthily without moving the visible book drastically.',
    momentum: 'Sustained, hidden upward pressure likely to force a breakout.',
    aiExplanation: 'The discrepancy between visible public sentiment (which is neutral) and active on-chain accumulation is stark. High-win-rate participants are actively structuring positions in anticipation of an event.',
    actionGuidance: 'Signal is heavily confirmed — highly actionable.',
  }
];
