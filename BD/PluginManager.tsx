import React, { useState } from 'react'
import type { Plugin } from './types'

interface Props {
  plugins: Plugin[]
  onToggle: (id: string) => void
}

export function PluginManager({ plugins, onToggle }: Props) {
  const [search, setSearch] = useState('')
  const filtered = plugins.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif', color: '#dbdee1' }}>
      <input
        placeholder="Search plugins..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: 'none', background: '#1e1f22', color: '#dbdee1', marginBottom: 12, fontSize: 13 }}
      />
      {filtered.map(p => (
        <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #2b2d31' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name} <span style={{ color: '#b5bac1', fontWeight: 400, fontSize: 12 }}>v{p.version}</span></div>
            <div style={{ color: '#b5bac1', fontSize: 12 }}>{p.description}</div>
          </div>
          <div
            onClick={() => onToggle(p.id)}
            style={{ width: 36, height: 20, borderRadius: 10, background: p.enabled ? '#5865f2' : '#4e5058', cursor: 'pointer', transition: 'background 0.2s', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: 2, left: p.enabled ? 18 : 2, width: 16, height: 16, borderRadius: 8, background: '#fff', transition: 'left 0.2s' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
