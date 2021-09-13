import React, { useState } from 'react';
import {
    Box,
    Checkbox,
    Grid,
    Snackbar,
    Typography,
    TextField,
    // Button,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Page2({
    selectedFacets,
    setSelectedFacets,
    facets,
    values,
    setValues,
}) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');

    const handleClick = (block, value) => {
        if (selectedFacets.find((b) => b.name === block)) {
            setSelectedFacets(selectedFacets.filter((b) => b.name !== block));
            setMessage(`${block} unselected`);
        } else {
            setSelectedFacets([...selectedFacets, { name: block, value, timestamp: new Date().toISOString() }]);
            setMessage(`${block} selected`);
        }
        setOpen(true);
        console.log({ selectedFacets });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const onChange = (e, facet) => {
        const foundFacet = selectedFacets.find(
            (_facet) => _facet.name === facet
        );

        if (foundFacet) {
            setSelectedFacets([
                ...selectedFacets.filter((f) => f.name !== foundFacet.name),
                {
                    ...foundFacet,
                    value: e.target.value,
                },
            ]);
        }

        setValues({
            ...values,
            [facet]: e.target.value,
        });
    };

    return (
        <Grid item xs={12} container spacing={2}>
            {facets.map((facet) => (
                <Grid key={facet} item xs={12} sm={4}>
                    <Box
                        display="flex"
                        alignItems="flex-start"
                        flexDirection="column"
                        justifyContent="center"
                        borderColor="primary"
                        border="1px solid green"
                        padding={2}
                    >
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                checked={
                                    selectedFacets.findIndex(
                                        (_facet) => _facet.name === facet
                                    ) > -1
                                }
                                onChange={() =>
                                    handleClick(facet, values[facet])
                                }
                                color="secondary"
                            />
                            <Typography variant="body1">{facet}</Typography>
                        </Box>
                        <Box
                            marginTop={2}
                            display="flex"
                            justifyContent="center"
                            style={{
                                margin: 'auto',
                            }}
                        >
                            <TextField
                                placeholder="Value"
                                color="secondary"
                                variant="outlined"
                                defaultValue={values[facet]}
                                onChange={(e) => onChange(e, facet)}
                            />
                        </Box>
                        {/* <Box justifySelf="flex-end" flex={0} marginLeft="auto" >
                            <Button variant="contained" color="secondary">Info</Button>
                        </Box> */}
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

export default Page2;
