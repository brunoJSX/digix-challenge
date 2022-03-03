import { IFamily } from "../interfaces";

class ScoreThoseWhoHaveOneOrTwoDependents {
  public static do({ dependents }: IFamily): number {
    const eligibleDependents = dependents.filter(dependent => dependent.age < 18);

    return [1, 2].includes(eligibleDependents.length) ? 2 : 0;
  }
}

export const scoreThoseWhoHaveOneOrTwoDependents = ScoreThoseWhoHaveOneOrTwoDependents.do;
