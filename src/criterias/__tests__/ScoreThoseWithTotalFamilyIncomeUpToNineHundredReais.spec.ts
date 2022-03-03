import { scoreThoseWithTotalFamilyIncomeUpToNineHundredReais } from '../'
import { IFamily } from '../../interfaces';

describe('ScoreThoseWithTotalFamilyIncomeUpToNineHundredReais', () => {
  it('should be able to return five if the income is less than or equal to nine hundred', async () => {
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
          age: 18
        }
      ]
    }

    const score = scoreThoseWithTotalFamilyIncomeUpToNineHundredReais(family)

    expect(score).toEqual(5);
  })

  it('should be able to return zero if income is greater than nine hundred', async () => {
    const family: IFamily = {
      income: 901,
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
          age: 18
        }
      ]
    }

    const score = scoreThoseWithTotalFamilyIncomeUpToNineHundredReais(family)

    expect(score).toEqual(0);
  })
})