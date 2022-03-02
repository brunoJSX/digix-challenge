import { IFamily } from "./";

interface IPassFunc<T> {
    (param: T): Boolean
}

export interface ICriteria {
    _score: number;
    pass: IPassFunc<IFamily>;
}