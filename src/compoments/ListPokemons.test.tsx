import {render, RenderResult, screen} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactElement} from "react";
import ListPokemons from "./ListPokemons";
import {worker} from "../mocks/server";

//make a function to generite a unique query client for each test
const generateQueryClient =()=>{
    return new QueryClient();
}

//make a fuction that's going to wrap our compoment before we render

export function renderWithQueryClient (ui:ReactElement,client?:QueryClient):RenderResult {
  const queryClient= client ?? generateQueryClient()
    return render(<QueryClientProvider client={queryClient} >
        {ui}
    </QueryClientProvider>)
}


beforeAll(()=>worker.listen())
afterAll(()=>worker.close())
afterEach(()=>worker.resetHandlers())


test("Should be render", async () => {
      renderWithQueryClient(<ListPokemons />)
    })
test("Should be renders response from query", async () => {
    renderWithQueryClient(<ListPokemons />)
   const pokemonTitles=await screen.findAllByTestId('headingName')
    expect(pokemonTitles).toHaveLength(3)
})
test("Should be renders", async () => {
    renderWithQueryClient(<ListPokemons />)
    console.log("testing")
})
