import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Box,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    InputAdornment,
    OutlinedInput,
    Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    marginVertical: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(),
    },

    marginBottom: { marginBottom: theme.spacing() },
    textUppercase: { textTransform: 'uppercase' },
    radiosContainer: {
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    pairContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    rewardText: {
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.fontSize,
        },
    },
}));

function SlideThree() {
    const styles = useStyles();
    const [method, setMethod] = useState('deposit');

    return (
        <Grid item xs={12}>
            <Box
                display="flex"
                flexDirection="row"
                // margin={3}
                alignItems="center"
                // padding={3}
                justifyContent="center"
            >
                <Box
                    // margin={5}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography variant="body1">
                        NFY/ETH LP STAKING VAULT v3
                    </Typography>
                    <Box display="flex" className={clsx(styles.pairContainer)}>
                        <Typography variant="h6" color="secondary">
                            TOTAL STAKED: &nbsp;
                        </Typography>
                        <Typography variant="h6">N/A</Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography
                            component="span"
                            className={clsx(styles.rewardText)}
                        >
                            0.30% OF REWARD POOL DAILY
                        </Typography>
                    </Box>
                    <Box display="flex" className={clsx(styles.pairContainer)}>
                        <Typography variant="body2" color="secondary">
                            YOUR NFY/ETH BALANCE: &nbsp;
                        </Typography>
                        <Typography variant="body2">N/A</Typography>
                    </Box>
                    <Box display="flex" className={clsx(styles.pairContainer)}>
                        <Typography variant="body2" color="secondary">
                            STAKED LP/NFY BALANCE: &nbsp;
                        </Typography>
                        <Typography variant="body2">
                            N/A&nbsp;/&nbsp;N/A
                        </Typography>
                    </Box>
                    <Box display="flex" className={clsx(styles.pairContainer)}>
                        {/* <Box display="flex" marginRight={3}>
                            <Typography variant="body2" color="secondary">
                                APY: &nbsp;
                            </Typography>
                            <Typography variant="body2">N/A</Typography>
                        </Box> */}
                        <Box display="flex">
                            <Typography variant="body2" color="secondary">
                                YOUR REWARDS: &nbsp;
                            </Typography>
                            <Typography variant="body2">N/A</Typography>
                        </Box>
                    </Box>
                    <Box marginY={1}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                className={clsx(styles.radiosContainer)}
                                defaultValue="deposit"
                            >
                                <FormControlLabel
                                    value="deposit"
                                    control={<Radio color="secondary" />}
                                    label="Deposit"
                                    onClick={() => setMethod('deposit')}
                                />
                                <FormControlLabel
                                    value="withdraw"
                                    control={<Radio color="secondary" />}
                                    label="Withdraw"
                                    onClick={() => setMethod('withdraw')}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <FormControl
                        fullWidth
                        variant="outlined"
                        className={styles.marginVertical}
                    >
                        <OutlinedInput
                            id="input"
                            placeholder="0"
                            endAdornment={
                                <InputAdornment position="start">
                                    NFY
                                </InputAdornment>
                            }
                            color="secondary"
                        />
                    </FormControl>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <Box width="50%" marginRight={1}>
                            <Button
                                fullWidth
                                type="button"
                                variant="outlined"
                                color="secondary"
                            >
                                {method.toUpperCase()}
                            </Button>
                        </Box>
                        <Box width="70%" marginLeft={1}>
                            <Button
                                fullWidth
                                type="button"
                                variant="outlined"
                                color="secondary"
                            >
                                {method.toUpperCase()} ALL
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
}

export default SlideThree;
