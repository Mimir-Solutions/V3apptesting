import {React} from 'react';
import { Grid } from '@material-ui/core';
import EtherBalance from './EtherBalance'
import TokenBalance from './TokenBalance'



export default function TokenBalanceWidget({tokenAddress,tokenLabel}) {
    return (
        <div>
            <Grid container spacing = {3}>
                <Grid item xs={6}>
                    {tokenLabel}
                </Grid>
                <Grid item xs={6}>
                    {tokenAddress === null ? <EtherBalance/> : <TokenBalance address={tokenAddress}/>}
                </Grid>
            </Grid>
        </div>
    )
};