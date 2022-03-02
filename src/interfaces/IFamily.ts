import { IPerson, ICandidate, IDependent } from "./";

export interface IFamily {
    income: number;
    dependents: Array<IDependent>;
    candidate: ICandidate;
    candidatePartner: IPerson;
}