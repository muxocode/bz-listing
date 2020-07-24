export interface IFilter<T>{
    Key:string,
    Filter:(c:T)=>boolean
}