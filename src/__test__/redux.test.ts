import {CreateCharacterRedux} from "../redux";
import { data } from "./__mock__/data";


describe("Redux tests", ()=>{

    it("not crash", async done=>{
        const redux= CreateCharacterRedux(async ()=>data);
        redux.character.Subscribe(x=>{
                done();
        })
    })

    it("Subscribe", async done=>{
        const redux= CreateCharacterRedux(async ()=> data);
        let i=0;
        redux.character.Subscribe(x=>{
            if(x.Characters.length===10 && x.IsLoaded)
            {
                done();
            }
            else if(i>0)
            {
                console.log(x.Characters);
                done(new Error("No se ha cargado"))
            }

            i++;
        })

    });

    it("Select", async done=>{
        const redux= CreateCharacterRedux(async ()=> data);
        redux.character.Subscribe(x=>{
            if(x.Selected && x.Selected.id === data[0].id)
            {
                done();
            }
        })

        redux.character.Select(data[0]);
    });

    it("Filter", async done=>{
        const redux= CreateCharacterRedux(async ()=> data);
        redux.character.Subscribe(x=>{
            if(x.FilteredCharacters().length===1 && x.FilteredCharacters()[0].id===1)
            {
                done();
            }
        })

        redux.character.Filters.Set({Key:"test", Filter:x=>x.id===1});
    });

    it("RemoveFilter_one", async done=>{
        const redux= CreateCharacterRedux(async ()=> data);
        let loaded=false;

        redux.character.Subscribe(x=>{
            if(!loaded)
            {
                if(x.FilteredCharacters().length===1 && x.FilteredCharacters()[0].id===1)
                {
                    loaded=true;
                    redux.character.Filters.Clear("test");
                }
            }
            else
            {
                if(x.FilteredCharacters().length === x.Characters.length)
                {
                    done();
                }
            }
            
        })

        redux.character.Filters.Set({Key:"test", Filter:x=>x.id===1});
    });

    it("RemoveFilter_all", async done=>{
        const redux= CreateCharacterRedux(async ()=> data);
        let loaded=false;

        redux.character.Subscribe(x=>{
            if(!loaded)
            {
                if(x.FilteredCharacters().length===1 && x.FilteredCharacters()[0].id===1)
                {
                    loaded=true;
                    redux.character.Filters.Clear();
                }
            }
            else
            {
                if(x.FilteredCharacters().length === x.Characters.length)
                {
                    done();
                }
            }
            
        })

        redux.character.Filters.Set({Key:"test", Filter:x=>x.id===1});
    });

    it("RemoveFilter_array", async done=>{
        const redux= CreateCharacterRedux(async ()=> data);
        let loaded=false;

        redux.character.Subscribe(x=>{
            if(!loaded)
            {
                if(x.FilteredCharacters().length===1 && x.FilteredCharacters()[0].id===1)
                {
                    loaded=true;
                    redux.character.Filters.Clear(["test"]);
                }
            }
            else
            {
                if(x.FilteredCharacters().length === x.Characters.length)
                {
                    done();
                }
            }
            
        })

        redux.character.Filters.Set({Key:"test", Filter:x=>x.id===1});
    });
})