import React from 'react';

import {
    Card
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        borderRadius: '20px',
        width: '500px',
        height: "400px"
    }
});

const AlPacino = () => {
    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            <p>My father taught me many things here. He taught me in this room. He taught me; "Keep your friends close, but your enemies closer.</p>
        </Card>
    )
};

export default AlPacino;