import { scoreThoseWhoHaveThreeOrMoreDependents } from '../'
import { IFamily } from '../../interfaces';

describe('ScoreThoseWhoHaveThreeOrMoreDependents', () => {
  it('should be able to return three if the family has three or more dependents under the age of eighteen', async () => {
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
          age: 17
        },
      ]
    }

    const score = scoreThoseWhoHaveThreeOrMoreDependents(family)

    expect(score).toEqual(3);
  })

  it('should be able to return zero if the family has less than three dependents under the age of eighteen', async () => {
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

    const score = scoreThoseWhoHaveThreeOrMoreDependents(family)

    expect(score).toEqual(0);
  })
})