import { IErrorHandler } from '../model';
import { ICharacterRedux } from '../redux';

export interface IContext{
    errorHandler:IErrorHandler,
    redux:ICharacterRedux,
}