from fastapi import FastAPI
from .models import Circuit

app = FastAPI(title="Quantum Playground API")


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/circuits/validate")
def validate_circuit(circuit: Circuit):
    return {"valid": True, "numGates": len(circuit.gates)}