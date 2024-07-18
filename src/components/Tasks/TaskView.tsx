import { useState, ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { TaskType } from '@/types';
import TaskTitle from '@/components/Tasks/TaskTitle';
import TextWrapper from '@/components/basic/TextWrapper';
import AnswerTitle from '@/components/basic/AnswerTitle';
import TitleDivider from '@/components/basic/TitleDivider';
import TaskCodeBlock from '@/components/Tasks/TaskCodeBlock';
import TaskInfoBlock from '@/components/Tasks/TaskInfoBlock';

interface TaskViewProps {
  task: TaskType;
}

function TaskView({ task }: TaskViewProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowAnswer(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* first row */}
        <Grid item xs={12} md={6}>
          <TaskTitle>Question</TaskTitle>
          <TitleDivider />
          <TextWrapper>{task.question}</TextWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <TaskTitle>
            <AnswerTitle
              id={task._id}
              title="Answer"
              show={showAnswer}
              handleChange={handleChange}
            />
          </TaskTitle>
          <TitleDivider />
          <TextWrapper isBlur={!showAnswer}>{task.answer}</TextWrapper>
        </Grid>
        {/* second row */}
        {!!task.code && (
          <Grid item xs={12} md={6}>
            <TaskTitle>Code</TaskTitle>
            <TitleDivider />
            <TaskCodeBlock>{task.code}</TaskCodeBlock>
          </Grid>
        )}
        {!!task.answerCode && (
          <Grid item xs={12} md={6}>
            <TaskTitle>Answer code</TaskTitle>
            <TitleDivider />
            <TaskCodeBlock isBlur={!showAnswer}>{task.answerCode}</TaskCodeBlock>
          </Grid>
        )}
        {/* third row */}
        {!!task.answerOptions && (
          <Grid item xs={12} md={6}>
            <TaskTitle>Answer options</TaskTitle>
            <TitleDivider />
            <TextWrapper>{task.answerOptions}</TextWrapper>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <TaskTitle>Task info</TaskTitle>
          <TaskInfoBlock task={task} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaskView;
