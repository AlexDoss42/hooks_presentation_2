import React from 'react';

import {
    Card
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
            borderRadius: '30px',
            width: '800px',
            height: '150px',
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            border: 'white solid 5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }
});

const AlPacino = () => {
    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            <p>"My father taught me many things here. He taught me in this room. He taught me; "Keep your friends close, but your enemies closer." - Michael Corleone</p>
        </Card>
    )
};

export default AlPacino;