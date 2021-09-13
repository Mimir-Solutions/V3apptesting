import { React } from 'react';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

export default function EtherBalance () {
    const { account } = useEthers();

    let etherBalance = formatEther(useEtherBalance(account))

    return (
        <div>
            {etherBalance}
        </div>
    )
}