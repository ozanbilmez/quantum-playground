import { useState } from 'react'
import type { Circuit } from './types'
import './App.css'

const exampleCircuit: Circuit = {
  numQubits: 3,
  gates: [
    { id: 'g1', type: 'H', qubits: [0], step: 0 },
    { id: 'g2', type: 'CX', qubits: [0, 1], step: 1 },
    { id: 'g3', type: 'RZ', qubits: [2], step: 1, params: { theta: 1.5708 } },
  ],
}

function App() {
  const [circuit] = useState<Circuit>(exampleCircuit)
  const numSteps = Math.max(...circuit.gates.map((g) => g.step)) + 1

  // Her (step, qubit) çiftinde hangi kapının olduğunu bul
  const gateAt = (step: number, qubit: number) =>
    circuit.gates.find((g) => g.step === step && g.qubits.includes(qubit))

  return (
    <div className="circuit-container">
      <h1>Quantum Playground</h1>
      <div
        className="circuit-grid"
        style={{ gridTemplateColumns: `80px repeat(${numSteps}, 60px)` }}
      >
        {/* Başlık satırı: step numaraları */}
        <div className="grid-cell header" />
        {Array.from({ length: numSteps }, (_, s) => (
          <div key={`h-${s}`} className="grid-cell header">
            t{s}
          </div>
        ))}

        {/* Her kübit için bir satır */}
        {Array.from({ length: circuit.numQubits }, (_, q) => (
          <>
            <div key={`q-${q}`} className="grid-cell qubit-label">
              q{q}
            </div>
            {Array.from({ length: numSteps }, (_, s) => {
              const gate = gateAt(s, q)
              return (
                <div key={`c-${q}-${s}`} className="grid-cell">
                  {gate && <div className="gate">{gate.type}</div>}
                </div>
              )
            })}
          </>
        ))}
      </div>
    </div>
  )
}

export default App