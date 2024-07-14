import { useState, ChangeEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { TaskType } from '@/types';
import { tableRowHeight } from '@/constants';
import TypesChip from '@/components/basic/TypesChip';
import EmptyRowData from '@/components/basic/EmptyRowData';
import ComplexityChip from '@/components/basic/ComplexityChip';
import EllipsisTooltip from '@/components/basic/EllipsisTooltip';
import { StyledTableCell, StyledTableRow } from '@/components/basic/styledComponents';

interface TodoTable {
  rows: TaskType[];
  bgColor?: string;
}

const TasksList = ({ rows, bgColor }: TodoTable) => {
  const [color] = useState(bgColor || '');
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    newPage: number,
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
  };

  const emptyRows =
    currentPage > 0 ? Math.max(0, (1 + currentPage) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ mt: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold' }}>
              <StyledTableCell color={color}>Question</StyledTableCell>
              <StyledTableCell align="right" color={color}>
                Code
              </StyledTableCell>
              <StyledTableCell align="right" color={color}>
                Answer
              </StyledTableCell>
              <StyledTableCell align="right" color={color}>
                Type
              </StyledTableCell>
              <StyledTableCell align="right" color={color}>
                Complexity
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    <Link
                      to={`/tasks/${row.id}`}
                      style={{ textDecoration: 'none', color: '#313131' }}
                    >
                      <EllipsisTooltip text={row.question} width={'100%'} />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="right" scope="row">
                    <EllipsisTooltip text={row.code} width={'100%'} isCode={true} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <EllipsisTooltip text={row.answer || 'not specified'} width={'100%'} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TypesChip type={row.type} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <ComplexityChip complexity={row.complexity} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {!rows.length && <EmptyRowData />}
            {emptyRows > 0 && (
              <TableRow style={{ height: tableRowHeight * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        page={currentPage}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[10, 25, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default TasksList;
