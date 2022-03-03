
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import CardPokemon from "./CardPokemon";

describe("Testing Card Compoment <CardPokemon />",()=>{
    it("should be render",()=>{
        const name="Pokemon 1";
        const url="url"
        render(<CardPokemon name={name} url={url}/>)


    })
    it('should be a Button Open the  Modal',async function () {
        const name="Pokemon 1";
        const url="url"
        render(<CardPokemon name={name} url={url}/>)
        const openModal=screen.getByTestId('buttonOpen');
        expect(openModal.textContent).toBe("Details")
        //screen.debug()
    });

})
