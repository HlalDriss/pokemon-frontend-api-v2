import React from 'react';
import './App.css';
import ListPokemons from "./compoments/ListPokemons";
import {QueryClientProvider,QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import NavBar from "./compoments/NavBar";
import FooterPokemon from "./compoments/FooterPokemon";


const queryClient=new QueryClient();
function App() {

  return (
      <QueryClientProvider client={queryClient}>

          <div className="App">
              <ListPokemons />
              <FooterPokemon />
          </div>
          <ReactQueryDevtools />

      </QueryClientProvider>

  );
}

export default App;
