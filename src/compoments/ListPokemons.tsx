import React, {useEffect, useState} from "react";
import {useInfiniteQuery} from "react-query";
import useDebounce from '../hooks/useDebounce'
import axios from "axios";
import { PropagateLoader} from "react-spinners";
import CardPokemon from "./CardPokemon";
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from '../ring.gif'
import NavBar from "./NavBar";


export interface Pokemon {
    name: string,
     url:string

 }

const ListPokemons :React.FC= () => {
    const initialUrl='https://pokeapi.co/api/v2/pokemon'
    const fetchPokemons = (url:string) => {
        return   axios.get(url)
    }
    const {data,fetchNextPage,hasNextPage,isFetching,isError,error,isLoading}=useInfiniteQuery(
        'sw-pokemons',
        ({pageParam=initialUrl})=>fetchPokemons(pageParam),
        {
            getNextPageParam:((lastPage) => lastPage.data.next || undefined)
        }
    )
    const[searchValue,setSearchValue] =  useState<string>("");

    const debouncedValue=useDebounce<string>(searchValue,500);
    const [filterData,setFilterData]=useState<any>([]);

    useEffect(()=>{
            setFilterData(data?.pages)
          const  searchedData= data?.pages.map((dataPage:any)=>{

            return   dataPage.data.results.filter((item:any)=>{

                 return  item.name.toLowerCase().includes(debouncedValue.toLowerCase())
              })
          })
         setFilterData(searchedData)
},[data?.pages,debouncedValue])




      if (isError) {
          return <div>Error !!! {error}</div>
      }
     const handleChangeSearch = (text:string) => {
         setSearchValue(text)
         console.log("*********")
     }


    return(
        <>
            <NavBar   handleChangeSearch={handleChangeSearch} />
        <InfiniteScroll   loadMore={()=>fetchNextPage()}
                           hasMore={hasNextPage}
                           loader={<img key={0} src={Spinner}/>}
           >

               <div className="List-card">
                   <PropagateLoader loading={isFetching} color="#61dafb" size={15}/>
                   <PropagateLoader loading={isLoading} color="#61dafb" size={15}/>
                   {

                  filterData?.map((page:any)=>{
                           return page.map((pokemon:Pokemon)=>{

                                   return <CardPokemon  key={pokemon.name} name={pokemon.name} url={pokemon.url} />

                           })
                    })
                   }

           </div>

           </InfiniteScroll>

        </>

    )
}

export default ListPokemons;
