import { ScoreAnalizer } from "./";
import { IScoreable } from './interfaces'

export class MakeScoreAnalizer {
  public static of<T extends IScoreable>(): ScoreAnalizer<T> {
    return new ScoreAnalizer<T>();
  }
}
