import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2),
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
    },
    backBtn: {
        justifyContent: 'flex-start',
    },
    nexBtn: {
        justifyContent: 'flex-end',
    },
}));

function Buttons({ step, setStep, allSteps }) {
    const classes = useStyles();
    return (
        <Grid item xs={12} container className={classes.container}>
            <Grid xs={6} className={clsx(classes.btn, classes.backBtn)}>
                {step > 0 && (
                    <Button
                        onClick={() => {
                            setStep(step - 1);
                        }}
                        variant="contained" color="secondary"
                    >
                        Previous
                    </Button>
                )}
            </Grid>
            <Grid item xs={6} className={clsx(classes.btn, classes.nexBtn)}>
                {step < allSteps.length - 1 && (
                    <Button
                        onClick={() => {
                            if (step < allSteps.length - 1) {
                                setStep(step + 1);
                            }
                        }}
                        variant="contained" color="secondary"
                    >
                        Next
                    </Button>
                )}
            </Grid>
        </Grid>
    );
}

export default Buttons;
