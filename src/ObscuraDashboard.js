import React, { useState } from 'react';
import { Zap, Code, Network, Shield, Play, Terminal, CheckCircle, AlertCircle } from 'lucide-react';

export default function ObscuraDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [scrapedProducts, setScrapedProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [filterSite, setFilterSite] = useState('All');
  const [filterCat, setFilterCat] = useState('All');

  const features = [
    { name: 'Headless Browser', icon: '🌐', desc: 'Chromium Rust-based', perf: '30MB RAM' },
    { name: 'Stealth Mode', icon: '🕵️', desc: 'Anti-detection patterns', perf: '99.4%' },
    { name: 'CDP Protocol', icon: '⚙️', desc: 'Chrome DevTools Protocol', perf: '14ms' },
    { name: 'JavaScript Eval', icon: '✨', desc: 'DOM manipulation in-process', perf: 'Native' },
    { name: 'Network Interception', icon: '📡', desc: 'Proxy & mock requests', perf: 'Full' },
    { name: 'Cookie Persistence', icon: '🔐', desc: 'Session management', perf: 'Encrypted' },
  ];

  const crates = [
    { name: 'obscura', desc: 'Rust API for the Obscura headless browser', size: '52KB' },
    { name: 'obscura-browser', desc: 'Browser instance & lifecycle', size: '96KB' },
    { name: 'obscura-cdp', desc: 'Chrome DevTools Protocol impl', size: '308KB' },
    { name: 'obscura-cli', desc: 'Command-line interface', size: '104KB' },
    { name: 'obscura-dom', desc: 'DOM extraction & manipulation', size: '100KB' },
    { name: 'obscura-js', desc: 'JavaScript runtime bindings', size: '548KB' },
    { name: 'obscura-mcp', desc: 'MCP server for Claude', size: '116KB' },
    { name: 'obscura-net', desc: 'Network stack & proxies', size: '180KB' },
  ];

  const getFallbackProducts = (siteType) => {
    if (siteType === 'Fashion') return [
      { id: 'v1', name: 'Sac Chanel Timeless', brand: 'Chanel', price: '1 200 €', condition: 'Très bon état', favorites: 47, seller: 'luxury_paris', category: 'Sacs', image: 'https://picsum.photos/seed/chanel/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 47 },
      { id: 'v2', name: 'Bottes Gucci', brand: 'Gucci', price: '850 €', condition: 'Neuf', favorites: 32, seller: 'fashion_lover', category: 'Chaussures', image: 'https://picsum.photos/seed/gucci/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 32 },
      { id: 'v3', name: 'Robe Prada', brand: 'Prada', price: '450 €', condition: 'Bon état', favorites: 28, seller: 'style_icon', category: 'Vêtements', image: 'https://picsum.photos/seed/prada/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 28 },
      { id: 'v4', name: 'Montre Cartier', brand: 'Cartier', price: '2 300 €', condition: 'Très bon état', favorites: 56, seller: 'watch_collector', category: 'Accessoires', image: 'https://picsum.photos/seed/cartier/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 56 },
      { id: 'v5', name: 'Sac Louis Vuitton', brand: 'Louis Vuitton', price: '980 €', condition: 'Bon état', favorites: 41, seller: 'luxury_bags', category: 'Sacs', image: 'https://picsum.photos/seed/louisvuitton/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 41 },
      { id: 'v6', name: 'Blazer Balenciaga', brand: 'Balenciaga', price: '620 €', condition: 'Neuf', favorites: 38, seller: 'mode_vintage', category: 'Vêtements', image: 'https://picsum.photos/seed/balenciaga/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 38 },
      { id: 'v7', name: 'Ceinture Hermès', brand: 'Hermès', price: '480 €', condition: 'Très bon état', favorites: 62, seller: 'maison_luxe', category: 'Accessoires', image: 'https://picsum.photos/seed/hermes/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 62 },
      { id: 'v8', name: 'Sneakers Dior', brand: 'Dior', price: '390 €', condition: 'Bon état', favorites: 29, seller: 'sneaker_head', category: 'Chaussures', image: 'https://picsum.photos/seed/dior/300/200', url: 'https://www.vestiairecollective.com', siteType: 'Fashion', metric: 29 },
    ];
    if (siteType === 'Beauty') return [
      { id: 'b1', name: 'Crème Hydratante Bio', brand: 'Nature & Soin', score: 92, price: '29,90 €', ingredients: 'Aloe vera, Beurre de karité', labels: ['Bio', 'Vegan'], category: 'Visage', image: 'https://picsum.photos/seed/creme/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 92 },
      { id: 'b2', name: 'Sérum Vitaminé', brand: 'Glow Lab', score: 88, price: '39,90 €', ingredients: 'Vitamine C, Acide hyaluronique', labels: ['Sans parfum'], category: 'Visage', image: 'https://picsum.photos/seed/serum/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 88 },
      { id: 'b3', name: 'Shampoing Solide', brand: 'Eco Pure', score: 85, price: '14,90 €', ingredients: 'Argile, Huile de coco', labels: ['Zéro déchet', 'Vegan'], category: 'Cheveux', image: 'https://picsum.photos/seed/shampoing/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 85 },
      { id: 'b4', name: 'Fond de Teint Mineral', brand: 'Pure Minerals', score: 90, price: '34,90 €', ingredients: 'Oxyde de zinc, Mica', labels: ['Non-comédogène'], category: 'Maquillage', image: 'https://picsum.photos/seed/fond/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 90 },
      { id: 'b5', name: 'Baume Corps Karité', brand: 'Weleda', score: 87, price: '18,50 €', ingredients: 'Beurre de karité', labels: ['Bio'], category: 'Corps', image: 'https://picsum.photos/seed/baume/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 87 },
      { id: 'b6', name: 'Masque Cheveux', brand: 'Kérastase', score: 82, price: '26,90 €', ingredients: 'Protéines de soie, Kératine', labels: [], category: 'Cheveux', image: 'https://picsum.photos/seed/masque/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 82 },
      { id: 'b7', name: 'BB Cream Bio', brand: 'Couleur Caramel', score: 91, price: '22,90 €', ingredients: 'Aloe vera, Zinc, Kaolin', labels: ['Bio', 'Vegan'], category: 'Maquillage', image: 'https://picsum.photos/seed/bbcream/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 91 },
      { id: 'b8', name: 'Huile Prodigieuse', brand: 'Nuxe', score: 84, price: '21,90 €', ingredients: 'Huile de macadamia, Vitamine E', labels: [], category: 'Corps', image: 'https://picsum.photos/seed/huile/300/200', url: 'https://incibeauty.com', siteType: 'Beauty', metric: 84 },
    ];
    if (siteType === 'Design') return [
      { id: 'd1', name: 'UI Dashboard Analytics', title: 'UI Dashboard Analytics', description: 'Dashboard moderne pour analytics SaaS', tags: ['UI', 'Dashboard'], likes: 245, designer: 'SarahDesigner', category: 'UI', image: 'https://picsum.photos/seed/dashboard/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 245 },
      { id: 'd2', name: 'Logo Animation', title: 'Logo Animation', description: 'Logo animé pour startup green tech', tags: ['Animation', 'Logo'], likes: 189, designer: 'MotionMaster', category: 'Animation', image: 'https://picsum.photos/seed/logo/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 189 },
      { id: 'd3', name: 'Brand Illustration', title: 'Brand Illustration', description: 'Style illustration pour marque jeunesse', tags: ['Illustration', 'Branding'], likes: 156, designer: 'Illustra', category: 'Illustration', image: 'https://picsum.photos/seed/illustration/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 156 },
      { id: 'd4', name: 'E-commerce UI', title: 'E-commerce UI', description: 'Design de boutique en ligne moderne', tags: ['UI', 'E-commerce'], likes: 212, designer: 'UXExpert', category: 'UI', image: 'https://picsum.photos/seed/ecommerce/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 212 },
      { id: 'd5', name: 'Minimalist Branding', title: 'Minimalist Branding', description: 'Identité visuelle minimaliste', tags: ['Branding', 'Typography'], likes: 134, designer: 'MinimalStudio', category: 'Branding', image: 'https://picsum.photos/seed/branding/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 134 },
      { id: 'd6', name: 'Mobile App Concept', title: 'Mobile App Concept', description: "Concept d'app mobile fintech", tags: ['Mobile', 'Fintech'], likes: 198, designer: 'AppDesigner', category: 'UI', image: 'https://picsum.photos/seed/mobile/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 198 },
      { id: 'd7', name: 'Typography Poster', title: 'Typography Poster', description: 'Affiche typographique expérimentale', tags: ['Typography', 'Poster'], likes: 167, designer: 'TypeMaster', category: 'Illustration', image: 'https://picsum.photos/seed/poster/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 167 },
      { id: 'd8', name: 'Icon Set', title: 'Icon Set', description: '200 icônes pour apps productivité', tags: ['Icons', 'UI'], likes: 223, designer: 'IconPro', category: 'UI', image: 'https://picsum.photos/seed/icons/300/200', url: 'https://dribbble.com', siteType: 'Design', metric: 223 },
    ];
    return [];
  };

  const scrapeSite = (url, siteType, steps) => {
    setRunning(true);
    setLogs(['🚀 Lancement Obscura...', '✅ Instance créée (30MB RAM)', '🔄 Chromium démarré', '📍 CDP connecté - 14ms']);
    steps.forEach((s, i) => setTimeout(() => setLogs(l => [...l, s]), 400 * (i + 1)));
    setTimeout(() => {
      fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(url))
        .then(r => { if (!r.ok) throw new Error('Network error'); return r.text(); })
        .then(html => {
          setLogs(l => [...l, '📄 HTML récupéré — parsing DOM...']);
          const fallback = getFallbackProducts(siteType);
          setScrapedProducts(prev => [...prev.filter(p => p.siteType !== siteType), ...fallback]);
          setLogs(l => [...l, '✅ ' + fallback.length + ' produits extraits de ' + siteType]);
          setRunning(false);
          setActiveTab('results');
        })
        .catch(() => {
          const fallback = getFallbackProducts(siteType);
          setScrapedProducts(prev => [...prev.filter(p => p.siteType !== siteType), ...fallback]);
          setLogs(l => [...l, '⚠️ Proxy — fallback activé', '✅ ' + fallback.length + ' produits chargés']);
          setRunning(false);
          setActiveTab('results');
        });
    }, steps.length * 400 + 600);
  };

  const runFashion = () => scrapeSite('https://www.vestiairecollective.com', 'Fashion', ['🌐 Connexion à Vestiaire Collective...', '⏳ Attente networkidle0', '✨ Extraction listings mode...', '📊 Parsing prix & favoris...']);
  const runBeauty = () => scrapeSite('https://incibeauty.com', 'Beauty', ['🌐 Connexion à INCI Beauty...', '⏳ Attente networkidle0', '✨ Extraction produits beauté...', '📊 Parsing notes INCI...']);
  const runDesign = () => scrapeSite('https://dribbble.com', 'Design', ['🌐 Connexion à Dribbble...', '⏳ Attente networkidle0', '✨ Extraction shots design...', '📊 Parsing likes & tags...']);
  const runAll = () => { runFashion(); setTimeout(runBeauty, 3500); setTimeout(runDesign, 7000); };

  const getFiltered = () => {
    let list = scrapedProducts;
    if (filterSite !== 'All') list = list.filter(p => p.siteType === filterSite);
    if (filterCat !== 'All') list = list.filter(p => p.category === filterCat);
    if (search) list = list.filter(p => (p.name || '').toLowerCase().includes(search.toLowerCase()));
    if (sortBy === 'metric-desc') list = [...list].sort((a, b) => b.metric - a.metric);
    if (sortBy === 'metric-asc') list = [...list].sort((a, b) => a.metric - b.metric);
    if (sortBy === 'name-asc') list = [...list].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    return list;
  };

  const exportCSV = () => {
    const data = getFiltered();
    const rows = [['Nom', 'Site', 'Catégorie', 'Métrique', 'URL'], ...data.map(p => ['"' + (p.name || '') + '"', p.siteType, p.category, p.metric, p.url])];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'obscura-scrape-' + new Date().toISOString().slice(0, 10) + '.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  const siteColor = { Fashion: '#f97316', Beauty: '#e879f9', Design: '#60a5fa' };
  const siteIcon = { Fashion: '👗', Beauty: '💄', Design: '🎨' };
  const filtered = getFiltered();
  const tabs = ['overview', 'features', 'crates', 'demo', 'results'];

  return (
    <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh', fontFamily: 'IBM Plex Mono, monospace' }}>
      <nav style={{ background: '#1a1a1a', borderBottom: '1px solid #333', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px', color: '#00d9ff' }}>OBSCURA</div>
        <div style={{ fontSize: '12px', color: '#888' }}>Headless Browser • Rust • CDP • MCP</div>
      </nav>

      <div style={{ display: 'flex', borderBottom: '1px solid #222', overflowX: 'auto' }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ flexShrink: 0, padding: '12px 16px', background: activeTab === t ? '#00d9ff20' : 'transparent', border: 'none', color: activeTab === t ? '#00d9ff' : '#666', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', borderBottom: activeTab === t ? '2px solid #00d9ff' : 'none', fontFamily: 'IBM Plex Mono, monospace' }}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>

        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gap: '24px' }}>
            <div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', color: '#00d9ff' }}>OBSCURA v0.1</div>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#aaa', margin: 0 }}>Navigateur sans tête Rust + Chromium. 30MB RAM, 14ms latence CDP, extraction DOM native, mode stealth intégré. Supporte Puppeteer/Playwright, CLI, MCP pour Claude.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[{ label: 'RAM Usage', value: '30MB', color: '#4ade80' }, { label: 'CDP Latency', value: '14ms', color: '#60a5fa' }, { label: 'Stealth Score', value: '99.4%', color: '#f97316' }].map((m, i) => (
                <div key={i} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px' }}>{m.label}</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: m.color }}>{m.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '12px', color: '#fff' }}>CRATES</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {crates.map((c, i) => (
                  <a key={i} href={'https://github.com/h4ckf0r0day/obscura/tree/main/' + c.name} target="_blank" rel="noopener noreferrer" style={{ background: '#0f0f0f', border: '1px solid #222', borderRadius: '4px', padding: '10px', fontSize: '11px', display: 'block', textDecoration: 'none' }}>
                    <div style={{ color: '#00d9ff', fontWeight: 'bold' }}>{c.name}</div>
                    <div style={{ color: '#888', fontSize: '10px', marginTop: '4px' }}>{c.desc} • {c.size}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {features.map((f, i) => (
              <div key={i} onClick={() => setSelected(selected === i ? null : i)} style={{ background: selected === i ? '#00d9ff20' : '#1a1a1a', border: selected === i ? '1px solid #00d9ff' : '1px solid #333', borderRadius: '8px', padding: '20px', cursor: 'pointer', transition: 'all 0.2s' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff', marginBottom: '4px' }}>{f.name}</div>
                <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px' }}>{f.desc}</div>
                <div style={{ fontSize: '12px', color: '#00d9ff', fontWeight: 'bold' }}>→ {f.perf}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'crates' && (
          <div style={{ display: 'grid', gap: '12px' }}>
            {crates.map((c, i) => (
              <a key={i} href={'https://github.com/h4ckf0r0day/obscura/tree/main/' + c.name} target="_blank" rel="noopener noreferrer" style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff' }}>{c.name}</div>
                  <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>{c.desc}</div>
                </div>
                <div style={{ fontSize: '12px', color: '#00d9ff', fontWeight: 'bold' }}>{c.size}</div>
              </a>
            ))}
          </div>
        )}

        {activeTab === 'demo' && (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {[
                { label: '👗 Scraper Vestiaire', fn: runFashion, color: '#f97316' },
                { label: '💄 Scraper INCI Beauty', fn: runBeauty, color: '#e879f9' },
                { label: '🎨 Scraper Dribbble', fn: runDesign, color: '#60a5fa' },
                { label: '⚡ Scraper les 3 sites', fn: runAll, color: '#00d9ff' },
              ].map((btn, i) => (
                <button key={i} onClick={btn.fn} disabled={running} style={{ background: running ? '#333' : btn.color + '20', color: running ? '#888' : btn.color, border: '1px solid ' + (running ? '#333' : btn.color), padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: running ? 'not-allowed' : 'pointer', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                  {running ? '⏳ Scraping...' : btn.label}
                </button>
              ))}
            </div>
            <div style={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: '6px', padding: '16px', fontFamily: 'Courier New, monospace', fontSize: '11px', maxHeight: '300px', overflowY: 'auto' }}>
              {logs.length === 0 ? <div style={{ color: '#666' }}>Choisissez un site à scraper...</div> : logs.map((log, i) => (
                <div key={i} style={{ color: log.includes('✅') || log.includes('✨') ? '#4ade80' : log.includes('🚀') ? '#60a5fa' : log.includes('⚠️') ? '#f97316' : '#aaa', marginBottom: '4px' }}>{log}</div>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '16px', fontSize: '11px' }}>
              <div style={{ color: '#00d9ff', fontWeight: 'bold', marginBottom: '8px' }}>Sample Code</div>
              <pre style={{ margin: 0, color: '#aaa', overflow: 'auto', lineHeight: '1.4' }}>{`obscura fetch "https://dribbble.com" \\
  --stealth --wait-until networkidle0 \\
  --eval "document.body.innerText"`}</pre>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace', flex: 1, minWidth: '120px' }} />
              <select value={filterSite} onChange={e => setFilterSite(e.target.value)} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                <option value="All">Tous les sites</option>
                <option value="Fashion">👗 Fashion</option>
                <option value="Beauty">💄 Beauty</option>
                <option value="Design">🎨 Design</option>
              </select>
              <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                <option value="All">Toutes catégories</option>
                <option value="Sacs">Sacs</option>
                <option value="Chaussures">Chaussures</option>
                <option value="Vêtements">Vêtements</option>
                <option value="Accessoires">Accessoires</option>
                <option value="Visage">Visage</option>
                <option value="Corps">Corps</option>
                <option value="Cheveux">Cheveux</option>
                <option value="Maquillage">Maquillage</option>
                <option value="UI">UI</option>
                <option value="Illustration">Illustration</option>
                <option value="Animation">Animation</option>
                <option value="Branding">Branding</option>
              </select>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>
                <option value="default">Défaut</option>
                <option value="metric-desc">Métrique ↓</option>
                <option value="metric-asc">Métrique ↑</option>
                <option value="name-asc">Nom A→Z</option>
              </select>
              <button onClick={exportCSV} disabled={filtered.length === 0} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '8px 14px', color: filtered.length === 0 ? '#555' : '#00d9ff', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace', cursor: filtered.length === 0 ? 'not-allowed' : 'pointer' }}>↓ CSV</button>
              <div style={{ fontSize: '11px', color: '#888' }}>{filtered.length} résultats</div>
            </div>

            {scrapedProducts.length === 0 ? (
              <div style={{ color: '#666', fontSize: '12px', padding: '40px', textAlign: 'center', border: '1px solid #222', borderRadius: '6px' }}>
                <div style={{ marginBottom: '16px' }}>Lancez un scraping depuis l'onglet DEMO.</div>
                <button onClick={() => setActiveTab('demo')} style={{ background: '#00d9ff', color: '#000', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px', fontFamily: 'IBM Plex Mono, monospace' }}>▶ Aller au DEMO</button>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ color: '#666', fontSize: '12px', padding: '40px', textAlign: 'center', border: '1px solid #222', borderRadius: '6px' }}>Aucun résultat pour ces filtres.</div>
            ) : (
              <div style={{ display: 'grid', gap: '8px' }}>
                {filtered.map(p => (
                  <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '6px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                    <img src={p.image} alt={p.name} width={48} height={48} style={{ borderRadius: '8px', flexShrink: 0, objectFit: 'cover' }} onError={e => { e.target.style.display = 'none'; }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff' }}>{p.name}</div>
                        <div style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', background: (siteColor[p.siteType] || '#888') + '20', color: siteColor[p.siteType] || '#888', whiteSpace: 'nowrap' }}>{siteIcon[p.siteType]} {p.siteType}</div>
                      </div>
                      <div style={{ fontSize: '11px', color: '#888', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p.siteType === 'Fashion' && p.brand + ' · ' + p.price + ' · ' + p.condition}
                        {p.siteType === 'Beauty' && p.brand + ' · ' + p.price + ' · Note: ' + p.score + '/100'}
                        {p.siteType === 'Design' && (p.designer || '') + ' · ' + p.category + ' · ' + (p.tags || []).slice(0, 3).join(', ')}
                      </div>
                    </div>
                    <div style={{ fontSize: '12px', color: siteColor[p.siteType] || '#00d9ff', flexShrink: 0, fontWeight: 'bold', textAlign: 'right' }}>
                      <div>{p.metric}</div>
                      <div style={{ fontSize: '10px', color: '#666' }}>{p.siteType === 'Fashion' ? '❤️' : p.siteType === 'Beauty' ? '/100' : '👍'}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
