import { IFamily } from "../interfaces";

class ScoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais {
  public static do({ income }: IFamily): number {
    return (income >= 901 && income <= 1500)  ? 3 : 0;
  }
}

export const scoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais = ScoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais.do;