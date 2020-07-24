import { Action } from "redux";
import { ICharacter } from "../../entities";
import { IFilter } from "../../model/IFilter";

export const GET_TYPE="GET_RickMorty_COLLECTION";
export const SET_TYPE="SET_RickMorty_COLLECTION";
export const SELECT_TYPE="SELECT_RickMorty_COLLECTION";
export const FILPER_TYPE="FILTER_RickMorty_COLLECTION";
export const FILPER_CLEAR_TYPE="FILTER_CLEAR_RickMorty_COLLECTION";



interface Get extends Action {
    type: typeof GET_TYPE
  }
  
interface Set extends Action {
    type: typeof SET_TYPE
    payload: ICharacter[]
}

interface Select extends Action {
    type: typeof SELECT_TYPE
    payload: ICharacter
}

interface Filter extends Action {
  type: typeof FILPER_TYPE
  payload: IFilter<ICharacter>
}

interface ClearFilter extends Action {
  type: typeof FILPER_CLEAR_TYPE
  payload: string | string[] | undefined
}

export type CharacterActions = Get | Set | Select | Filter | ClearFilter