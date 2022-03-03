import { scoreThoseWhoHaveOneOrTwoDependents } from '../'
import { IFamily } from '../../interfaces';

describe('ScoreThoseWhoHaveOneOrTwoDependents', () => {
  it('should be able to return two if the family has one or two dependents under the age of eighteen', async () => {
    const family: IFamily = {
      income: 900,
      score: 0,
      candidate: {
        name: 'Maria',
        age: 36,
        score: 0,
      },
      candidatePartner: {
        name: 'Pedro',
        age: 40
      },
      dependents: [
        {
          name: 'Pedro',
          age: 17
        },
        {
          name: 'Jorge',
          age: 14
        },
        {
          name: 'Bia',
          age: 18
        },
      ]
    }

    const score = scoreThoseWhoHaveOneOrTwoDependents(family)

    expect(score).toEqual(2);
  })

  it('should be able to return zero if the family has an amount other than one or two dependents under the age of eighteen', async () => {
    const family: IFamily = {
      income: 900,
      score: 0,
      candidate: {
        name: 'Maria',
        age: 36,
        score: 0,
      },
      candidatePartner: {
        name: 'Pedro',
        age: 40
      },
      dependents: [
        {
          name: 'Pedro',
          age: 17
        },
        {
          name: 'Jorge',
          age: 14
        },
        {
          name: 'Bia',
          age: 16
        },
      ]
    }

    const score = scoreThoseWhoHaveOneOrTwoDependents(family)

    expect(score).toEqual(0);
  })
})