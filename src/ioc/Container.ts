import { Container } from "inversify";
import { TYPES } from "./Types";
import { IErrorHandler, IGetService, IConfiguration } from "../model";
import { ErrorHandler, RickMortyService } from "../domain";
import { ICharacter } from "../entities";
import { GetResource } from "../util/http";

const oContainer = new Container();


export const InitContainer=async ()=>{

    oContainer.bind<IErrorHandler>(TYPES.IErrorHandler).to(ErrorHandler);
    oContainer.bind<IGetService<ICharacter>>(TYPES.Services.IGetService.ICharacter).to(RickMortyService);
    let configuration =  await GetResource("config.json");
    oContainer.bind<IConfiguration>(TYPES.IConfiguration).toConstantValue(configuration);

    return oContainer;
}

