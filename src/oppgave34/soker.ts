export type Soker = {navn: string; manedslonn: number; kommune: string};

export function lagSoker(navn: string, manedslonn: number, kommune: string): Soker {
  return {navn, manedslonn, kommune};
}
