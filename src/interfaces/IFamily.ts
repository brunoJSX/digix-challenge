import IDependent from "./IDependent";
import ICandidate from "./ICandidate";
import IPerson from "./IPerson";

interface IFamily {
    income: number;
    dependents: Array<IDependent>;
    candidate: ICandidate;
    candidatePartner: IPerson;
}

export default IFamily;