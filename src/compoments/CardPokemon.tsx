import React, {useState} from "react";
import '../App.css'
import PokemonDetails from "./PokemonDetails";
import Button from "@material-ui/core/Button";
import {makeStyles, Theme} from "@material-ui/core/styles";

interface Props {
    name:string;
    url:string

}

const useStyles=makeStyles((theme)=>({
        btn: {
            color:'green',
            backgroundColor:'white',
            position:'revert'
        }


}))

const CardPokemon :React.FC<Props> = ({name,url}) => {

      const [isOpen,SetIsOpen]=useState(false);


      const classes=useStyles();

      const IndexImg=url.split("/")[url.split('/').length-2];

      const imgUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${IndexImg}.png`

    ///how To render Modal the Pokemon without catche Card Pokemon
    if (isOpen)
       return <PokemonDetails isOpen={isOpen} name={name} url={url} onClose={()=>SetIsOpen(false)} />

       return (
          <>
           <div className="Card"  >
                 <img alt="imagePkom" height="110px" width="110px" src={imgUrl} />
             <h3>{name.toLowerCase().split(' ').map(
                 letter=>letter.charAt(0).toUpperCase()+letter.substring(1)
             )}</h3>
               <Button data-testid={"buttonOpen"} data-cy={name} className={classes.btn} variant="outlined" color="secondary" onClick={()=>SetIsOpen(true)}>
                   Details
               </Button>
          </div>

          </>
       )
}
export default CardPokemon;
