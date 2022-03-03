import {rest} from "msw";
import {mockPokemons} from "./mockData";





export const handlers=[
    rest.get('/pokekomns',(req,res,ctx)=>{
        return res(ctx.json(mockPokemons))
    })
]
