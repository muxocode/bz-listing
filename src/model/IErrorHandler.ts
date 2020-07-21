export interface IErrorHandler{
    Log(message:string):Promise<void>;
    Error(message:string, exception?:any):Promise<void>;
}