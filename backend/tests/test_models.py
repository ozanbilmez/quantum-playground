from quantum_playground.models import Circuit, Gate


def test_gate_creation():
    gate = Gate(id="g1", type="H", qubits=[0], step=0)
    assert gate.type == "H"
    assert gate.params is None


def test_circuit_creation():
    circuit = Circuit(
        numQubits=2,
        gates=[
            Gate(id="g1", type="H", qubits=[0], step=0),
            Gate(id="g2", type="CX", qubits=[0, 1], step=1),
        ],
    )
    assert circuit.numQubits == 2
    assert len(circuit.gates) == 2


def test_gate_with_params():
    gate = Gate(id="g3", type="RZ", qubits=[0], step=0, params={"theta": 1.5708})
    assert gate.params is not None
    assert gate.params["theta"] == 1.5708