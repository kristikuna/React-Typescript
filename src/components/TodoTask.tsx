import { ITask } from '../Interfaces'

import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//declare any props here with their types
interface Props {
  // question mark can be added if the prop is optional
  // task?: ITask;
  task: ITask;
  completeTask(taskToComplete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <>
      <Box>
        <Typography>{task.taskName}</Typography>
        <Typography>{task.deadline}</Typography>
      </Box>

      <IconButton onClick={() => {completeTask(task.taskName)}}>
        <CheckIcon aria-label="Mark Complete" color="primary"/>
      </IconButton>
    </>
  )
}

export default TodoTask