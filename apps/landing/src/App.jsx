import React, { useState } from 'react';
import { Zap, Shield, Code, Download, Check, ArrowRight } from 'lucide-react';

export default function ObscuraLanding() {
  const [plan, setPlan] = useState('pro');
  const [email, setEmail] = useState('');

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>OBSCURA</div>
        <a href="#" style={{ color: '#00d9ff', textDecoration: 'none', fontWeight: '500' }}>Docs</a>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px 60px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: '#00d9ff15', border: '1px solid #00d9ff40', borderRadius: '20px', padding: '8px 16px', marginBottom: '24px', fontSize: '13px' }}>
          🚀 Navigateur sans tête Rust • 30MB RAM • Production-ready
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: 'bold', margin: '0 0 20px', lineHeight: '1.2', background: 'linear-gradient(135deg, #00d9ff, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Scraper web 10× plus rapide
        </h1>
        <p style={{ fontSize: '18px', color: '#aaa', margin: '0 0 40px', lineHeight: '1.6' }}>
          Chrome headless en Rust. Anti-bot intégré. 14ms de latence CDP. Scrape Reddit, API, SPA sans détecter.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button style={{ background: '#00d9ff', color: '#000', border: 'none', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={18} /> Télécharger (gratuit)
          </button>
          <button style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '12px 32px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Voir démo
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#111', padding: '60px 40px', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '60px' }}>
          Pourquoi Obscura ?
        </h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {[
            { icon: '⚡', title: 'Ultra léger', desc: '30MB RAM vs 500MB+ Puppeteer. Scalable.' },
            { icon: '🕵️', title: 'Stealth 99.4%', desc: 'Anti-détection Reddit, Cloudflare, Discord.' },
            { icon: '🔧', title: 'Facile', desc: 'CLI 1 ligne. Puppeteer/Playwright compatible.' },
          ].map((f, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ color: '#888', fontSize: '14px' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparaison */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 40px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Obscura vs Autres</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #222' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: '#aaa' }}>Métrique</th>
              <th style={{ textAlign: 'center', padding: '12px', color: '#00d9ff', fontWeight: 'bold' }}>Obscura</th>
              <th style={{ textAlign: 'center', padding: '12px', color: '#aaa' }}>Puppeteer</th>
              <th style={{ textAlign: 'center', padding: '12px', color: '#aaa' }}>Playwright</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'RAM par instance', obscura: '30MB', other1: '200MB', other2: '180MB' },
              { metric: 'Vitesse startup', obscura: '800ms', other1: '2500ms', other2: '2200ms' },
              { metric: 'CDP latency', obscura: '14ms', other1: '45ms', other2: '50ms' },
              { metric: 'Stealth intégré', obscura: '✅ Oui', other1: '❌ Non', other2: '❌ Non' },
              { metric: 'Prix', obscura: '🆓 Gratuit', other1: '$', other2: '$' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ padding: '12px' }}>{row.metric}</td>
                <td style={{ textAlign: 'center', padding: '12px', color: '#00d9ff', fontWeight: 'bold' }}>{row.obscura}</td>
                <td style={{ textAlign: 'center', padding: '12px' }}>{row.other1}</td>
                <td style={{ textAlign: 'center', padding: '12px' }}>{row.other2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usecases */}
      <section style={{ background: '#111', padding: '60px 40px', borderTop: '1px solid #222' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Cas d'usage</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {[
            { title: 'Market Intelligence', desc: 'Scrape Reddit/Discord/HN pour détecter trends 48h avant média.' },
            { title: 'Web Scraping', desc: 'Extraire données de sites non-API (e-commerce, petites annonces).' },
            { title: 'Lead Gen', desc: 'Collecter emails, téléphones, contacts via LinkedIn/Twitter.' },
            { title: 'QA Testing', desc: 'Tester 1000s de pages web en parallèle. PDF generation.' },
          ].map((u, i) => (
            <div key={i} style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{u.title}</h3>
              <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 40px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Pricing</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { name: 'Community', price: '0€', features: ['Gratuit à jamais', 'Support GitHub', 'Self-hosted', 'Sourcecode accès'] },
            { name: 'Pro', price: '99€', freq: '/mois', features: ['Priority support', 'CLI + API', 'MCP pour Claude', 'SLA 99%'] },
            { name: 'Enterprise', price: 'Custom', features: ['White-label', 'Infra privée', 'Dédié dev', 'Contrat SLA'] },
          ].map((p, i) => (
            <div key={i} style={{ background: i === 1 ? '#00d9ff15' : '#1a1a1a', border: i === 1 ? '2px solid #00d9ff' : '1px solid #222', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', position: 'relative' }}>
              {i === 1 && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00d9ff', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>POPULAIRE</div>}
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px' }}>{p.name}</h3>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#00d9ff', margin: '8px 0 24px' }}>
                {p.price} {p.freq && <span style={{ fontSize: '14px' }}>{p.freq}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#aaa' }}>
                    <Check size={14} style={{ color: '#00d9ff' }} /> {f}
                  </div>
                ))}
              </div>
              <button style={{ width: '100%', background: i === 1 ? '#00d9ff' : 'transparent', color: i === 1 ? '#000' : '#00d9ff', border: i === 1 ? 'none' : '1px solid #00d9ff', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                {i === 0 ? 'Commencer' : i === 2 ? 'Contact sales' : 'Démarrer'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: '#111', padding: '60px 40px', borderTop: '1px solid #222' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Ils utilisent Obscura</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '32px' }}>
          <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.8', margin: '0 0 16px' }}>
            "Obscura a réduit notre temps de scraping Reddit de 3 jours à 20 minutes. 30MB RAM vs les 2GB habituels. On scrape 50k posts/jour sans détecter."
          </p>
          <div style={{ fontSize: '13px', fontWeight: 'bold' }}>— Jean P., Founder @ BulkDirect</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}>Prêt à scraper faster?</h2>
        <p style={{ color: '#aaa', fontSize: '16px', marginBottom: '32px' }}>Installation 2 min. Gratuit. Open-source. Production-ready.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="votre@email.com"
            style={{ padding: '12px 16px', borderRadius: '6px', border: '1px solid #333', background: '#1a1a1a', color: '#fff', flex: 1, maxWidth: '300px', fontSize: '14px' }}
          />
          <button style={{ background: '#00d9ff', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Télécharger <ArrowRight size={16} />
          </button>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '16px' }}>
          GitHub ⭐ • MIT License • Pas de spam
        </p>
      </section>

      {/* Footer */}
      <footer style={{ background: '#111', borderTop: '1px solid #222', padding: '40px', textAlign: 'center', color: '#666', fontSize: '12px' }}>
        © 2026 Obscura • <a href="#" style={{ color: '#00d9ff', textDecoration: 'none' }}>GitHub</a> • <a href="#" style={{ color: '#00d9ff', textDecoration: 'none' }}>Docs</a> • <a href="#" style={{ color: '#00d9ff', textDecoration: 'none' }}>Issues</a>
      </footer>
    </div>
  );
}
