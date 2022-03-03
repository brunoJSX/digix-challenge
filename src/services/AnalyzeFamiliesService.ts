import {
  scoreThoseWithTotalFamilyIncomeUpToNineHundredReais,
  scoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais,
  scoreThoseWhoHaveOneOrTwoDependents,
  scoreThoseWhoHaveThreeOrMoreDependents
} from "../criterias";
import { MakeScoreAnalizer } from "../scoreAnalizer";
import { IFamily, ICandidate } from "../interfaces";

export class AnalyzeFamiliesService {
    constructor(private families: Array<IFamily>) {}

    do(): Array<ICandidate> {
        MakeScoreAnalizer.of<IFamily>()
          .than([
            scoreThoseWithTotalFamilyIncomeUpToNineHundredReais,
            scoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais,
            scoreThoseWhoHaveOneOrTwoDependents,
            scoreThoseWhoHaveThreeOrMoreDependents,
          ])
          .andAnalyze(this.families);

        return this.families.map(family => family.candidate);
    }
}