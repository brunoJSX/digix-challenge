import { IFamily } from "../interfaces";

class ScoreThoseWithTotalFamilyIncomeUpToNineHundredReais {
  public static do({ income }: IFamily): number {
    return income <= 900  ? 5 : 0;
  }
}

export const scoreThoseWithTotalFamilyIncomeUpToNineHundredReais = ScoreThoseWithTotalFamilyIncomeUpToNineHundredReais.do;