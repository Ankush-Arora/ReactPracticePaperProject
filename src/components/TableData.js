import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/style.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function TableData(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>SUBJECT's PDF</StyledTableCell>
                        <StyledTableCell align="right">TERM</StyledTableCell>
                        <StyledTableCell align="right">Download</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.allList.map((row, idx) => (
                        <StyledTableRow key={idx}>
                            <StyledTableCell component="th" scope="row">
                                {row.desc}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.term}</StyledTableCell>
                            <StyledTableCell align="right"> <button className='download-button'><a href={row.name} download={row.fileName}>Download</a></button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}