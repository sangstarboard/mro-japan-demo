import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Link from '@mui/material/Link';

export default function Header() {
  return (
  	
	<Grid item xs={4} md={2}>
        <div>
          <Typography color="blue" sx={{mt:3}}>
            <strong>PART</strong>
          </Typography>
        </div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography> Parts Order </Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Parts Order</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Parts Kit</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Parts Kit</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Order Confirmation</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Parts Order List (Zone)</Link>
						</Typography>

						<Typography sx={{ml:3}}>
						  <Link href="#">Parts Order List Search</Link>
						</Typography>

						<Typography sx={{ml:3}}>
						  <Link href="#">Parts Order List (All)</Link>
						</Typography>

						<Typography sx={{ml:3}}>
						  <Link href="#">受領者検索</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Document Drafting Assistance</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">SPR</Link>
						</Typography>

						<Typography sx={{ml:3}}>
						  <Link href="#">良品票添付台紙</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Parts Supply Department</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Parts Supply Department Menu</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

		<div>
			<Typography color="blue" sx={{mt:3}}>
				<strong>WORK ORDER</strong>
			</Typography>
		</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography> Task Card </Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Task Card Status</Link>
						</Typography>  
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography> Line Maintenance </Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">LINE定例作業</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

        <div>
            <Typography color="blue" sx={{mt:3}}>
            	<strong>TOOLS</strong>
            </Typography>
        </div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography> Tools Order </Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Tool Order</Link>
						</Typography>  
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography> Tool Check </Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography sx={{ml:3}}>
						  <Link href="#">Tool Inventory</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>            
					<Typography sx={{ml:2, mb:10, position: 'static', bottom: 0}}>
					Help & information
					</Typography>
				</Accordion>
			</div>

			<div>
				<Accordion elevation={0}>            
					<Typography sx={{ml:2, mb:5, position: 'static', bottom: 0}}>
					Logout
					</Typography>
				</Accordion>
			</div>
    </Grid>

	)
}



