import { scoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais } from '../'
import { IFamily } from '../../interfaces';

describe('ScoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais', () => {
  it('should be able to return three if the income is nine hundred and one to one thousand five hundred reais', async () => {
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

    const score = scoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais(family)

    expect(score).toEqual(3);
  })

  it('should be able to return zero if the income is not from nine hundred and one to fifteen hundred reais', async () => {
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

    const score = scoreThoseWithTotalFamilyIncomeOfNineHundredAndOneToOneThousandFiveHundredReais(family)

    expect(score).toEqual(0);
  })
})