import {rest} from "msw";
import {mockPokemons} from "./mockData";





export const handlers=[
    rest.get('https://pokeapi.co/api/v2/pokemon',(req,res,ctx)=>{
        return res(ctx.json(mockPokemons))
    })
]
