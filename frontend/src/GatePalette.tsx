const GATES = ['H', 'X', 'Y', 'Z', 'RX', 'RY', 'RZ'] as const

export function GatePalette() {
  return (
    <div className="gate-palette">
      {GATES.map((g) => (
        <div
          key={g}
          className="gate palette-gate"
          draggable
          onDragStart={(e) => e.dataTransfer.setData('text/gate-type', g)}
        >
          {g}
        </div>
      ))}
    </div>
  )
}