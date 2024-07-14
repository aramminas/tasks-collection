import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { teal } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

interface AnswerTitleProps {
  id: string;
  title: string;
  show: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function AnswerTitle({ id, title, show, handleChange }: AnswerTitleProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{title}</span>

      <div>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: teal[800],
                '&.Mui-checked': {
                  color: teal[600],
                },
              }}
              onChange={handleChange}
            />
          }
          label={show ? 'hide' : 'show'}
          labelPlacement="start"
        />
        <Link to={`/tasks/${id}/edit`}>
          <IconButton aria-label="edit" size="small" color="primary">
            <EditIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default AnswerTitle;
