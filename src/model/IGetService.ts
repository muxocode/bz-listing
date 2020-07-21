export interface IGetService<T>{
    Get():Promise<T[]>;
}