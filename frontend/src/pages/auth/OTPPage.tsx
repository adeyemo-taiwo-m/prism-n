import React, { useState } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { PrismLogo } from '../../components/brand/PrismLogo';
import { Button } from '../../components/ui/Button';

export function OTPPage() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const search = routerState.location.search as any;
  const email = search?.email || 'user@example.com';
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      navigate({ to: '/auth/login' });
    }
  };

  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-navy-mid border border-border rounded-xl p-8 shadow-card">
        <div className="flex justify-center mb-8">
          <PrismLogo size={36} />
        </div>
        <h2 className="text-2xl font-heading font-bold text-center mb-2">Verify Email</h2>
        <p className="text-text-secondary text-sm text-center mb-8">We sent a 6-digit code to <span className="text-text-primary font-mono">{email}</span></p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-body text-sm text-text-secondary mb-2 text-center">Enter Code</label>
            <input 
              type="text" 
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-text-primary text-center font-mono text-2xl tracking-[0.5em] focus:outline-none focus:border-border-bright"
              placeholder="000000"
              required
            />
          </div>
          <Button type="submit" variant="primary" size="lg" className="mt-2" disabled={otp.length !== 6}>Verify Code</Button>
          <Button type="button" variant="ghost" size="sm" className="mt-2" onClick={() => navigate({ to: '/auth/signup' })}>Back to Signup</Button>
        </form>
      </div>
    </div>
  );
}
