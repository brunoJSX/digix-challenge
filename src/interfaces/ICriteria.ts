import IFamily from "./IFamily";

interface IPassFunc<T> {
    (param: T): Boolean
}

export default interface ICriteria {
    score: number;
    pass: IPassFunc<IFamily>;
}