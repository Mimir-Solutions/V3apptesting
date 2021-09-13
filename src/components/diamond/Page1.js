import React, { useState } from 'react';
import { Box, Button, Grid, Snackbar, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Page1({ selectedBlocks, setSelectedBlocks }) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');

    const handleClick = (block) => {

        console.log({selectedBlocks})
        if (selectedBlocks.find((b) => b.value === block)) {
            setSelectedBlocks(selectedBlocks.filter((b) => b.value !== block));
            setMessage(`${block} unselected`);
        } else {
            setSelectedBlocks([...selectedBlocks, {value: block, timestamp: new Date().toISOString()}]);
            setMessage(`${block} selected`);
        }
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const data = [
        'ERC20',
        'ERC1115',
        'ERC721',
        'BEP20',
        'ALTChain20',
        'Altchain20',
    ];

    return (
        <Grid item xs={12} container spacing={3}>
            {data.map((block) => (
                <Grid key={block} item xs={12} sm={4}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        borderColor="primary"
                        border="1px solid green"
                        padding={3}
                    >
                        <Typography variant="body1">{block}</Typography>
                        <Box marginTop={2}>
                            <Button
                                variant="contained" color="secondary"
                                onClick={() => handleClick(block)}
                            >
                                {selectedBlocks.find((b) => b.value === block)
                                    ? 'Remove'
                                    : 'Select'}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            ))}
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default Page1;
