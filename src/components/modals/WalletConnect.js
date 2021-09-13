import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useEthers } from '@usedapp/core';
import TokenBalanceWidget from  './../widgets/TokenBalanceWidget'

function WalletConnect ({closeModal}) {

    const { account, deactivate } = useEthers();
    return (
        <div>
           <Box>
                <Typography variant = "h6"> Wallet ID: &nbsp;{ account }</Typography>
                <Typography variant = "button">
                   
                </Typography>

                <TokenBalanceWidget
                    tokenLabel="ETH"
                    tokenAddress={null}
                />

                <TokenBalanceWidget
                    tokenLabel="DAI"
                    tokenAddress="0x6b175474e89094c44da98b954eedeac495271d0f"
                />
                <br></br>

                <Button
                    className="mt-3"
                    onClick={() => {
                        closeModal();
                        deactivate();
                    }}
                    variant="contained"
                    color="secondary"
                    size="medium"
                >
                    Logout
                </Button>
           </Box>

           
        </div>
    )
}

export default WalletConnect;