import * as React from 'react';
import Header from './header.tsx';
import Menu from './menu.tsx';
import Content from './content.tsx';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function SimpleAccordion() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Header />
          <Grid container spacing={1}>
            <Menu /> 
            <Content />
          </Grid>
      </Box>
  );
}