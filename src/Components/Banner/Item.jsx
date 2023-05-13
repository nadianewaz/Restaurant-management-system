import React from 'react';
import { Paper } from '@mui/material'

const Item = (props) => {
    return (
        <>
         <Paper>
            <img src={props.Item.image} alt= {props.Item.title} style= {{width: "100%", height: "80vh"}} />
        </Paper>
            
        </>
    );
};

export default Item;