export interface Gate {
  id: string;
  type: string;
  qubits: number[];
  step: number;
  params?: Record<string, number>;
}

export interface Circuit {
  numQubits: number;
  gates: Gate[];
}