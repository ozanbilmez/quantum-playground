# Quantum Playground

Tarayıcıda çalışan bir kuantum devre kurucu ve simülatör.

## Stack

- Backend: FastAPI (Python): devre doğrulama, statevector simülasyonu
- Frontend: React + TypeScript (Vite)
- Test: pytest (backend), vitest (frontend)
- CI: GitHub Actions (`.github/workflows/backend-ci.yml`)

## Özellikler

- Kapı paleti ve sürükle-bırak ile devre kurma
- Devreyi JSON olarak dışa aktarma ve içe aktarma
- Pydantic ile devre veri modeli doğrulaması (backend)

## Klasör yapısı

```
backend/    FastAPI uygulaması (src/quantum_playground/), testler (tests/)
frontend/   React + TypeScript arayüzü (src/)
.github/    CI iş akışı
```

## Çalıştırma

Backend:

```
cd backend
uv sync
uv run uvicorn quantum_playground.main:app --reload
```

Frontend (başka bir terminalde):

```
cd frontend
npm install
npm run dev
```

## Testler

```
cd backend
uv run pytest
```

```
cd frontend
npx vitest run
```

## Devre Veri Modeli

```json
{
  "numQubits": 3,
  "gates": [
    { "id": "g1", "type": "H", "qubits": [0], "step": 0 },
    { "id": "g2", "type": "CX", "qubits": [0, 1], "step": 1 },
    { "id": "g3", "type": "RZ", "qubits": [2], "step": 1, "params": { "theta": 1.5708 } }
  ]
}
```

Her kapı bir `id`, bir `type`, hedef `qubits` listesi ve devredeki sırasını belirten `step` alanına sahiptir. Parametreli kapılar `params` taşır.