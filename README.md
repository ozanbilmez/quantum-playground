# Quantum Playground

Tarayıcıda çalışan bir kuantum devre kurucu ve simülatör.

## Stack
- Backend: FastAPI (Python) — devre doğrulama, statevector simülasyonu
- Frontend: React + TypeScript (Vite)

## Devre Veri Modeli

\`\`\`json
{
  "numQubits": 3,
  "gates": [
    { "id": "g1", "type": "H", "qubits": [0], "step": 0 },
    { "id": "g2", "type": "CX", "qubits": [0, 1], "step": 1 },
    { "id": "g3", "type": "RZ", "qubits": [2], "step": 1, "params": { "theta": 1.5708 } }
  ]
}
\`\`\`

-