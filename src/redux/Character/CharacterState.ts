import { ICharacter } from "../../entities";
import { IIsLoaded } from "../../model";
import { IFilter } from "../../model/IFilter";

export class CharacterState implements IIsLoaded{
    IsLoaded: boolean= false;
    Characters: ICharacter[] = [];

    FilteredCharacters(){
        let result= this.Characters;

        if(this.Filters){

            this.Filters.forEach(x=>{
                result=result.filter(x.Filter);
            })
        }

        return result;
    }

    Selected: ICharacter | undefined;
    Filters: IFilter<ICharacter>[] | undefined
}