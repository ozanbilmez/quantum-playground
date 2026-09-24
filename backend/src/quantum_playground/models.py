from pydantic import BaseModel


class Gate(BaseModel):
    id: str
    type: str
    qubits: list[int]
    step: int
    params: dict[str, float] | None = None


class Circuit(BaseModel):
    numQubits: int
    gates: list[Gate]