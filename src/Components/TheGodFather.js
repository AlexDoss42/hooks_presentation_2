import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Divider,
    Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import MarlonBrando from './MarlonBrando';
import AlPacino from './AlPacino';

// OUTSIDE THE COMPONENT

const styles = {
    hero: {
        margin: '1vh 1vw',
        width: 'calc(98vw - 10px)',
        height: 'calc(98vh - 10px)',
        backgroundColor: 'black',
        border: '5px red solid',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        backgroundColor: 'white',
        width: '800px',
        margin: '40px'
    }
};

// PASS DOWN THE PROPS FROM HOC

const TheGodFather = ({ classes }) => {
    const [page, setPage] = useState(true);

    const handlePageFlip = () => {
        setPage(!page);
    }

    return (
        <Card classes={{ root: classes.hero }}>
            {page ?
                (
                    <MarlonBrando />
                ) :
                (
                    <AlPacino />
                )
            }
            <Divider classes={{ root: classes.divider }} />
            <Button color="secondary" onClick={handlePageFlip}>An offer you can't refuse</Button>
        </Card>
    )
};

// YOU HAVE A HIGHER ORDER COMPONENT PASSING DOWN PROPS SO THAT REQUIRES PROP VALIDATION

TheGodFather.propTypes = {
    classes: PropTypes.object
};

TheGodFather.defaultProps = {
    classes: {}
};

// YOU NEED TO INCLUDE HIGHER ORDER COMPONENT WITH THE withStyles METHOD

export default withStyles(styles)(TheGodFather);
