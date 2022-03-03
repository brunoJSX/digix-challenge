import express from 'express';

import { Family } from './entities';
import { IFamily } from './interfaces';
import { AnalyzeFamiliesService } from './services'

const app = express();

app.get('/', (request, response) => {
  const familyA: IFamily = new Family(
    900,
    [
      {
        name: "Fernando",
        age: 21,
      },
    ],
    {
      name: "Maria",
      age: 21,
      score: 0,
    },
    {
      name: "Pedro",
      age: 22,
    }
  );

  const familyB: IFamily = new Family(
    1500,
    [
      {
        name: "Bia",
        age: 15,
      },
    ],
    {
      name: "Lurdes",
      age: 21,
      score: 0,
    },
    {
      name: "Pedro",
      age: 22,
    }
  );

  const familyC: IFamily = new Family(
    3000,
    [
      {
        name: "Eduardo",
        age: 17,
      },
    ],
    {
      name: "Fernando",
      age: 36,
      score: 0,
    },
    {
      name: "Joaquina",
      age: 32,
    }
  );

  let families = [familyA, familyB, familyC];

  const analyzeFamiliesService = new AnalyzeFamiliesService(families);

  const candidates = analyzeFamiliesService.do();

  return response.json(candidates);
})

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333');
});