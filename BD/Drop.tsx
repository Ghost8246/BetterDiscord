interface DropProps {
  x: number
  y: number
  label: string
  active: boolean
  onClick?: () => void
}

export function PluginCard({ x, y, label, active, onClick }: DropProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        padding: '8px 16px',
        borderRadius: 12,
        background: active ? '#5865f2' : '#2b2d31',
        color: active ? '#fff' : '#b5bac1',
        cursor: 'pointer',
        fontSize: 13,
        userSelect: 'none',
        transition: 'background 0.15s',
        boxShadow: active ? '0 2px 8px rgba(88,101,242,0.4)' : 'none',
      }}
    >
      {label}
    </div>
  )
}
