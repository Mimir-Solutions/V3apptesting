import {useState} from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
} from "@material-ui/core";
// import dateTime from '../../dateTime';

import React from "react";

function Page3({ selectedBlocks, selectedFacets }) {
    const [fields, setFields] = useState({tokenName: '', tokenSymbol: '', decimals: 0, supply: 0, totalSupply: 0})

    const onChange = (e) => {
        const {name, value} = e.target;

        setFields({...fields, [name]: value});

    }

    const onDeploy = (e) => {
        e.preventDefault();

        const payload = {...fields, selectedBlocks, selectedFacets};

        console.log({payload});

    }

  return (
    <Grid item container xs={12} spacing={3}>
      <Grid xs={12} md={8} item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedBlocks.map((block) => {
                const date = `${new Date(block.timestamp).getDate()}/${
                  new Date(block.timestamp).getMonth() + 1
                }/${new Date(block.timestamp).getFullYear()} ${new Date(
                  block.timestamp
                ).getHours()}:${new Date(
                  block.timestamp
                ).getMinutes()}:${new Date(block.timestamp).getSeconds()}`;
                return (
                  <TableRow key={block.value}>
                    <TableCell>{block.value}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>{date}</TableCell>
                    {/* <TableCell>
                                        <Button variant="text">Edit</Button>{' '}
                                    </TableCell> */}
                  </TableRow>
                );
              })}
              {selectedFacets.map((facet) => {
                const date = `${new Date(facet.timestamp).getDate()}/${
                  new Date(facet.timestamp).getMonth() + 1
                }/${new Date(facet.timestamp).getFullYear()} ${new Date(
                  facet.timestamp
                ).getHours()}:${new Date(
                  facet.timestamp
                ).getMinutes()}:${new Date(facet.timestamp).getSeconds()}`;
                return (
                  <TableRow key={facet.name}>
                    <TableCell>{facet.name}</TableCell>
                    <TableCell>{facet.value}</TableCell>
                    <TableCell>{date}</TableCell>
                    {/* <TableCell> */}
                    {/* <Button variant="text">Edit</Button> */}
                    {/* </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={12} md={4} item>
        <Box padding={3} border="1px solid green">
          <Box>
            <Box marginBottom={2}>
              <TextField
                placeholder="Token name"
                variant="outlined"
                color="secondary"
                fullWidth
                name="tokenName"
                value={fields.tokenName}
                onChange={onChange}
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                placeholder="Token symbol"
                variant="outlined"
                color="secondary"
                fullWidth
                name="tokenSymbol"
                value={fields.tokenSymbol}
                onChange={onChange}
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                placeholder="Total decimals"
                variant="outlined"
                color="secondary"
                fullWidth
                name="decimals"
                value={fields.decimals}
                onChange={onChange}
                type="number"
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                placeholder="Supply"
                variant="outlined"
                color="secondary"
                fullWidth
                name="supply"
                value={fields.supply}
                onChange={onChange}
                type="number"
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                placeholder="Total Supply"
                variant="outlined"
                color="secondary"
                fullWidth
                name="totalSupply"
                value={fields.totalSupply}
                onChange={onChange}
                type="number"
              />
            </Box>
          </Box>
          <Box padding={1} border="1px solid green">
            {selectedBlocks.map((block) => (
              <Typography key={block.value}>
                {block.value}: &nbsp;1 NFY
              </Typography>
            ))}
            {selectedFacets.map((facet) => (
              <Typography key={facet.name}>
                {facet.name}:&nbsp;{facet.value}&nbsp;NFY
              </Typography>
            ))}
            <Box marginTop={3}>
              <Typography>
                Total:&nbsp;
                {selectedFacets.reduce(
                  (prevSum, currentFacet) =>
                    prevSum + Number(currentFacet.value),
                  0
                ) + selectedBlocks.reduce((prevSum) => prevSum + 1, 0)}
                &nbsp;NFY
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" marginTop={3}>
            <Button variant="contained" color="secondary" onClick={onDeploy} >
              Deploy
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Page3;
