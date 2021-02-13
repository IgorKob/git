import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));
const Nav = styled.div`
  display: flex;
  justify-content: center; 
`;

export default function PaginationApp({page, setPage, maxPage}) {
  const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Nav className={classes.root}>
      <Pagination count={maxPage} page={page} onChange={handleChange} color="primary" />
    </Nav>
  );
}