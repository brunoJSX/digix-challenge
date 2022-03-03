import { IFunc, IScoreable } from "./interfaces";

export class ScoreAnalizer<TScoreable extends IScoreable> {
  private _analizerExpression: Array<IFunc<TScoreable, number>> = [];

  public than(
    analizerExpression: Array<IFunc<TScoreable, number>>
  ): ScoreAnalizer<TScoreable> {
    this._analizerExpression = analizerExpression;
    return this;
  }

  public andAnalyze(list: Array<TScoreable>) {
    return list.forEach((i) =>
      this._analizerExpression.forEach((f) => (i.score += f(i)))
    );
  }
}