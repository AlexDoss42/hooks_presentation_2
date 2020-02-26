import React from 'react';

import {
    Card
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// INSIDE YOUR FUNCTIONAL COMPONENT

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

const MarlonBrando = () => {
    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            <p>"So you didn't need a friend like me. Now you come and say 'Don Corleone, give me justice.' But you don't ask with respect. You don't offer friendship. You don't even think to call me "Godfather." You come into my house on the day my daughter is to be married and you ask me to do murder - for money." - Don Corleone</p>
        </Card>
    )
};

// NO PROPS VALIDATION

// NO HOC

export default MarlonBrando;