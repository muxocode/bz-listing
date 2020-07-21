import {IErrorHandler} from "../model"
import { injectable } from "inversify";
import "reflect-metadata";


@injectable()
export class ErrorHandler implements IErrorHandler{
    async Log(message: string): Promise<void> {
        console.log(message);
    }
    async Error(message: string, exception?: any | undefined): Promise<void> {
        console.error({title:message,error:exception});
    }
}