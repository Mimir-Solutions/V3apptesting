import React from 'react';
import { Typography } from '@material-ui/core';
import '../../src/index.css';
// import Main2 from '../components/Main2';

function BitAlliance() {
    return (
        <div
        // className= "bitAlliance-view" id="bitAlliance-view"
        >
             {/* <Main2 currency="BitAlliance"/> */}

            <Typography
                variant="h5"
                style={{
                    textAlign: 'center',
                    fontWeight: '500px',
                    fontFamily: 'Verdana',
                    color: '#0000f',
                }}
            >
                Bit Alliance Coming Soon!
            </Typography>
            <br></br>

            <br></br>

            <Typography
                variant="h6"
                style={{
                    textAlign: 'center',
                    marginLeft: '100px',
                    marginRight: '100px',
                    color: '#39FF14',
                }}
            >
                “Tracking your investments is what we can give you”
            </Typography>
            <br></br>
        </div>
    );
}

export default BitAlliance;
