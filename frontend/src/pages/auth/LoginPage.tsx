import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { PrismLogo } from '../../components/brand/PrismLogo';
import { Button } from '../../components/ui/Button';
import { Eye, EyeOff } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const isValid = formData.email.includes('@') && formData.password.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Hit generic /me endpoint, fallback to App Dashboard entry
      navigate({ to: '/app' });
    }
  };

  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background aesthetic */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-prism-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[420px] bg-navy-mid/80 backdrop-blur-xl border border-border rounded-xl p-8 shadow-card relative z-10">
        <div className="flex justify-center mb-6">
          <PrismLogo size={32} />
        </div>
        <h2 className="text-2xl font-heading font-bold text-center text-text-primary mb-2">Welcome Back</h2>
        <p className="text-text-secondary text-sm text-center mb-8 font-body">Sign in to Prism Intelligence</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-text-secondary uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
              placeholder="trader@fund.com"
              className="bg-navy border border-border rounded-lg px-4 py-2.5 text-text-primary text-sm font-mono focus:border-prism-blue focus:outline-none transition-colors"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2 relative">
            <label className="font-mono text-xs text-text-secondary uppercase tracking-wider flex justify-between">
              <span>Password</span>
              <span className="text-prism-blue/60 hover:text-prism-blue cursor-pointer lowercase">forgot?</span>
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={formData.password}
                onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))}
                placeholder="••••••••"
                className="w-full bg-navy border border-border rounded-lg pl-4 pr-10 py-2.5 text-text-primary text-sm font-mono focus:border-prism-blue focus:outline-none transition-colors"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="mt-4" disabled={!isValid}>Log In</Button>
          
          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-xs text-text-secondary font-body">
              Don't have an account? <button type="button" onClick={() => navigate({ to: '/auth/signup' })} className="text-prism-blue hover:underline">Sign Up</button>
            </p>
            <div className="w-full h-px bg-border my-2"></div>
            <Button type="button" variant="ghost" size="sm" onClick={() => navigate({ to: '/app' })} className="text-text-muted text-xs">
              Demo Access (Bypass Auth)
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
