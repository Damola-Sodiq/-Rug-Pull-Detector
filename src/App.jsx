import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, Activity } from 'lucide-react';
import TokenAnalyzer from './components/TokenAnalyzer';
import RiskDashboard from './components/RiskDashboard';
import './index.css';

function App() {
  const [analyzedTokens, setAnalyzedTokens] = useState([]);

  const handleAnalysisComplete = (result) => {
    setAnalyzedTokens(prev => [result, ...prev].slice(0, 10));
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="glass-card m-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary-500 rounded-xl">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rug Pull Detector</h1>
              <p className="text-gray-400 text-sm">DeFi Token Scam Predictive Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Activity className="w-4 h-4" />
            <span>API Status: Online</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Token Analyzer */}
          <div>
            <TokenAnalyzer onAnalysisComplete={handleAnalysisComplete} />
          </div>

          {/* Risk Dashboard */}
          <div>
            <RiskDashboard analyzedTokens={analyzedTokens} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card m-4 p-4 text-center text-gray-400 text-sm">
        <p>Built with Rust + React | Predictive Modeling for DeFi Security</p>
      </footer>
    </div>
  );
}

export default App;
