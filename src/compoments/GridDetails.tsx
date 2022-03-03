import React from "react";
import '../App.css'
import LinearProgress from '@material-ui/core/LinearProgress';
interface Props {
        imageUrl:string;
        attack:number;
        hp:number;
        defense:number;
        spAtck:number;
        spDef:number;
        speed:number;


}

const GridDetails:React.FC<Props> = (
               {    imageUrl,
                    attack,
                    hp,
                    defense,
                    spAtck,
                    spDef,
                    speed,

               }) => {



    return(
        <div className="DialogContent">
            <div className="image"><img height="200" width="300" src={imageUrl} /></div>
        <div className="container">
            <div className="attack">Attack</div>
            <div className="hp">HP</div>
            <div className="defense">Defense</div>
            <div className="sp-atck">Speed Attack</div>
            <div className="sp-def">speed Defense</div>
             <div className="speed">Speed</div>
            <div className="progress-hp"><LinearProgress valueBuffer={hp} color="secondary"  variant="buffer" value={hp} /></div>
            <div className="progress-atck"><LinearProgress valueBuffer={attack} color="primary" variant="buffer" value={attack}/></div>
            <div className="progress-def"><LinearProgress valueBuffer={defense} color="secondary"  variant="buffer" value={defense}/></div>
            <div className="progress-sp-atck"><LinearProgress valueBuffer={spAtck}  color="primary" variant="buffer" value={spAtck}/></div>
            <div className="progress-sp-def"><LinearProgress valueBuffer={spDef} color="primary" variant="buffer" value={spDef}/></div>
             <div className="progress-speed"><LinearProgress valueBuffer={speed} color="secondary" variant="buffer" value={speed} /></div>
        </div>
        </div>
            )
};

export default GridDetails;
