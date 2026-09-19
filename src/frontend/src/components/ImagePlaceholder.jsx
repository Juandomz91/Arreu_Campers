export default function ImagePlaceholder({ label, style }) {
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 120,
      border: '2px dashed #b9bcae', background: '#e2e6dc',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#8a8a82', fontSize: 13, fontFamily: "'JetBrains Mono', monospace",
      textAlign: 'center', padding: 12, boxSizing: 'border-box', ...style
    }}>
      {label}
    </div>
  );
}
