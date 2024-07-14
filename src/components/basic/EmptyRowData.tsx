import NoData from '@/components/basic/NoData';
import { StyledTableCell, StyledTableRow } from '@/components/basic/styledComponents';

const EmptyRowData = () => {
  return (
    <StyledTableRow>
      <StyledTableCell colSpan={7}>
        <NoData />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default EmptyRowData;
