import { React } from 'react';
import { useEthers, useTokenBalance } from '@usedapp/core';
import { formatUnits } from '@ethersproject/units';

export default function TokenBalance ({address}) {
    const { account } = useEthers()
    const tokenBalance = useTokenBalance(address, account)

    return (
        <div>
            {tokenBalance ? formatUnits(tokenBalance, 18) : 'N/A'}
        </div>
    )
}