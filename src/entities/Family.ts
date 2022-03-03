import { IPerson, ICandidate, IDependent, IFamily } from "../interfaces/";

export class Family implements IFamily {
    
  public get score(): number {
    return this.candidate.score;
  }
  
  public set score(value: number) {
    this.candidate.score = value;
  }
  
  constructor(
    public income: number,
    public dependents: Array<IDependent>,
    public candidate: ICandidate,
    public candidatePartner: IPerson
  ) {}
}