import { describe, it, expect } from 'vitest'

describe('devre JSON yuvarlanması', () => {
  it('export edilen JSON geri import edilince aynı devreyi verir', () => {
    const circuit = {
      numQubits: 2,
      gates: [{ id: 'g1', type: 'H', qubits: [0], step: 0 }],
    }
    const json = JSON.stringify(circuit)
    const parsed = JSON.parse(json)
    expect(parsed).toEqual(circuit)
  })
})