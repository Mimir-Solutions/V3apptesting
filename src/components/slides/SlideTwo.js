import React from 'react';
import {
    Grid,
    Box,
    Typography,
    FormControl,
    Button,
    OutlinedInput,
    InputAdornment,
} from '@material-ui/core';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginVertical: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    marginBottom: { marginBottom: theme.spacing() },
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

function SlideTwo() {
    const styles = useStyles();

    return (
        <Grid
            item
            container
            justifyContent="center"
            alignItems="flex-end"
            xs={12}
        >
            <Grid item container xs={12} spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Box margin={1}>
                        <Typography
                            variant="body1"
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            UNSTAKE FROM v2 AND MOVE TO v3
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            flex={1}
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
                                <Typography
                                    variant="h6"
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
                                    staked nfy/nfy:&nbsp;
                                </Typography>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                >
                                    n/a n/a
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
                            <Grid
                                item
                                xs={12}
                                container
                                className={styles.marginBottom}
                            >
                                <Grid item lg={6} md={12} style={{ flex: 1 }}>
                                    <Box paddingX={0.5} marginY={1}>
                                        <Button
                                            fullWidth
                                            type="button"
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            STAKE&nbsp;NFY
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item md={12} lg={6} style={{ flex: 1 }}>
                                    <Box paddingX={0.5} marginY={1}>
                                        <Button
                                            fullWidth
                                            type="button"
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            unstake
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                            >
                                claim rewards
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box margin={1}>
                        <Typography
                            variant="body1"
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            UNSTAKE LP FROM v2 AND MOVE TO v3
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            flex={1}
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
                                <Typography
                                    variant="h6"
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
                                    nfy/eth lp balance:&nbsp;
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
                                    staked lp/nft:&nbsp;
                                </Typography>
                                <Typography
                                    className={clsx(styles.textUppercase)}
                                    component="span"
                                >
                                    n/a n/a
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
                                    <br></br>
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
                            <Grid
                                item
                                xs={12}
                                className={styles.marginBottom}
                                container
                            >
                                <Grid item lg={12} xl={6} style={{ flex: 1 }}>
                                    <Box paddingX={0.2} marginY={1}>
                                        <Button
                                            fullWidth
                                            type="button"
                                            variant="outlined"
                                            color="secondary"
                                            style={{ wordBreak: 'keep-all' }}
                                        >
                                            STAKE&nbsp;
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item lg={12} xl={6} style={{ flex: 1 }}>
                                    <Box paddingX={0.5} marginY={1}>
                                        <Button
                                            fullWidth
                                            type="button"
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            TRADE
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                color="secondary"
                            >
                                claim rewards
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SlideTwo;
