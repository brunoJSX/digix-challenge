import { IFamily } from "../interfaces";

class ScoreThoseWhoHaveThreeOrMoreDependents {
  public static do({ dependents }: IFamily): number {
    const eligibleDependents = dependents.filter(dependent => dependent.age < 18);

    return eligibleDependents.length >= 3 ? 3 : 0;
  }
}

export const scoreThoseWhoHaveThreeOrMoreDependents = ScoreThoseWhoHaveThreeOrMoreDependents.do;
