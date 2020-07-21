import { IGetService, IConfiguration, IErrorHandler } from "../model";
import { ICharacter } from "../entities";
import axios from "axios";
import { injectable, inject } from "inversify";
import { TYPES } from "../ioc";
import "reflect-metadata";

@injectable()
export class RickMortyService implements IGetService<ICharacter>{

    @inject(TYPES.IConfiguration) private configuration!:IConfiguration
    @inject(TYPES.IErrorHandler)private errorHandler!:IErrorHandler


    async Get(): Promise<ICharacter[]> {
        return axios.get<ICharacter[]>(this.configuration.api)
            .then(x=>{
                if(x.status!==200){
                    this.errorHandler.Error(`Error on response ${this.configuration.api}`,x);
                }
                return x.data;
            })
            .catch(x=>{
                this.errorHandler.Error(`Error on get ${this.configuration.api}`,x);
                return [];
            })
    }
    
}

//https://www.npmjs.com/package/inversify