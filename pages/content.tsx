import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Content() {
  return (
	<Grid item xs={8} md={10}>
		<Box sx={{ width: '100%' }}>
	      <Stack spacing={2}>
	        <Item>
	        	<Typography variant="h6" component="div" textAlign="right" sx={{ flexGrow: 1 }} >
	        		Hello Admin
	        	</Typography>

	        	<Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#F6F6F6 !important'}}>
			      <Stack spacing={2}>
			        <Item>Item 2</Item>
			      </Stack>
			    </Box>

	        </Item>
	        <Item>Item 2</Item>
	      </Stack>
	    </Box>
	</Grid>
  );
}