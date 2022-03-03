import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import {useQuery} from "react-query";
import axios from "axios";
import GridDetails from "./GridDetails";
import { BounceLoader} from "react-spinners";

interface Props {
    isOpen:boolean,
    url:string,
    name:string
    onClose:()=>void
}



const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });
const styleSpinner={
    width:500,
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    marginTop:100
}
export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton data-cy="closeModal" aria-label="close" className={classes.closeButton} onClick={onClose}>
                   <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
        height:theme.spacing(40)
    },
}))(MuiDialogContent);


 const PokemonDetails:React.FC<Props>=({isOpen,url,name,onClose})=> {
      const {data,isLoading,isError,error,isFetching}= useQuery('pokemon',()=>{
           return  axios.get(url)
        })



 /*    console.log(data?.data.stats[0].base_stat)
     console.log(data?.data.stats[1].base_stat)
     console.log(data?.data.stats[2].base_stat)
     console.log(data?.data.stats[3].base_stat)
     console.log(data?.data.stats[4].base_stat)
     console.log(data?.data.stats[5].base_stat)
*/
     const  stats=data?.data.stats;
     const idImg=data?.data.id
    const imgUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idImg}.png`



     if (isError){
         return <strong>Error ! {error}</strong>
     }
     return (
        <div>

            <Dialog fullWidth maxWidth="lg"     aria-labelledby="customized-dialog-title" open={isOpen}>
                <DialogTitle  onClose={onClose} id="customized-dialog-title" >
                         <Typography>{name.toUpperCase()}</Typography>
                </DialogTitle>
                <DialogContent  >
                    {isFetching? (<div style={styleSpinner}><BounceLoader color="#61dafb" size={60}/></div>):(
                        <GridDetails imageUrl={imgUrl}
                                     attack={stats[1].base_stat}
                                     hp={stats[0].base_stat}
                                     defense={stats[2].base_stat}
                                     spAtck={stats[3].base_stat}
                                     spDef={stats[4].base_stat}
                                     speed={stats[5].base_stat}

                        />
                    )}
                </DialogContent>

            </Dialog>
        </div>
    );
}
export default PokemonDetails;
