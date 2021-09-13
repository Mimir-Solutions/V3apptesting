import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Buttons from '../components/diamond/Buttons';
import Page1 from '../components/diamond/Page1';
import Page2 from '../components/diamond/Page2';
import Page3 from '../components/diamond/Page3';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: { display: 'flex', justifyContent: 'center' },
}));

function Diamond() {
    const styles = useStyles();

    const [step, setStep] = useState(0);
    const [selectedBlocks, setSelectedBlocks] = useState([]);
    const [selectedFacets, setSelectedFacets] = useState([]);
    const [values, setValues] = useState({
        Rebase: '0',
        Yeam: '0',
        Fot: '0',
        value1: '0',
        value2: '0',
        value3: '0',
    });

    const facets = ['Rebase', 'Yeam', 'Fot', 'value1', 'value2', 'value3'];

    const allSteps = [
        <Page1
            selectedBlocks={selectedBlocks}
            setSelectedBlocks={setSelectedBlocks}
        />,
        <Page2
            selectedFacets={selectedFacets}
            setSelectedFacets={setSelectedFacets}
            facets={facets}
            values={values}
            setValues={setValues}
        />,
        <Page3
            selectedBlocks={selectedBlocks}
            selectedFacets={selectedFacets}
        />,
    ];

    return (
        <Grid container className={styles.container}>
            {allSteps[step]}
            <Buttons allSteps={allSteps} step={step} setStep={setStep} />
        </Grid>
    );
}

export default Diamond;
