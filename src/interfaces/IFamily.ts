import { IPerson, ICandidate, IDependent } from "./";
import { IScoreable } from "../_/Filter/ScoreAnalizer";

export interface IFamily extends IScoreable {
  income: number;
  dependents: Array<IDependent>;
  candidate: ICandidate;
  candidatePartner: IPerson;
}