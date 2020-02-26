import React, { useState } from 'react';

import {
    Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import MarlonBrando from './MarlonBrando';
import AlPacino from './AlPacino';

const styles = {

};

const TheGodFather = () => {
    const [page, setPage] = useState(true);

    const handlePageFlip = () => {
        setPage(!page);
    }

    return (
        <div>
            {page ?
                (
                    <MarlonBrando />
                ) :
                (
                    <AlPacino />
                )
            }
            <Button onClick={handlePageFlip}>An offer you can't refuse</Button>
        </div>
    )
};

export default withStyles(styles)(TheGodFather);