import { useState } from 'react'
import type { Circuit } from './types'
import { GatePalette } from './GatePalette'
import './App.css'

const initialCircuit: Circuit = { numQubits: 3, gates: [] }

function App() {
  const [circuit, setCircuit] = useState<Circuit>(initialCircuit)
  const numSteps = Math.max(3, ...circuit.gates.map((g) => g.step + 1))

  const gateAt = (step: number, qubit: number) =>
    circuit.gates.find((g) => g.step === step && g.qubits.includes(qubit))

  const handleDrop = (e: React.DragEvent, step: number, qubit: number) => {
    const type = e.dataTransfer.getData('text/gate-type')
    if (!type) return
    setCircuit((c) => ({
      ...c,
      gates: [
        ...c.gates.filter((g) => !(g.step === step && g.qubits.includes(qubit))),
        { id: `g${Date.now()}`, type, qubits: [qubit], step },
      ],
    }))
  }

  const handleCellClick = (step: number, qubit: number) => {
    setCircuit((c) => ({
      ...c,
      gates: c.gates.filter((g) => !(g.step === step && g.qubits.includes(qubit))),
    }))
  }

  return (
    <div className="circuit-container">
      <h1>Quantum Playground</h1>
      <GatePalette />
      <div className="circuit-grid" style={{ gridTemplateColumns: `80px repeat(${numSteps}, 60px)` }}>
        <div className="grid-cell header" />
        {Array.from({ length: numSteps }, (_, s) => (
          <div key={`h-${s}`} className="grid-cell header">t{s}</div>
        ))}
        {Array.from({ length: circuit.numQubits }, (_, q) => (
          <>
            <div key={`q-${q}`} className="grid-cell qubit-label">q{q}</div>
            {Array.from({ length: numSteps }, (_, s) => (
              <div
                key={`c-${q}-${s}`}
                className="grid-cell"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, s, q)}
                onClick={() => handleCellClick(s, q)}
              >
                {gateAt(s, q) && <div className="gate">{gateAt(s, q)!.type}</div>}
              </div>
            ))}
          </>
        ))}
      </div>
      <pre className="circuit-json">{JSON.stringify(circuit, null, 2)}</pre>
    </div>
  )
}

export default App