import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components';

const useStyles = makeStyles({
  table: {
    whiteSpace: 'nowrap',
    overflow : 'auto',
    '& tr:nth-of-type(odd)': {
        backgroundColor: '#ccc',
    },
    '& tr:hover': {
        backgroundColor: '#aaa',
    },
  },
});
const TableWrap = styled.div`
  maw-width: 100%;
  overflow-x : auto;
`;

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: 'rgba(0,0,0,.5)',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
    },
  }))(TableCell);


export default function TableApp({children, rows, arr}) {
  const classes = useStyles();
  return (
    <TableWrap>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {arr.map(el => (<StyledTableCell key={el}>{el}</StyledTableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.name}>
                      {children(row)}
                  </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrap>
  );
}