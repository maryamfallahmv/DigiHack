/**
 * En person i saksbehandler-rapporten — navn og alder.
 */
export type Person = {navn: string; alder: number};

export function lagPerson(navn: string, alder: number): Person {
  return {navn, alder};
}
