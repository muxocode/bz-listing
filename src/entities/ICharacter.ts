import { IEntity } from "./_base/IEntity";
import { IPairUrl } from "./_base/IPairUrl";

export interface ICharacter extends IEntity, IPairUrl
{
 status:string,
 species: string,
 type: string
 gender: string,
 origin: IPairUrl,
 location: IPairUrl,
 image: string,
 episode: string[],
 created: Date
}