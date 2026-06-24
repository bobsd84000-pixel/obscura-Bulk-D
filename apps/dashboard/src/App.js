import React, { useState } from 'react';
import { Play, Plus, Trash2, Download, Settings } from 'lucide-react';

export default function Dashboard() {
  const [jobs, setJobs] = useState([
    { id: 1, url: 'https://reddit.com/r/entrepreneur', status: 'completed', results: 487, date: '2min ago' },
    { id: 2, url: 'https://discord.com/api', status: 'running', results: 142, date: 'now' },
  ]);
  const [url, setUrl] = useState('');
  const [tab, setTab] = useState('jobs');

  const addJob = () => {
    if (!url) return;
    setJobs([{ id: Math.random(), url, status: 'queued', results: 0, date: 'now' }, ...jobs]);
    setUrl('');
  };

  const deleteJob = (id) => setJobs(jobs.filter(j => j.id !== id));

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: 'IBM Plex Mono, monospace' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#00d9ff' }}>OBSCURA DASHBOARD</div>
        <button style={{ background: '#00d9ff', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          ⚙️ Settings
        </button>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', borderBottom: '1px solid #222', paddingBottom: '12px' }}>
          {['jobs', 'create', 'results'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? '#00d9ff20' : 'transparent',
                color: tab === t ? '#00d9ff' : '#666',
                border: 'none',
                padding: '10px 16px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Jobs Tab */}
        {tab === 'jobs' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Active Scrapes</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {jobs.map(job => (
                <div key={job.id} style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>{job.url}</div>
                    <div style={{ fontSize: '11px', color: '#888' }}>
                      {job.status} • {job.results} results • {job.date}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: '#00d9ff', color: '#000', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}>
                      ⬇️ Download
                    </button>
                    <button
                      onClick={() => deleteJob(job.id)}
                      style={{ background: '#ff4444', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Tab */}
        {tab === 'create' && (
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>New Scrape</h2>
            <div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>URL</label>
              <input
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://reddit.com/r/..."
                style={{
                  width: '100%',
                  background: '#0a0a0a',
                  border: '1px solid #333',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '4px',
                  fontFamily: 'inherit',
                  marginBottom: '16px',
                  boxSizing: 'border-box',
                }}
              />
              <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Options</label>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <input type="checkbox" defaultChecked />
                  <span style={{ fontSize: '12px' }}>Stealth mode</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <input type="checkbox" defaultChecked />
                  <span style={{ fontSize: '12px' }}>Wait until networkidle0</span>
                </label>
              </div>
              <button
                onClick={addJob}
                style={{
                  width: '100%',
                  background: '#00d9ff',
                  color: '#000',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <Play size={16} /> Launch Scrape
              </button>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {tab === 'results' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Results</h2>
            <div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '20px' }}>
              <div style={{ color: '#888', fontSize: '12px', marginBottom: '12px' }}>Total scraped: {jobs.reduce((a, j) => a + j.results, 0)} items</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {jobs.filter(j => j.results > 0).map(job => (
                  <div key={job.id} style={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: '6px', padding: '12px' }}>
                    <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>{job.url}</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00d9ff' }}>{job.results}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
