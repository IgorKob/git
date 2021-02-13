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
  margin: 30px auto;
  max-width: 320px; 
`;

export default function PaginationControlled({page, setPage, maxPage}) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Nav className={classes.root}>
      <Pagination count={maxPage === 0 ? page : page + 1} page={page} onChange={handleChange} />
    </Nav>
  );
}