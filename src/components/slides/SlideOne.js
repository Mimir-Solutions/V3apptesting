import React from 'react';
import {
    Grid,
    Box,
    Typography,
    FormControl,
    Button,
    InputAdornment,
    OutlinedInput,
} from '@material-ui/core';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginVertical: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    marginBottom: { marginBottom: theme.spacing(0) },
    textUppercase: { textTransform: 'uppercase' },
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

function SlideOne() {
    const styles = useStyles();

    return (
        <Grid item container justifyContent="center" xs={12}>
            <Grid item container xs={12} spacing={3}>
                <Grid xs={12} sm={6}>
                    <Box margin={1}>
                        <Typography
                            variant="body1"
                            style={{ textAlign: 'center', marginBottom: 8 }}
                        >
                            UNSTAKE FROM v1 AND MOVE TO v2
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Typography
                                color="secondary"
                                className={clsx(
                                    styles.marginBottom,
                                    styles.textUppercase
                                )}
                            >
                                nfy staking vault v2
                            </Typography>
                            <div className={clsx(styles.pairContainer)}>
                                <Typography variant="h6"
                                    component="span"
                                    color="secondary"
                                    className={clsx(styles.textUppercase)}
                                >
                                    total staked: &nbsp;
                                </Typography>
                                <Typography
                                    component="span"
                                    className={clsx(styles.textUppercase)}
                                >
                                    n/a
                                </Typography>
                            </div>
                            <Typography
                                className={clsx(
                                    styles.textUppercase,
                                    styles.marginVertical,
                                    styles.rewardText
                                )}
                            >
                                0.10% of reward pool daily
                            </Typography>
                            <div className={clsx(styles.pairContainer)}>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                    color="secondary"
                                >
                                    your nfy balance:&nbsp;
                                </Typography>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                >
                                    n/a
                                </Typography>
                            </div>
                            <div className={clsx(styles.pairContainer)}>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                    color="secondary"
                                >
                                    staked nfy/nft balance:&nbsp;
                                </Typography>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                >
                                    n/a
                                </Typography>
                            </div>
                            <div className={clsx(styles.pairContainer)}>
                                <div>
                                    {/* <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                        color="secondary"
                                    >
                                        apy:&nbsp;
                                    </Typography> */}
                                    {/* <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                    >
                                        n/a&nbsp;&nbsp;
                                    </Typography> */}
                                </div>
                                <div>
                                    <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                        color="secondary"
                                    >
                                        your rewards&nbsp;
                                    </Typography>
                                    <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                    >
                                        n/a&nbsp;&nbsp;
                                    </Typography>
                                </div>
                            </div>
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
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                            >
                                unstake from v1
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Box margin={1}>
                        <Typography
                            variant="body1"
                            style={{ textAlign: 'center', marginBottom: 8 }}
                        >
                            UNSTAKE FROM v1 AND MOVE TO v2
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Typography
                                color="secondary"
                                className={clsx(
                                    styles.marginBottom,
                                    styles.textUppercase
                                )}
                            >
                                nfy/eth staking vault v2
                            </Typography>
                            <div className={clsx(styles.pairContainer)}>
                                <Typography variant="h6"
                                    component="span"
                                    color="secondary"
                                    className={clsx(styles.textUppercase)}
                                >
                                    total staked: &nbsp;
                                </Typography>
                                <Typography
                                    component="span"
                                    className={clsx(styles.textUppercase)}
                                >
                                    n/a
                                </Typography>
                            </div>
                            <Typography
                                className={clsx(
                                    styles.textUppercase,
                                    styles.marginVertical,
                                    styles.rewardText
                                )}
                            >
                                0.30% of reward pool daily
                            </Typography>
                            <div className={clsx(styles.pairContainer)}>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                    color="secondary"
                                >
                                    your nfy/eth balance:&nbsp;
                                </Typography>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                >
                                    n/a
                                </Typography>
                            </div>
                            <div className={clsx(styles.pairContainer)}>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                    color="secondary"
                                >
                                    staked lp/nft balance:&nbsp;
                                </Typography>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                >
                                    n/a
                                </Typography>
                            </div>
                            <div className={clsx(styles.pairContainer)}>
                                <div>
                                    {/* <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                        color="secondary"
                                    >
                                        apy:&nbsp;
                                    </Typography> */}
                                    {/* <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                    >
                                        n/a&nbsp;&nbsp;
                                    </Typography> */}
                                </div>
                                <div>
                                    <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                        color="secondary"
                                    >
                                        your rewards&nbsp;
                                    </Typography>
                                    <Typography
                                        className={clsx(styles.textUppercase)}
                                        component="span"
                                    >
                                        n/a&nbsp;&nbsp;
                                    </Typography>
                                </div>
                            </div>
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
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                            >
                                unstake from v1
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SlideOne;
